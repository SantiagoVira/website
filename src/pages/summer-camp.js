import React from 'react';
import { Helmet } from 'react-helmet';
import { Hero, Description } from '@components/event';
import { CTA } from '@components/home';
import Summer from '@images/codefest/codefest.svg';

const SummerCamp = () => {
  return (
    <>
      <Helmet title="Summer Camp" />
      <div data-scroll-section>
        <Hero name="Summer Camp" date="July 5th-16th, 2021" src={Summer} />
      </div>
      <div data-scroll-section>
        <Description
          rsvp
          signup="https://bit.ly/codecamp21"
          description={`
          Calling all Middle School students! Are you interested in learning computer science and how to code by understanding the basics of a 
          programming language? Well, you’re in luck! We are CODE, a nonprofit organization dedicated to expanding student tech engagement in 
          your community! This year, we’re hosting a FREE virtual coding summer camp from July 5th to July 16th, Monday to Friday from 12-2 PM. 
          You can choose to learn at your level and get quality tutoring lessons from experienced programmers all at no cost. 
          If you have any questions or concerns, contact us at team@techcodes.org
          `}
        />
      </div>
      <div data-scroll-section>
        <CTA />
      </div>
    </>
  );
};

export default SummerCamp;
