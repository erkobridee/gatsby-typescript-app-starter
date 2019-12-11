<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's typescript application starter
</h1>

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

### 1. **Create a Gatsby site.**

Use the Gatsby CLI to create a new site, specifying the default starter.

```sh
# create a new Gatsby site using the typescript application starter
gatsby new my-typescript-app-starter https://github.com/erkobridee/gatsby-typescript-app-starter
```

Another way to create the a new project without having the Gatsby CLI

```sh
npx gatsby new my-typescript-app-starter https://github.com/erkobridee/gatsby-typescript-app-starter
```

**TIP:** double check if you need to have the _**.git**_ directory or you should delete it

### 2. **Start developing.**

Navigate into your new site’s directory and start it up.

```sh
cd my-typescript-app-starter/
npm i
npm start
```

or you can also use: `npm run develop`

### 3. **Open the source code and start editing!**

Your site is now running at `http://localhost:8000`!

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

Open the `my-typescript-app-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this project. [Gatsby Docs - Gatsby Project Structure](https://www.gatsbyjs.org/docs/gatsby-project-structure/).

    .
    ├── node_modules
    ├── __mock__
    ├── coverage
    ├── jest-helpers
    ├── scripts
    ├── src
    ├── static
    ├── .babelrc.js
    ├── .eslintrc
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── gatsby-wrap-root-element.js
    ├── jest.config.js
    ├── package-lock.json
    ├── package.json
    ├── tsconfig.json
    └── README.md

-   **`/__mock__`** - jest global mocks directory.

-   **`/.build/jest-temp`** - jest unit tests cache directory.

-   **`/.build/.i18nExtractedMessages`** - i18n messages extracted from the code and those messages will be used to generate the JSON translation files.

-   **`/.cache`** - files manages by the Gatsby used to build the output on the **`/public`** folder.

-   **`/node_modules`** - This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

-   **`/coverage`** - output of jest unit tests coverage reports.

-   **`/jest-helpers`** - jest setup helpers.

-   **`/public`** - Gatsby output directory, the content of this folder after the build flow must be copied to the server.

-   **`/scripts`** - contains font icons generation, the translations manager and the path prefix helper.

-   **`/src`** - This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

-   **`/static`** - static files that should be copied by the Gastby to the **`/public`** folder during the build flow. [Gatsby Docs - Adding assets outside of the module system](https://www.gatsbyjs.org/docs/static-folder/)

-   **`.gitignore`** - This file tells git which files it should not track / not maintain a version history for.

-   **`.prettierrc`** - This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

-   **`gatsby-browser.js`** - This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

-   **`gatsby-config.js`** - This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

-   **`gatsby-node.js`** - This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

-   **`gatsby-ssr.js`** - This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

-   **`gatsby-wrap-root-element.js`** - used by **`gatsby-browser.js`** as the `export.wrapRootElement`, more details about it please check the [Gatsby browser APIs - wrapRootElement](https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement). The wrappers used by the application they are defined at the `src/components/Wrapper` folder.

-   **`jest.config.js`** - project jest configs

-   **`package-lock.json`** - (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

-   **`package.json`** - A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

-   **`README.md`** - A text file containing useful reference information about your project.

### 📂 The `src/` folder - important items to know

    .
    └── src
        ├── assets
            ├── icons
            ├── languages
            └── styles
        ├── components
            ├── Layout
            ├── SEO
            ├── ui
            └── Wrapper
        ├── data
            ├── api
            ├── models
            └── schemas
        ├── domains
        ├── helpers
        ├── pages
        ├── store
            ├── helpers
            ├── state
            ├── definitions.ts
            └── index.ts
        └── html.js

-   **`/assets`**

    -   **`/icons`** - SVG files, each one represents a font icon, the file should be named following the pattern `{icon-name}_icon.svg` and to be easialy used on the project we have the component `FontIcon` located at the `src/components/ui/FontIcon` folder

    -   **`/languages`** - translations JSON files generated from the extrated messages from the code, here you should maintain and update the keys entries to each supported language

    -   **`/styles`** - global styles definitions and mixins which uses the SASS syntax

-   **`/components`** - stand alone components

    -   **`/Layout`** - components that defines the pages layouts used on the application

    -   **`/SEO`** - component to easialy manage the HTML header elements, like the page title

    -   **`/Wrapper`** - components related to the providers, for example, the redux, internationalization and so one

    -   **`/ui`** - small ui components, like the `FontIcon` one

-   **`/data`**

    -   **`/schemas`** - defines the data structure used to communicate with the backends/APIs

    -   **`/models`** - defines the data structure used inside of the application that receives as input one or more `schemas`.

    -   **`/api`** - defines the communication with the backends/APIs using the data `schemas` definitions and transform them to data `models` to be used inside of the application.

-   **`/domains`** - and/or use cases managed by the application, for example: authentication.

-   **`/helpers`** - common code used across the aplication, like small processment code, fetch, react hooks and types/values definitions.

-   **`/pages`** - the components on this directory will define the page content and the file name will define the URL path to the page.

-   **`/store`** - code related to the [Redux](https://redux.js.org/) that follows the [re-ducks pattern](https://www.freecodecamp.org/news/scaling-your-redux-app-with-ducks-6115955638be/), check on the notes section to read more about this pattern.

    -   **`/helpers`** - has a create reducer as an object definition instead of need to define as a switch case pattern

    -   **`/state`** - the redux states are placed inside of this directory

        -   **`/{statename}`** - defines one redux state

            -   **`definitions.ts`** - defines the action types strings, the state object interface and the triggered actions interface

            -   **`actions.ts`** - defines the actions triggered that uses the types and actions interfaces defined on the `definitions.ts`

            -   **`operations.ts`** - defines the operations that manages a async flow or manage a set of actions to be triggered

            -   **`reducers.ts`** - defines the redux reducers to the given redux state

            -   **`selectors.ts`** - access data from the given redux state

            -   **`index.ts`** - expose the redux reducers from the given directory

    -   **`definitions.ts`** - defines the Redux root state type definition

    -   **`index.ts`** - defines the Redux store

-   **`html.js`** - overwrites the default Gatsby index.html generation [Gatsby Doc - Customizing html.js](https://www.gatsbyjs.org/docs/custom-html/), it was needed to redefine the `viewport` configuration to avoid the zoom in on the iOS devices ([Prevent iOS from zooming in on input fields](https://blog.osmosys.asia/2017/01/05/prevent-ios-from-zooming-in-on-input-fields/))

## 💻 Available Commands

-   generate translations using react-intl: `npm run translations`

-   format the code using the prettier: `npm run format`

-   lint the code using the eslint: `npm run lint`

-   check the code (typings and lint): `npm run check`

-   start the development server: `npm run develop` or `npm start` (if you need to read a specific `.env` file, define the `NODE_ENV` before the command)

-   cleanup the temporary directories: `npm run clean`

-   build the production output version: `npm run build` (if you need to read a specific `.env` file, define the `ACTIVE_ENV` before the command)

-   test the production outputed version: `npm run serve`

-   run the jest unit tests and generate the coverage report: `npm run unit-tests`

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 📝 Notes

-   the project uses sass and the postcss with autoprefixer support and related to this last one there is an open issue related to the warning message showed on the terminal `BrowserslistError: Unknown browser query 'android all'` ( [browserslist issue #382](https://github.com/browserslist/browserslist/issues/382) )

    -   added a temporary solution described on the issue comments

-   the project has the redux on it and its follow the re-ducks pattern, read more about on this links [Scaling your Redux App with ducks](https://www.freecodecamp.org/news/scaling-your-redux-app-with-ducks-6115955638be/) and check this [example](https://github.com/FortechRomania/react-redux-complete-example)

    -   but, instead of `src/state/` it uses `src/store/` and instead of `src/state/ducks/` it uses `src/store/state/`

-   Gatsby

    -   production build issue when has the `window` on the code, check the [gatsbyjs / gatsby - issue 12427](https://github.com/gatsbyjs/gatsby/issues/12427)

    -   the project has the configuration to be able to use absolute imports on the code ( [Gatsby Docs - Absolute imports](https://www.gatsbyjs.org/docs/add-custom-webpack-config/#absolute-imports) )

    -   [Gatsby Docs - How to use a custom `.babelrc` file](https://www.gatsbyjs.org/docs/babel/#how-to-use-a-custom-babelrc-file)

    -   [Gatsby Docs - Environment Variables](www.gatsbyjs.org/docs/environment-variables/)

    -   [Building Apps with Gatsby](https://www.gatsbyjs.org/docs/building-apps-with-gatsby/)

-   [[Slides] Benefits of using TypeScript + React + Unit Testing](https://slides.com/erkobridee/benefits-typescript-react-unit-testing/)

## 🧪Jest unit tests

This project has unit tests support that runs on top of the [Jest](https://jestjs.io/) - ( [Docs](https://jestjs.io/docs/en/getting-started) | [API](https://jestjs.io/docs/en/api) ).

The jest unit tests will be executed right before the gatsby-build on the build flow `npm run build` or you can execute it anytime with the following commands: `npm run unit-tests`, `jest` or if you want to keep it running use `jest --watch`;

The jest mock files should be placed inside a directory with the given name: `__mock__`, read more about it on the [Jest Docs](https://jestjs.io/docs/en/manual-mocks).

About the the jest unit tests detection, it will look for the content of directories with the name `__tests__` or files with the sufix `{test|spec}.[jt]sx?`, read more about it on the [Jest Docs](https://jestjs.io/docs/en/configuration#testregex-string--arraystring).

### Useful links related to TypeScript + React + Jest

-   [[GitHub] facebook/jest - TypeScript](https://github.com/facebook/jest/tree/master/examples/typescript)

-   [Add Testing | Gatsby.js Doc](https://www.gatsbyjs.org/docs/testing/)

    -   [Unit Testing | Gatsby.js Doc](https://www.gatsbyjs.org/docs/unit-testing/)

---

-   [Understanding Jest Mocks | Rick Hanlon II - Medium](https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c)

-   [Configuring Jest to show code coverage for all of your files](https://joshtronic.com/2017/10/24/configuring-jest-to-show-code-coverage-for-all-of-your-files/)

-   [Best kept Jest secret: Testing only changed files with coverage reports | @stipsan - Medium](https://medium.com/@stipsan/best-kept-jest-secret-testing-only-changed-files-with-coverage-reports-3affc8b4d30f)

---

-   [Using Jest with TypeScript](https://basarat.gitbooks.io/typescript/docs/testing/jest.html)

-   [Testing TypeScript with Jest](https://rjzaworski.com/2016/12/testing-typescript-with-jest)

    -   [[GitHub] rjz/typescript-react-redux](https://github.com/rjz/typescript-react-redux)

-   [Mocking TypeScript classes with Jest | David Guijarro - Medium](https://medium.com/@davguij/mocking-typescript-classes-with-jest-8ef992170d1d)

    -   [[GitHub] davguij/typescript-jest-mocked-classes](https://github.com/davguij/typescript-jest-mocked-classes)

-   [Debugging with TypeScript, Jest, ts-jest and Visual Studio Code](https://medium.com/@mtiller/debugging-with-typescript-jest-ts-jest-and-visual-studio-code-ef9ca8644132)

-   [TypeScript - jest (ts-jest) | typescript Tutorial](https://riptutorial.com/typescript/example/29207/jest--ts-jest-)

-   [[GitHub] kulshekhar/ts-jest](https://github.com/kulshekhar/ts-jest) - TypeScript preprocessor with sourcemap support for Jest

-   [[GitHub] zeit / next.js - Testing with typescript + jest + ts-jest #8663](https://github.com/zeit/next.js/issues/8663) - tip to how to solve the jsx parsing problem

-   [[GitHub] jest-community / jest-junit](https://github.com/jest-community/jest-junit) - A Jest reporter that creates compatible junit xml files

---

-   [Testing in React with Jest and Enzyme: An Introduction | @rossbulat - Medium](https://medium.com/@rossbulat/testing-in-react-with-jest-and-enzyme-an-introduction-99ce047dfcf8)

-   [Test Driven Development in React with Jest and Enzyme | @rossbulat - Medium](https://medium.com/@rossbulat/testing-in-react-with-jest-and-enzyme-an-introduction-99ce047dfcf8)
