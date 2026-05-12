// BUG: formatMessage is missing the closing parenthesis on line 9.
// The agent should detect the SyntaxError and fix it.

/**
 * Format a greeting message.
 * @param {string} prefix
 * @param {string} name
 * @returns {string}
 */
export function formatMessage(prefix, name) {
  return `${prefix}, ${name}!`
// ← missing closing parenthesis for the function body — intentional syntax error
