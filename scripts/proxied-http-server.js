/*
    based on:
    https://github.com/gatsbyjs/gatsby/blob/2.13.30/packages/gatsby/src/commands/develop.js#L237
*/
const express = require('express');
const request = require('request');

const gatsbyConfig = require('../gatsby-config');
const { proxy } = gatsbyConfig;

const app = express();

app.use(express.static('public'));

if (proxy) {
  const { prefix, url } = proxy;
  app.use(`${prefix}/*`, (req, res) => {
    const proxiedUrl = url + req.originalUrl;
    req
      .pipe(
        request(proxiedUrl).on(`error`, (err) => {
          const message = `Error when trying to proxy request "${req.originalUrl}" to "${proxiedUrl}"`;

          report.error(message, err);
          res.status(500).end();
        })
      )
      .pipe(res);
  });
}

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`server started, listening on port ${port}`));
