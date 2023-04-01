# Github Viewer

## Running app

```
yarn dev
```

## Tech stack

### Prettier & Eslint

Consistant code formatting and linter hints to catch any code smells or errors.

### Vite

Fast and extensible build tool - alternative for CRA (which is obsolete BTW)

### TypeScript

Provides type support that improves readability and documents the code.

### Axios

Although it might seem like overkill, I enjoy high extensibility in more complex API handling (e.g. interceptors).

### Tailwind

To save time on structuring layouts and for minor styling.

### Context API

Since we're storing just a handful of data, using Redux would be a huge overkill. I tried to implement the Provider in such a way that you can easily refactor it to use Redux or, in fact, any other library for handling state management.

### Cache

Implemented in-memory cache, but it can be easily replaced with e.g. localStorage.

### Table, sorting, and pagination

Wasn't sure if it was the purpose of the task to implement this "by hand." Normally, UI libraries provide a table component that handles things like pagination, sorting, etc. For example:

- https://mui.com/material-ui/react-table
- https://primereact.org/datatable

## Next steps

- Add Cypres for e2e tests
- Add storybook for testing and implementing new components
- Attach `yml` file with github actions for testing, building and deploying application
