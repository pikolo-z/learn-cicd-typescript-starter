import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "./auth.js";
import { describe, expect, test } from "vitest";

describe("getAPIKey", () => {
  test("returns the API key from a valid authorization header", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey my-api-key"
    };
    expect(getAPIKey(headers)).toBe("my-api-key");
  });

  test("returns null for a missing authorization header", () => {
    const headers: IncomingHttpHeaders = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null for an invalid authorization header", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "Bearer my-token"
    };
    expect(getAPIKey(headers)).toBeNull();
  });
});

