import {
  RenderHookResult,
  renderHook,
  waitFor,
  act,
} from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import { useWorkingHours } from "@/hooks/useWorkingHours";
import mock from "../../backend/hoursMock.json";

describe("Use Working Hours Hook", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("Should return error", async () => {
    const spy = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve("lkl"),
      })
    );
    global.fetch = spy;
    let hook;
    await act(async () => {
      hook = renderHook(() => useWorkingHours());
    });
    const { result } = hook as unknown as RenderHookResult<any, any>;
    await waitFor(() => {
      expect(result.current.isLoading).toEqual(false);
    });
    expect(result.current.isError).toEqual(true);
    expect(result.current.openingHoursStrings).toEqual({});
    // @ts-ignore
    global.fetch.mockClear();
  });

  it("Should parse data correctly", async () => {
    const spy = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mock),
      })
    );
    global.fetch = spy;
    fetchMock.mockResponseOnce(JSON.stringify(mock));
    let hook;
    await act(async () => {
      hook = renderHook(() => useWorkingHours());
    });
    const { result } = hook as unknown as RenderHookResult<any, any>;
    await waitFor(() => {
      expect(result.current.isLoading).toEqual(false);
    });
    expect(result.current.isError).toEqual(false);
    expect(result.current.openingHoursStrings).toEqual({
      friday: "10 AM - 1 AM",
      monday: "Closed",
      saturday: "10 AM - 1 AM",
      sunday: "12 PM - 9 PM",
      thursday: "10 AM - 6 PM",
      tuesday: "10 AM - 6 PM",
      wednesday: "Closed",
    });
    // @ts-ignore
    global.fetch.mockClear();
  });
});
