### Eslint plugin for controlling the names of ts "interfaces"

[![npm version](https://img.shields.io/npm/v/eslint-plugin-interface-prefix-control-svt)](https://www.npmjs.com/package/eslint-plugin-interface-prefix-control-svt)

**Rules:**

`eslint-plugin-interface-prefix-control-svt` supports one rule:

-   enforcing prefixing

#### Enforcing prefixes

-   Interfaces should start with the letter I

| Valid                                       | Invalid                                    |
| ------------------------------------------- | ------------------------------------------ |
| `interface IProps { className: "string"; }` | `interface Props { className: "string"; }` |

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-interface-prefix-control-svt`:

```sh
npm i -D eslint-plugin-interface-prefix-control-svt
```

## Usage

Add `interface-prefix-control-svt` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": ["interface-prefix-control-svt"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "interface-prefix-control-svt/prefix-control": "warn"
    }
}
```
