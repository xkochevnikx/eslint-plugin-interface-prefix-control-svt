
### eslint plugin for controlling the names of ts "interfaces" / eslint плагин для контроля названий ts "интерфейсов"
[![npm version](https://img.shields.io/npm/v/eslint-plugin-interface-prefix-control-svt
)](https://www.npmjs.com/package/eslint-plugin-interface-prefix-control-svt
)

**Rules:**

`eslint-plugin-interface-prefix-control-svt` supports 1 main rules types:

- enforcing prefixing
- preventing prefixing

#### Enforcing prefixes

- Interfaces should start with the letter I


| Valid                                        | Invalid                                     |
| -------------------------------------------- | ------------------------------------------- |
| `interface IProps { preview: boolean; }`     | `interface Props { preview: boolean; }`     |

#### Preventing prefixing

- Interfaces should not start with the letter I

| Valid                                       | Invalid                                      |
| ------------------------------------------- | -------------------------------------------- |
| `interface Props { preview: boolean; }`     | `interface IProps { preview: boolean; }`     |



## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-prefix-types`:

```sh
npm i -D eslint-plugin-interface-prefix-control-svt
```

## Usage

Add `prefix-types` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["interface-prefix-control-svt"]
}
```

Then configure the rules you want to use under the rules section. 

```json
{
  "rules": {
            'interface-prefix-control-svt/prefix-control': 'warn',

  }
}
```
