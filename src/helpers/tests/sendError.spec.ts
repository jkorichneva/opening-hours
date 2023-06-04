import sendError from "@/helpers/sendError";

describe("Send Error", () => {
  it("Should invoke fetch to send error", () => {
    const spy = jest.fn().mockImplementation(() => {});
    global.fetch = spy;
    sendError("critical", "Error occured", "/my-page", new Error());
    expect(spy).toHaveBeenCalledWith("http://localsentryurl/", {
      body: '{"priority":"critical","message":"Error occured","page":"/my-page","error":{}}',
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    // @ts-ignore
    global.fetch.mockClear();
  });
});
