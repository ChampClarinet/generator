/**
 * Generates a color from an input string.
 * @param {string} input The input string.
 * @returns {string} The color hex string.
 */
export const stringToColor = (input: string): string => {
  let hash = 0;
  Array.from(input, (char) => {
    hash = char.charCodeAt(0) + ((hash << 5) - hash);
  });

  let color = "#";
  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += value.toString(16).padStart(2, "0");
  }
  return color;
};

/**
 * Generates a random integer between the specified minimum and maximum values.
 * @param {number} min The minimum value.
 * @param {number} max The maximum value.
 * @returns {number} The random integer.
 */
export const randomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Generates an array filled with the specified value and length.
 * @param {T} value The value to fill the array with.
 * @param {number} length The length of the array.
 * @returns {T[]} The filled array.
 * @template T
 */
export const fill = <T = any>(value: T, length: number): T[] => {
  return Array.from({ length }, () => value);
};

/**
 * Generates a random string of a specified length that matches the given regular expression pattern.
 * @param {number} length The length of the random string to generate.
 * @param {RegExp} [regex=/^[a-zA-Z0-9]+$/] The regular expression pattern to match.
 * @returns {string} The generated random string.
 */
export const generateRandomString = (
  length: number,
  regex: RegExp = /^[a-zA-Z0-9]+$/
): string => {
  let result = "";
  while (result.length < length) {
    const randomChar = String.fromCharCode(randomInteger(32, 126)); // Generates a random ASCII character
    if (regex.test(randomChar)) {
      result += randomChar;
    }
  }
  return result;
};
