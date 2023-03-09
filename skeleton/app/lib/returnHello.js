/**
 * Returns a greeting for a specific language
 *
 * @param {string} the language you want to have a greeting for
 * @returns string
 */
const generateGreeting = (language = "english") => {
  switch (language) {
    case "english":
      return "Hello";
    case "gurmukhi":
      return "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ";
    case "italian":
      return "Bonjourno";
    case "german":
      return "Guten Tag";
    case "french":
      return "Bonjour";
    default:
      throw RangeError(`Unknown language ${language}`);
  }
};

module.exports = { generateGreeting };
