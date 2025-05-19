import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Michael Wingchun Siu</h2>
        <p>
          <a href="siuw@usc.edu">siuw at usc dot edu</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Michael Siu. I am a computer science student at{' '}
        <a href="https://www.usc.edu">USC</a> passionate about AI, software, and systems.<br />
        My research interests include Agents, LLM, and reinforcement learning.
      </p>

      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Michael Siu <Link to="/">WingchunSiu.github.io</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
