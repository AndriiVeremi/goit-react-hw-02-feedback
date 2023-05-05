import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Title/Title';
import './Section.css';

const Section = ({ title, children }) => {
  return (
    <section className="Section">
      <Title title={title} />
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
