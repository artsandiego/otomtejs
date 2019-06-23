# Otomte JS

Building the web with austere simplicity. 🤖

> Otomte JS is the successor of [initializr](https://github.com/crtved/initializr) (deprecated).

## Package Status

![Travis(.org)](https://img.shields.io/travis/crtved/otomtejs.svg?style=flat-square) [![npm](https://img.shields.io/npm/dm/otomtejs.svg?style=flat-square)](https://npmcharts.com/compare/otomtejs) [![npm](https://img.shields.io/npm/v/otomtejs.svg?style=flat-square)](https://www.npmjs.com/package/otomtejs) [![NpmLicense](https://img.shields.io/npm/l/otomtejs.svg?style=flat-square)](https://github.com/crtved/otomtejs/blob/master/LICENSE)
[![install size](https://packagephobia.now.sh/badge?p=otomtejs)](https://packagephobia.now.sh/result?p=otomtejs)

## Contents

- [Getting Otomte JS](#Getting-Otomte-JS)
- [How to use Otomte JS](#How-to-use-Otomte-JS)
- [Otomte | WordPress](#Otomte-JS--WordPress)
- [Structure](#Structure)

## Getting Otomte JS

You can either clone the Otomte JS from github or install using npm.

- Clone Otomte JS: `git clone https://github.com/crtved/otomtejs.git`
- Install using [npm](https://www.npmjs.com/): `npm i otomtejs`

## How to use Otomte JS

### Install all dev environment dependencies:

```
npm run oto:setup
```

### Initialize Otomte JS.

```
npm run oto
```

### Compiles in development.

```
npm run oto:dev
```

### Bundles JS and CSS for production.

```
npm run oto:prod
```

### Switching default JavaScript framework.

```
npm run oto:vue
npm run oto:react <- default
```

## Otomte JS | WordPress!

> This feature is still in development.
> You can use Otomte JS in your WordPress website by adding it as a custom theme! Clone Otomte JS under `wp-content/themes/` and `cd` to the cloned folder.

## Getting Started

### Set Ototme JS as a WordPress theme.

```
npm run oto:wp-setup
```

> <span style="color: red;">**WARNING:**</span> Once everything is set up properly and you have a WordPress website running on Otomte theme, then you <span style="color: red;">**DO NOT**</span> want to run **`npm run oto:wp-setup`**, you'll end up starting from the scratch again, and possibly break your build. You only need to run **`npm run oto:wp-setup`** <span style="color: green;">**ONCE**</span> to prevent unwanted result.

### Initialize Otomte Js on WordPress.

```
npm run oto:wp-dev
```

### Build Otomte JS for production.

```
npm run oto:wp-prod
```

## Structure

You will find the following files and directories under Otomte JS.

```
├── otomtejs
│   └── config/
│       ├── react-config/
│       ├── vue-config/
│       ├── wp-config/
│       └── preset.js
├── dist/
│   ├── assets/
│   │   ├── css/
│   │   ├── fonts/
│   │   ├── img/
│   │   ├── js/
│   │   └── svg/
│   └── index.html
└── src/
    ├── js/
    │   ├── components/
    │   └── index.js
    ├── scss/
    │   ├── partials/
    │   └── app.scss
    └── index.html
```

## Thank you for using Otomte JS!

💻 with ❤️ by [Art](https://dev.to/crtved)
