const OTAN_MAP: Record<string, string> = {
  "a": "Alfa",
  "b": "Bravo",
  "c": "Charlie",
  "d": "Delta",
  "e": "Echo",
  "f": "Foxtrot",
  "g": "Golf",
  "h": "Hotel",
  "i": "India",
  "j": "Juliett",
  "k": "Kilo",
  "l": "Lima",
  "m": "Mike",
  "n": "November",
  "o": "Oscar",
  "p": "Papa",
  "q": "Quebec",
  "r": "Romeo",
  "s": "Sierra",
  "t": "Tango",
  "u": "Uniform",
  "v": "Victor",
  "w": "Whiskey",
  "x": "X-ray",
  "y": "Yankee",
  "z": "Zulu",
  "1": "One",
  "2": "Two",
  "3": "Three",
  "4": "Four",
  "5": "Five",
  "6": "Six",
  "7": "Seven",
  "8": "Eight",
  "9": "Nine",
  "0": "Zero"
};

export const utf8ToOTAN = (str: string): string => {
  // Conerting everythig to lowercase.
  str = str.toLowerCase();

  // https://stackoverflow.com/a/37511463
  str = str.normalize("NFD").replace(/\p{Diacritic}/gu, "")

  // Remove spaces.
  str = str.replace(/ /g, "");

  const chars = str.split("");

  return chars.map((char) => {
    if (OTAN_MAP[char]) {
      return OTAN_MAP[char];
    }

    return char;
  }).join(" ");
}
