/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import 'assets/styles/global.scss';

import 'whatwg-fetch';

import './src/helpers/console';
import cssVariableTransform from './src/helpers/cssVariableTransform';
import withWrapper from './gatsby-wrap-root-element';

// eslint-disable-next-line import/prefer-default-export
export const onClientEntry = () => {
  console.log('gatsby browser > onClientEntry > start');
  return cssVariableTransform().finally(() => console.log('gatsby browser > onClientEntry > finished'));
};

export const wrapRootElement = withWrapper;
