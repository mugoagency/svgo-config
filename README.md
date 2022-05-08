[![Node.js Package](https://github.com/mugoagency/svgo-config/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/mugoagency/svgo-config/actions/workflows/npm-publish.yml)
# svgo-config

Mugo's shareable svgo config for use across projects.

## Installation 

Install `@mugo-agency/svgo-config`:

**With Yarn**
```
yarn add --dev stylelint @mugo-agency/svgo-config
```

**With npm**
```
npm install stylelint @mugo-agency/svgo-config --save-dev
```

## Usage
Mugo's postcss config comes bundled in `@mugo-agency/svgo-config`. 
Add to your `svgo.config.js`

```
const config = require("@mugo-agency/svgo-config");
module.exports = config;
```