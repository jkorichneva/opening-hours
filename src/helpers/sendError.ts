type Priority = "critical" | "major" | "minor" | "info";
export default function sendError(
  priority: Priority,
  message: string,
  page: string,
  error: Error
) {
  console.log(`${priority} error: ${message}`);
  console.log("Sending error to tracking system");
  fetch("http://localsentryurl/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      priority,
      message,
      page,
      error,
    }),
  });
}
