import React from 'react';
import styled from '@emotion/styled';
import {LogoTitle, colors} from 'gatsby-theme-apollo';

const Container = styled.footer({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 32,
  fontSize: 14,
  color: colors.text1,
  backgroundColor: colors.background
});

const Colophon = styled.span({
  marginTop: 8,
  marginBottom: 20,
  a: {
    color: colors.primary,
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  }
});

const FooterNav = styled.nav({
  textAlign: 'center',
  a: {
    margin: '0 12px',
    color: 'inherit',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  }
});

const FooterNavLinks = styled.div({
  marginTop: 4
});

const Divider = styled.hr({
  width: '100%',
  maxWidth: 400
});

export default function Footer() {
  return (
    <Container>
      <Divider />
      <FooterNav>
        <FooterNavLinks>
          <a href="https://zhresearches.com">zhresearches.com</a> 
        </FooterNavLinks>
      </FooterNav>
    </Container>
  );
}
