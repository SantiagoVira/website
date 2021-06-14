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
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </div>
      <div data-scroll-section>
        <CTA />
      </div>
    </>
  );
};

export default SummerCamp;
