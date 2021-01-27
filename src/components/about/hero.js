import React from 'react';
import styled from 'styled-components';
import { Section, Container, media } from '@styles';

import Blast from '@images/props/blast.png';

const StyledSection = styled(Section)`
  padding-top: 15rem;
  padding-bottom: 15rem;
  overflow-x: hidden;
  min-height: 60rem;

  ${media.tablet`max-height: 40rem;`};
  ${media.thone`padding-top: 10rem;`};
`;
const BigText = styled.h1`
  font-weight: bold;
  font-size: 80px;
  letter-spacing: -2px;
  line-height: 100%;

  ${media.massive`font-size: 70px;`};
  ${media.thone`font-size: 48px;`};
`;
const Description = styled.p`
  font-size: 28px;
  max-width: 90%;
  line-height: 146%;

  ${media.tablet`
    max-width: 100%;
    font-size: 24px;
  `};
  ${media.thone`font-size: 19px;`};
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${media.tablet`flex-direction: column-reverse;`};
`;
const Col = styled.div`
  flex: 0 0 auto;
  width: ${props => (props.bigger ? '60%' : '40%')};

  ${media.tablet`width: 100%;`};
`;
const StyledImage = styled.img`
  width: 100%;

  ${media.tablet`display: none;`};
`;

const Hero = () => {
  return (
    <StyledSection>
      <Container max>
        <Row>
          <Col bigger>
            <BigText>We're the students creating the new world through computer science</BigText>
            <Description>
              CODE is dedicated to fostering computer science education to students of all
              backgrounds and expose them to the creativity and innovation technology brings.
            </Description>
          </Col>
          <Col>
            <StyledImage src={Blast} alt="About us" />
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default Hero;
