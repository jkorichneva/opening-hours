declare global {
  interface Window {
    dataLayer: any;
  }
}
// maybe users will try to click on something in the timetable,
// we can track it and then add some hints/extra info
export function handleClick(element: HTMLElement) {
  console.log(
    `User clicked on ${element.nodeName} with text ${element.textContent}`
  );
  console.log("Sending to the analytics system");
  pushDataLayer(
    "click",
    `element ${element.nodeName}`,
    element.textContent ?? ""
  );
}

export function hoverClock() {
  console.log(`User hovered the clock and found an easter egg`);
  console.log("Sending to the analytics system");
  pushDataLayer("hover", `clock`, window.location.pathname);
}

function pushDataLayer(event: string, action: string, label: string) {
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  window.dataLayer.push({
    event,
    action,
    label,
  });
}
