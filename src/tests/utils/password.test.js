import { describe, it, expect } from "vitest";
import {
  generateStrongPassword,
  DEFAULT_PASSWORD_LENGTH,
  UPPER,
  LOWER,
  DIGIT,
  SPECIAL,
} from "../../../app/utils/password.js";

// The exact rules the sign-up form enforces (login/page.jsx validatePassword)
// and the strength meter's "Strong" bar (getPasswordStrength: >= 12 chars,
// upper + lower, digit, special).
const signupRules = {
  minLength: 8,
  upper: /[A-Z]/,
  lower: /[a-z]/,
  digit: /[0-9]/,
  special: /[!@#$%^&*(),.?":{}|<>]/,
};

describe("generateStrongPassword", () => {
  it("defaults to 16 characters", () => {
    expect(generateStrongPassword()).toHaveLength(DEFAULT_PASSWORD_LENGTH);
  });

  it("always satisfies every sign-up validation rule", () => {
    for (let i = 0; i < 500; i++) {
      const pwd = generateStrongPassword();
      expect(pwd.length).toBeGreaterThanOrEqual(signupRules.minLength);
      expect(pwd).toMatch(signupRules.upper);
      expect(pwd).toMatch(signupRules.lower);
      expect(pwd).toMatch(signupRules.digit);
      expect(pwd).toMatch(signupRules.special);
    }
  });

  it("always scores 'Strong' on the sign-up strength meter", () => {
    for (let i = 0; i < 200; i++) {
      const pwd = generateStrongPassword();
      let score = 0;
      if (pwd.length >= 8) score += 1;
      if (pwd.length >= 12) score += 1;
      if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score += 1;
      if (/[0-9]/.test(pwd)) score += 1;
      if (/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) score += 1;
      expect(score).toBeGreaterThanOrEqual(4); // >3 → "Strong"
    }
  });

  it("only uses unambiguous characters from the allowed sets", () => {
    const allowed = new Set(UPPER + LOWER + DIGIT + SPECIAL);
    for (let i = 0; i < 200; i++) {
      for (const ch of generateStrongPassword()) expect(allowed.has(ch)).toBe(true);
    }
    // 0/O and 1/l/I are excluded by design
    expect(allowed.has("0")).toBe(false);
    expect(allowed.has("O")).toBe(false);
    expect(allowed.has("1")).toBe(false);
    expect(allowed.has("l")).toBe(false);
    expect(allowed.has("I")).toBe(false);
  });

  it("never produces the same password twice", () => {
    const seen = new Set(Array.from({ length: 1000 }, () => generateStrongPassword()));
    expect(seen.size).toBe(1000);
  });

  it("honours a longer requested length and floors short ones at 12", () => {
    expect(generateStrongPassword(24)).toHaveLength(24);
    expect(generateStrongPassword(4)).toHaveLength(12);
  });

  it("does not always place the required classes at the start", () => {
    // If the shuffle were missing, index 0 would always be uppercase.
    const firstChars = Array.from({ length: 200 }, () => generateStrongPassword()[0]);
    const allUpper = firstChars.every((c) => UPPER.includes(c));
    expect(allUpper).toBe(false);
  });
});
