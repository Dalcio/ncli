/**
 * format the given name into capitalized name
 * eg. "advocateGreen => AdvocateGreen
 * eg. "advocateGreenYYellow => AdvocateGreenYYellow
 * @param {string} name
 */
function capitalize(name) {
  const withoutSpaces = name
    .substring(1)
    .replace(/\s+[A-Za-z]/g, (match) =>
      match.toUpperCase().replace(/\s+/g, "")
    );

  return name.charAt(0).toUpperCase() + withoutSpaces;
}

/**
 * format the given name into a hook name format adding the prefix use
 * @param {string} name
 * @returns string
 */
function formatIntoHookName(name) {
  return `use{capitalize(name)}`;
}

/**
 * inserts before all uppercase letters excepts the first with hyphen (-) and transform the string nto lowercase letters
 * @param {string} name
 */
function fileName(name) {
  const hyphened = name
    .substring(1)
    .replace(
      /\s*[A-Z]+[a-z]*/g,
      (match) => `-${match.toLowerCase().replace(/\s+/g, "")}`
    );
  return `${name[0].toLowerCase()}${hyphened}`;
}

module.exports = { capitalize, formatIntoHookName, fileName };
