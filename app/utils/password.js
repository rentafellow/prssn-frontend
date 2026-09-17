/**
 * Strong-password generator for the sign-up form.
 *
 * Guarantees the four character classes the sign-up validator checks
 * (upper, lower, digit, special) and uses the Web Crypto API rather than
 * Math.random. Visually ambiguous characters (0/O, 1/l/I) are excluded so a
 * password a user writes down can be read back correctly.
 */

// Only specials the sign-up validator accepts: /[!@#$%^&*(),.?":{}|<>]/
// Quotes, brackets and pipes are left out — they break copy/paste in some
// password managers and shells.
export const UPPER = "ABCDEFGHJKLMNPQRSTUVWXYZ";
export const LOWER = "abcdefghijkmnopqrstuvwxyz";
export const DIGIT = "23456789";
export const SPECIAL = "!@#$%^&*";

export const DEFAULT_PASSWORD_LENGTH = 16;

/** Uniform integer in [0, max) with rejection sampling — no modulo bias. */
const randomInt = (max) => {
  const buf = new Uint32Array(1);
  const limit = Math.floor(0x1_0000_0000 / max) * max;
  let x;
  do {
    globalThis.crypto.getRandomValues(buf);
    x = buf[0];
  } while (x >= limit);
  return x % max;
};

const pick = (set) => set[randomInt(set.length)];

export function generateStrongPassword(length = DEFAULT_PASSWORD_LENGTH) {
  const minLength = 12; // the strength meter's "Strong" threshold
  const size = Math.max(length, minLength);

  // One of each required class, then fill the rest from the full pool.
  const chars = [pick(UPPER), pick(LOWER), pick(DIGIT), pick(SPECIAL)];
  const pool = UPPER + LOWER + DIGIT + SPECIAL;
  while (chars.length < size) chars.push(pick(pool));

  // Fisher–Yates so the required characters are not always at the front.
  for (let i = chars.length - 1; i > 0; i--) {
    const j = randomInt(i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join("");
}
