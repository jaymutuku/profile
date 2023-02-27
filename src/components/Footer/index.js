import React from "react";

import Container from "components/ui/Container";

import * as Styled from "./styles";

const Footer = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link
          href="https://github.com/jaymutuku"
          rel="noreferrer noopener"
          target="_blank"
        >
          GitHub
        </Styled.Link>
        <Styled.Link
          href="https://www.linkedin.com/in/josphat-mutuku-9222ba32/"
          rel="noreferrer noopener"
          target="_blank"
        >
          LinkedIn
        </Styled.Link>
        <Styled.Link
          href="https://jaymutuku.netlify.app"
          rel="noreferrer noopener"
          target="_blank"
        >
          Blog
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
