import { getWorkingHours } from "@/helpers/getWorkingHours";

describe("Should format time correctly", () => {
  it("Should return strings with various cases", () => {
    expect(
      getWorkingHours({
        monday: [],
        tuesday: [
          { type: "open", value: 36000 },
          { type: "close", value: 64800 },
        ],
        wednesday: [],
        thursday: [
          { type: "open", value: 36000 },
          { type: "close", value: 64800 },
        ],
        friday: [{ type: "open", value: 36000 }],
        saturday: [
          { type: "close", value: 3600 },
          { type: "open", value: 36000 },
        ],
        sunday: [
          { type: "close", value: 3600 },
          { type: "open", value: 43200 },
          { type: "close", value: 75600 },
        ],
      })
    ).toEqual({
      monday: "Closed",
      tuesday: "10 AM - 6 PM",
      wednesday: "Closed",
      thursday: "10 AM - 6 PM",
      friday: "10 AM - 1 AM",
      saturday: "10 AM - 1 AM",
      sunday: "12 PM - 9 PM",
    });
  });
});
