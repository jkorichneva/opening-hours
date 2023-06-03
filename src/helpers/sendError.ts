export default function sendError(error: Error) {
  console.log("Sending error to tracking system");
  console.error(error);
  fetch("http://localsentryurl/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(error),
  });
}
