import { roundNumberAndCovertToLocale } from "./numbers";

describe("roundNumberAndCovertToLocale", () => {
  it("should round a positive number and convert it to a locale string", () => {
    const value = 1234.5678;
    const result = roundNumberAndCovertToLocale(value);
    expect(result).toBe("1,235");
  });

  it("should round a negative number and convert it to a locale string", () => {
    const value = -9876.5432;
    const result = roundNumberAndCovertToLocale(value);
    expect(result).toBe("-9,877");
  });

  it("should round a zero and convert it to a locale string", () => {
    const value = 0;
    const result = roundNumberAndCovertToLocale(value);
    expect(result).toBe("0");
  });

  it("should round and convert large numbers to a locale string", () => {
    const value = 1234567890.98761;
    const result = roundNumberAndCovertToLocale(value);
    expect(result).toBe("1,234,567,891");
  });

  it("should round and convert small numbers to a locale string", () => {
    const value = 0.123456789;
    const result = roundNumberAndCovertToLocale(value);
    expect(result).toBe("0");
  });
});
