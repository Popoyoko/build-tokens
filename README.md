# create-popoyoko-variables

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## This is the **Variables Generator Repo**

This repository is designed for developers who want to create tokens for use with popoyoko-ui.

By consuming tokens extracted from our figma with token studio, we create variables usable in our library with your branding and on the platforms you want from our selection.

📦 [popoyoko-ui **package branch**](https://github.com/Popoyoko/popoyoko-ui/tree/package) <= Here is the build of the component library

🕹️ [Here is the **storybook**](https://popoyoko.github.io/popoyoko-ui/) <= Here's the Storybook for viewing components

📦 [create-popoyoko-app](https://github.com/Popoyoko/create-popoyoko-app) <= Here is the construction tool


## This reportory is using bun instead of npm

🏴‍☠️ [Install **BUN** here](https://bun.sh/)

```bash
bun run build:lib
```

Compiles the create-popoyoko-variables library.

```bash
bun run create-popoyoko-variables {nameOfTheTokenFolder}
```

You can also use this script outside this repository, on your new projects. 

```bash
create-popoyoko-variables {nameOfTheTokenFolder}
```

Build variables with your tokens folder.

