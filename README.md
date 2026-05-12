# test-broken-repo

A deliberately broken Node.js project used to test the **GitHub Repo Fixer Agent**.

## Intentional Bug

`src/utils/formatter.js` has a missing closing brace `}` that causes a `SyntaxError` when `npm run build` is executed.

## Reproduce the Error

```bash
npm run build
# → SyntaxError: Unexpected end of input
```
