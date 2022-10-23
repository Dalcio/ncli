/**
 * format the given name into capitalized name
 * eg. "advocateGreen => AdvocateGreen
 * eg. "advocateGreenYYellow => AdvocateGreenYYellow
 * @param {string} name
 */
function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.substring(1);
}

/**
 * format the given name into a hook name format adding the prefix use
 * @param {string} name
 * @returns string
 */
function formatIntoHookName(name) {
  return `use{capitalize(name)}`;
}

// function format(params) {

// }
module.exports = { capitalize, formatIntoHookName };
