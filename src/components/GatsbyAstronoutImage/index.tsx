/*
  https://www.gatsbyjs.com/docs/reference/release-notes/image-migration-guide/
  https://www.gatsbyjs.com/plugins/gatsby-plugin-image/
  https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/
*/
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const GatsbyAstronoutImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  return <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="gatsby-astronaut" />;
};

export default GatsbyAstronoutImage;
