# create-popoyoko-variables

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## This is the **Token Generator Repo**

This repository is designed for developers who want to create tokens for use with Popoyoko-UI.

By consuming tokens extracted from our figma with token studio, we create variables usable in our library with your branding and on the platforms you want from our selection.

📦 [popoyoko-ui **package branch**](https://github.com/Popoyoko/popoyoko-ui/tree/package) <= Here is the build of the component library

🕹️ [Here is the **storybook**](https://popoyoko.github.io/popoyoko-ui/) <= Here's the Storybook for viewing components

📦 [Popoyoko-UI-Boilerplate](https://github.com/Popoyoko/Popoyoko-UI-Boilerplate) <= Here is the Boilerplate


## This reportory is using bun instead of npm

🏴‍☠️ [Install **BUN** here](https://bun.sh/)

```bash
bun run build:lib
```

Compiles the Popoyoko-UI-Token-Generator library.

```bash
bun run token-generator {nameOfTheTokenFolder}
```

You can also use this script outside this repository, on your new projects. 

```bash
token-generator {nameOfTheTokenFolder}
```

Build format tokens with your folder extracted from figma.

