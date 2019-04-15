# Otomte JS

And yet another automation tool. 🤖

[![npm](https://img.shields.io/npm/v/otomtejs.svg?style=flat-square)](https://www.npmjs.com/package/otomtejs) [![npm](https://img.shields.io/npm/dm/otomtejs.svg?style=flat-square)](https://npmcharts.com/compare/otomtejs) [![NpmLicense](https://img.shields.io/npm/l/otomtejs.svg?style=flat-square)](https://github.com/artisawesm/otomtejs/blob/master/LICENSE) ![Travis (.org)](https://img.shields.io/travis/artisawesm/otomtejs.svg?style=flat-square) ![David](https://img.shields.io/david/dev/artisawesm/otomtejs.svg?style=flat-square)

> ## Otomte JS is now on beta!
>
> OtomteJS is the successor of [initializr](https://github.com/artisawesm/initializr).

# It's dangerous to go out alone! take Otomte JS

Now, choose your path.

- Clone the repo: `git clone https://github.com/artisawesm/otomtejs.git`
- Install using [npm](https://www.npmjs.com/): `npm i otomtejs`

# Here's the map

The cloned/installed repo will have the following files and directories.

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

# How Otomte JS works?

Type `npm run` followed by the command. i.e. `npm run oto`.

1. `oto:setup` : This will install all the required dependencies.
2. `oto` : Initialize Ototmte JS.
3. `oto:dev` : Compile in development (Best for debugging).
4. `oto:prod` : Bundles JS and CSS for production.
5. `oto:vue` : Use Vue as your primary JavaScript framework.
6. `oto:react` (**default**) : Use React as your primary JavaScript framework.

# OtomteJS ❤️ WordPress!

You can now use OtomteJS as a WordPress theme. **This feature is still in development**, it's not a fully functional WordPress theme yet, but hopefully this can help you bootstrap your own custom WordPress theme.

1. `oto:wp-setup` : Set your environment to be a WordPress theme compatible.
2. `oto:wp-dev` : Run OtomteJS on WordPress.
3. `oto:wp-prod` : Production build of the OtomteJS theme.

# Thank you!

It all started as a simple solution to help my personal development issues, now I've created a tool that can also help my fellow developers in their development workflow. 🎉

</> with ❤️ by [Art](https://dev.to/artisawesm)
