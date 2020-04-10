import React from 'react';
import { graphql } from 'gatsby'

import Header from '../components/header';
import Layout from '../components/layout';

export default ({ data }) => (
  <Layout>
    <Header headerText={`About ${data.site.siteMetadata.title}`} />
    <p>Nowadays, I am a Full Stack Developer with the focus in Javascript, using Node.js and React.js I worked with Java and iOS developing and I have over 6 years of experience in the development of software. I have a strong knowledge of web and App development with experience in Java, Spring, Hibernate, application services, other tools and frameworks, iOS, and using stack Javascript, Angular 2+, React.js and React Native. Knowledge in the agile method Scrum and versioning code tools, like GIT. </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
