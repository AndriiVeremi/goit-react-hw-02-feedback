import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import './FeedbackOptions.css';

const FeedbackOptions = ({ options, onFeedback }) => {
  return (
    <ul className="Btn__list">
      {options.map(option => {
        return (
          <li key={option} className="Btn__item">
            <button
              key={option}
              type="button"
              value={option}
              onClick={() => onFeedback(option)}
              className="Btn"
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: arrayOf(PropTypes.string.isRequired),
  onFeedback: PropTypes.func.isRequired,
};
