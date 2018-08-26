export const DEFER_ACTIONS = 'DEFER_ACTIONS';

/*
For example...

const actions = {
  BAG_ITEM_DELETE_TRANSITION_END: [{},{},{}]
}

const types = {
  OPEN_DROPDOWN: BAG_ITEM_DELETE_TRANSITION_END,
  CLOSE_DROPDOWN: BAG_ITEM_DELETE_TRANSITION_END
}

const cancel = {
  BAG_ERROR: BAG_ITEM_DELETE_TRANSITION_END
}
*/

const actionDeferralMiddleware = () => {
  const actions = new Map();
  const types = new Map();
  const cancel = new Map();

  const clear = (actionType) => {
    actions.delete(actionType);

    [...types]
      .filter(([, type]) => type === actionType)
      .forEach(([key]) => types.delete(key));

    [...cancel]
      .filter(([, type]) => type === actionType)
      .forEach(([key]) => cancel.delete(key));
  };

  return (next) => (action) => {
    if (action.type === DEFER_ACTIONS) {
      const {
        actionsToDefer,
        actionToWaitFor,
        actionsToCancelOn = []
      } = action.payload;

      actions.set(actionToWaitFor, []);

      actionsToDefer.forEach((type) => {
        types.set(type, actionToWaitFor);
      });

      actionsToCancelOn.forEach((type) => {
        cancel.set(type, actionToWaitFor);
      });

      return next(action);
    }

    const cancelled = cancel.get(action.type);

    if (cancelled) {
      clear(cancelled);
    }

    const actionToWaitFor = types.get(action.type);

    if (actionToWaitFor) {
      const deferredActions = actions.get(actionToWaitFor).concat(action);

      actions.set(actionToWaitFor, deferredActions);

      return next({ type: null });
    }

    const deferredActions = actions.get(action.type);

    if (deferredActions) {
      deferredActions.forEach((action) => next(action));
      clear(action.type);
    }

    return next(action);
  };
};

export default actionDeferralMiddleware;
