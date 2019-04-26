import Content from './content';
import Footer from './footer';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Layout} from 'gatsby-theme-apollo';
import {graphql} from 'gatsby';



const anchorPattern = /<a href="([\w/#-]+)">([\w\s.,-]+)<\/a>/gm;

export default class Page extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  componentDidMount() {
    const hashElement = document.getElementById(
      this.props.location.hash.slice(1)
    );
    if (hashElement) {
      hashElement.scrollIntoView();
    }
  }

  render() {
    // generate a representation of the chapters and sections within them to
    // render the sidebar and table of contents on the overview page
    const contents = this.props.data.allMarkdownRemark.edges
      .filter(({node}) => node.frontmatter.order > 0 && node.tableOfContents)
      .map(({node}) => {
        let match;
        const pages = [];
        while ((match = anchorPattern.exec(node.tableOfContents)) !== null) {
          const path = match[1];
          const hash = path.slice(path.lastIndexOf('/') + 1);
          const hashPath = node.frontmatter.path + hash;
          const title = match[2];
          const description = node.excerpt.slice(
            node.excerpt.indexOf(title) + title.length
          );

          pages.push({
            path: hashPath,
            title,
            description: description
              .slice(0, description.indexOf('.') + 1)
              .replace('>', '')
              .trim()
              .replace(/\*/g, ''),
            anchor:
              node.frontmatter.path ===
              this.props.location.pathname.replace(/\/$/, '')
          });
        }

        return {
          path: node.frontmatter.path,
          title: node.frontmatter.title,
          description: node.frontmatter.description,
          domain: node.frontmatter.domain,
          topic: node.frontmatter.topic,
          pages
        };
      });

    const {title, description} = this.props.data.site.siteMetadata;
    return (
      <Layout>
        <Helmet>
          <title>{this.props.data.markdownRemark.frontmatter.title}</title>
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          {/* <meta property="og:image" content={ogImage} /> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@apollographql" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          {/* <meta
            name="twitter:image"
            content={'https://principledgraphql.com' + ogImage}
          /> */}
        </Helmet>
        <Content
                  isHome={!this.props.data.markdownRemark.frontmatter.order}
                  contents={contents}
                  page={this.props.data.markdownRemark}
                  pages={this.props.data.allMarkdownRemark.edges}
                />
                <Footer />
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        path
        title
        description
        order
        domain
        topic
      }
    }

    allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___order]}) {
      edges {
        node {
          excerpt
          tableOfContents(pathToSlugField: "frontmatter.path", maxDepth: 2)
          headings {
            depth
            value
          }
          frontmatter {
            path
            title
            description
            order
            domain
            topic
          }
        }
      }
    }

    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
