import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Main from '../layouts/Main';
import './Research.css';

// import Personal from '../components/Stats/Personal';
// import Site from '../components/Stats/Site';

const Paper = ({
  title,
  authors,
  conference,
  arxiv,
  github,
}) => (
  <li className="paper-entry">
    <span className="paper-title">{title}</span>
    <div className="paper-authors">{authors}</div>
    <div className="paper-conference">{conference}</div>
    <div className="paper-links">
      <a href={arxiv} target="_blank" rel="noopener noreferrer">arxiv</a>
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer">github</a>
      )}
    </div>
  </li>
);

Paper.propTypes = {
  title: PropTypes.node.isRequired,
  authors: PropTypes.node.isRequired,
  conference: PropTypes.node.isRequired,
  arxiv: PropTypes.string.isRequired,
  github: PropTypes.string,
};

Paper.defaultProps = {
  github: undefined,
};

const Research = () => (
  <Main
    title="Research"
    description="Research and academic work by Michael Siu."
  >
    <article className="post" id="research">
      <header>
        <div className="title">
          <h2><Link to="/research">Research</Link></h2>
        </div>
      </header>
      <ul className="paper-list">
        <Paper
          title="PyOD 2: A Python Library for Outlier Detection with LLM-powered Model Selection"
          authors={
            <>
              Sihan Chen, Zhuangzhuang Qian, <b>Wingchun Siu</b>, Xingcan Hu, Jiaqi Li,<br />
              Shawn Li, Yuehan Qin, Tiankai Yang, Zhuo Xiao, Wanghao Ye, Yichi Zhang, <br />
              Yushun Dong, Yue Zhao
            </>
          }
          conference="The Web Conference (Demo Track), 2025."
          arxiv="https://arxiv.org/abs/2412.12154"
          github="https://github.com/yzhao062/pyod"
        />
        <Paper
          title="Dummy Paper: Exploring AI-Generated Research Components"
          authors={
            <>
              Jane Doe, John Smith, <b>Wingchun Siu</b>
            </>
          }
          conference="ICML 2025"
          arxiv="#"
          github="#"
        />
      </ul>
    </article>
  </Main>
);

export default Research;
