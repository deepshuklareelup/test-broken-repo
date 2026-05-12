// BUG: This module does not exist — it was never created.
// The Repo Fixer Agent should detect the missing module and create it.
import { formatMessage } from "./utils/formatter.js";
import { greet } from "./helpers/greeter.js";

const message = formatMessage("Hello", "World");
console.log(greet(message));
