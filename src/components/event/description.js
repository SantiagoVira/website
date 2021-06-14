import React from 'react';
import styled from 'styled-components';
import { Section, Container, Button, media } from '@styles';

const StyledSection = styled(Section)`
  padding-top: 15rem;
  padding-bottom: 15rem;
  overflow-x: hidden;
  min-height: 65rem;

  ${media.thone`padding-top: 10rem;`};
`;
const Link = styled.p`
  font-size: 28px;
  line-height: 146%;
  margin-top: 25px;
  width: fit-content;
  text-align: right;
  text-decoration: underline;
  color: black;

  transition: 0.2s ease-out;

  &:hover {
    transition: 0.2s ease-out;
    color: #b8b8b8;
  }

  ${media.tablet`
  max-width: 100%;
  font-size: 24px;
`};
  ${media.thone`font-size: 19px;`};
`;
const Text = styled.p`
  font-size: 28px;
  line-height: 146%;
  margin: 0;

  word-wrap: break-word;
  text-align: justify;
  text-justify: inter-word;

  ${media.tablet`
    max-width: 100%;
    font-size: 24px;
  `};
  ${media.thone`font-size: 19px;`};
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  text-align: center !important;

  ${media.tablet`flex-direction: column-reverse;`};
`;
const Col = styled.div`
  flex: 0 0 auto;
  /*width: ${props => (props.max ? '100%' : props.bigger ? '60%' : '40%')};*/
  width: 80%;
  align-items: center;
  justify-content: flex-start;

  ${media.tablet`width: 100%;`};
`;

const Description = props => {
  return (
    <StyledSection>
      <Container max>
        <Row>
          <Text>About</Text>
          <Col max>
            <Text ta="right">{props.description}</Text>
            {props.rsvp && (
              <a href={props.signup} target="_blank" rel="noreferrer">
                <Link ta="right">Sign Up Today!</Link>
              </a>
            )}
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default Description;
