import { EventEmitter } from "fbemitter";

const globalEventHandler = new EventEmitter();

export const events = {
  focusFirstPrimaryNavigationItem: "focusFirstPrimaryNavigationItem",
  closeSearchOverlay: "closeSearchOverlay",
  focusBackToFloor: "focusBackToFloor",
  keyDown: "keydown",
  click: "click",
  scroll: "scroll",
  resize: "resize"
};

export const keys = {
  tab: "Tab",
  escape: "Escape"
};

const normaliseKey = event => {
  if (event.key) {
    return event.key;
  }

  switch (event.which) {
    case 9:
      return keys.tab;
    case 27:
      return keys.escape;
  }
};

typeof window !== "undefined" &&
window.addEventListener(events.keyDown, event =>
  globalEventHandler.emit(events.keyDown, {
    key: normaliseKey(event),
    originalEvent: event
  })
);

typeof window !== "undefined" &&
window.addEventListener(events.click, event =>
  globalEventHandler.emit(events.click, event)
);

typeof window !== "undefined" &&
window.addEventListener(events.scroll, () =>
  globalEventHandler.emit(events.scroll)
);

typeof window !== "undefined" &&
window.addEventListener(events.resize, () =>
  globalEventHandler.emit(events.resize)
);

export default globalEventHandler;

export const focusPrimaryNavigationFor = gender =>
  globalEventHandler.emit(events.focusFirstPrimaryNavigationItem, gender);

export const focusFloorNavigationFor = gender =>
  globalEventHandler.emit(events.focusBackToFloor, gender);

export const closeSearchOverlay = () =>
  globalEventHandler.emit(events.closeSearchOverlay);

