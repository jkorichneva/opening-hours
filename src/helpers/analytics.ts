// maybe users will try to click on something in the timetable,
// we can track it and then add some hints/extra info
declare global {
  interface Window {
    dataLayer: any;
  }
}
export function handleClick(element: HTMLElement) {
  console.log(
    `User clicked on ${element.nodeName} with text ${element.textContent}`
  );
  console.log("Sending to the analytics system");
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  window.dataLayer.push({
    event: "click",
    action: `element ${element.nodeName}, label: ${element.textContent}`,
  });
}
