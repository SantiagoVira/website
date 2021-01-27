import React from 'react';
import styled from 'styled-components';
import { media, Container, Section, Card } from '@styles';

import Searching from '@images/props/searching.png';

const StyledSection = styled(Section)`
  padding-top: 25rem;
`;
const TextWrapper = styled.div`
  max-width: 1000px;

  ${media.massive`
    padding-top: 8rem;
    max-width: 1500px;
  `};
  ${media.thone`text-align: center;`};
`;
const ImageWrapper = styled.div`
  ${media.massive`
    position: absolute;
    left: 50%;
  `};
`;
const StyledImage = styled.img`
  width: 800px;
  position: absolute;
  left: 80%;
  transform: translate(-50%, 20%);

  ${media.massive`
    left: 50%;
    transform: translateX(-50%);
    margin-top: -30rem;
  `};
  ${media.tablet`
    width: 600px;
    margin-top: -25rem;
  `};
  ${media.thone`
    width: 80vw;
    margin-top: -10rem;
  `};
`;
const Title = styled.h1`
  font-size: 75px;
  letter-spacing: -4px;
  line-height: 118.2%;
  font-weight: bold;
  margin-top: 1rem;

  ${media.tablet`font-size: 55px;`};
  ${media.thone`
    font-size: 30px;
    letter-spacing: -1px;
  `};
`;
const Description = styled.p`
  font-size: 28px;
  max-width: 75%;
  line-height: 146%;

  ${media.tablet`
    max-width: 100%;
    font-size: 24px;
  `};
  ${media.thone`font-size: 19px;`};
`;
const Label = styled.span`
  font-size: 26px;
  color: #f1f1f1;
  font-weight: 500;
  text-transform: uppercase;

  ${media.thone`font-size: 19px;`};
`;

const About = () => {
  return (
    <StyledSection>
      <Container>
        <Card bg="var(--purple)" color="var(--white)">
          <ImageWrapper data-scroll data-scroll-speed={1}>
            <StyledImage src={Searching} alt="Searching" />
          </ImageWrapper>
          <TextWrapper>
            <Label>About us</Label>
            <Title>
              We’re a student-led nonprofit looking to increase computer science engagement.
            </Title>
            <Description>
              CODE is dedicated to fostering computer science education to students of all
              backgrounds and expose them to the creativity and innovation technology brings. By
              hosting numerous activities, such as guest speaker events, workshops, hackathons, and
              programming competitions, we are able to fulfill our goal on a wider scale. Although
              we are primarily based in the NYC Metropolitan Area, we are expanding our reach
              through numerous partnerships and corporations.
            </Description>
          </TextWrapper>
        </Card>
      </Container>
    </StyledSection>
  );
};

export default About;