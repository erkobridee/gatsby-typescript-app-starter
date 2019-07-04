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

1.  **Create a Gatsby site.**

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

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-typescript-app-starter/
    npm i
    npm start
    ```

    or you can also use: `npm run develop`

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-typescript-app-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this project.

    .
    ├── node_modules
    ├── scripts
    ├── src
    ├── .babelrc.js
    ├── .eslintrc
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── gatsby-wrap-root-element.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── tsconfig.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This project is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 💻 Available Commands

-   generate translations using react-intl: `npm run translations`

-   format the code using the prettier: `npm run format`

-   lint the code using the eslint: `npm run lint`

-   check the code (typings and lint): `npm run check`

-   start the development server: `npm run develop` or `npm start`

-   cleanup the temporary directories: `npm run clean`

-   build the production output version: `npm run build`

-   test the production outputed version: `npm run serve`

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
