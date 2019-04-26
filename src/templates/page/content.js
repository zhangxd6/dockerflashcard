import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import styled from '@emotion/styled';
import {ContentWrapper, breakpoints, colors} from 'gatsby-theme-apollo';
import {Link} from 'gatsby';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import {size} from 'polished';


const InnerWrapper = styled.div({
  maxWidth: 800
});

const MainHeading = styled.h1({
  display: 'flex',
  alignItems: 'center'
});

const descriptionMargin = 4;
const ChapterDescription = styled.h4({
  display: 'block',
  marginTop: descriptionMargin,
  marginBottom: descriptionMargin,
  color: colors.text2
});

const HeadingImage = styled.img(size('2.5em'), {
  margin: 0,
  marginRight: '0.25em'
});

const Markdown = styled.div({
  a: {
    color: colors.primary,
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  '.anchor': {
    color: 'inherit',
    svg: {
      fill: 'currentColor'
    }
  },
  '.float': {
    width: '50%',
    marginLeft: 24,
    marginBottom: 24,
    float: 'right',
    [breakpoints.sm]: {
      width: '100%',
      marginLeft: 0,
      float: 'none'
    }
  }
});

const PageNav = styled.nav({
  display: 'flex',
  padding: '64px 0',
  [breakpoints.md]: {
    padding: '32px 0'
  }
});

const PageNavLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  color: 'inherit',
  textDecoration: 'none',
  svg: size(20),
  ':hover': {
    opacity: colors.hoverOpacity
  }
});

const PageNavLinkText = styled.div(({align = 'left'}) => {
  const marginProperty = `margin${align.charAt(0).toUpperCase() +
    align.slice(1)}`;
  return {
    [marginProperty]: 24,
    textAlign: align,
    [breakpoints.md]: {
      [marginProperty]: 16
    }
  };
});

const PageNavLinkHeading = styled.div({
  fontSize: 12,
  letterSpacing: 2,
  textTransform: 'uppercase'
});

const PageNavLinkTitle = styled.div({
  color: colors.text1
});

const Chapter = styled.div({
  marginTop: 64
});

const ChapterHeading = styled.h2({
  display: 'flex',
  alignItems: 'center'
});

const SectionTitle = styled.h4({
  marginBottom: 8
});

const SectionDescription = styled.p({
  fontSize: '1rem'
});

const h3tag = `<h3 id=\"explanation\"><a href=\"#explanation\" aria-label=\"explanation permalink\" class=\"anchor\"><svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Explanation</h3>`

const wrapExplaition=(html)=>{
  let newContent =  html.replace(h3tag,`<div>
   <button style="
   border: 1px solid;
   background: transparent;
   border-radius: 5px;
   padding: .8rem 2rem;
   display: inline-block;
   text-align: center;
   vertical-align: middle;
   margin: 2rem 0;
   position: relative;"
   onclick="getElementById('exp').style.display='inherit'">Hint</button>
   <div id="exp" style="display: none">
  `);
  newContent = `
    ${newContent}
  </div></div>`;
  return newContent;
}

export default function Content(props) {
  // determine current page's place in the order
  const {title, description, path} = props.page.frontmatter;
  const pageIndex = props.pages.findIndex(
    ({node}) => node.frontmatter.path === path
  );


  // define next and previous pages
  const previousPage = props.pages[pageIndex - 1];
  const nextPage = props.pages[pageIndex + 1];

  return (
    <ContentWrapper>
      <InnerWrapper>
        {title && (
          <Fragment>
            <MainHeading>
              {/* {image && <HeadingImage src={image.childImageSharp.fluid.src} />} */}
              <span>
                {title}
                <ChapterDescription>{description}</ChapterDescription>
              </span>
            </MainHeading>
            <hr />
          </Fragment>
        )}
        <Markdown>
          <div
            dangerouslySetInnerHTML={{
              __html: wrapExplaition(props.page.html)
            }}
          />
          
        </Markdown>
        <PageNav>
          {previousPage && (
            <PageNavLink to={previousPage.node.frontmatter.path}>
              <MdChevronLeft />
              <PageNavLinkText>
                <PageNavLinkHeading>Previous</PageNavLinkHeading>
                <PageNavLinkTitle>
                  {previousPage.node.frontmatter.title || 'Overview'}
                </PageNavLinkTitle>
              </PageNavLinkText>
            </PageNavLink>
          )}
          {nextPage && (
            <PageNavLink
              to={nextPage.node.frontmatter.path}
              style={{marginLeft: 'auto'}}
            >
              <PageNavLinkText align="right">
                <PageNavLinkHeading>Next</PageNavLinkHeading>
                <PageNavLinkTitle>
                  {nextPage.node.frontmatter.title}
                </PageNavLinkTitle>
              </PageNavLinkText>
              <MdChevronRight />
            </PageNavLink>
          )}
        </PageNav>
      </InnerWrapper>
    </ContentWrapper>
  );
}

Content.propTypes = {
  isHome: PropTypes.bool.isRequired,
  page: PropTypes.object.isRequired,
  pages: PropTypes.array.isRequired,
  contents: PropTypes.array.isRequired
};