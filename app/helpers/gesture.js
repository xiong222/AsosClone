/*

https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10511224/

Edge browser running on a device with touch capability (such as Surface tablet) currently fires mouseover, mouseout, mouseover, click, and mouseout events when you tap.

If you have a component that reacts to both tap and hover events (e.g., onMouseEnter, onMouseLeave), then you're going to need to filter out the additional mouse events to ensure the expected behaviour for tap on Edge + Surface.

*/

import debounce from "lodash/debounce";

let eventList = [];

const processEvents = debounce(() => {
  const validEvent =
    eventList.find(([{ type }]) => type === "click") || eventList[0];

  const [e, callbackFn] = validEvent;
  callbackFn(e);

  eventList = [];
}, 1);

/* will call callbackFn with e if it thinks e is a valid event and not a multi gesture variant */
export const validate = (e, callbackFn) => {
  eventList.push([e.nativeEvent || e, callbackFn]);
  processEvents();
};
