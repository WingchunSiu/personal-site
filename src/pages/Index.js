import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Michael Siu's personal website. Computer science student at USC, passionate about AI and Software Engineering."
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h1
            style={{
              fontSize: '3.5em',
              fontWeight: 900,
              margin: 0,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              lineHeight: '1.05',
            }}
          >
            ENGINEERING IDEAS <br /> INTO REALITY.
          </h1>
        </div>
      </header>
      <p>
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        view <Link to="/research">research</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
