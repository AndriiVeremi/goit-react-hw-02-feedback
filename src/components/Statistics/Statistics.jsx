import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import './Statistics.css';

const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
  return total ? (
    <ul className="Statistics__list">
      <li className="Statistics__item">
        <p className="Statistics__name">
          Good: <span className="Statistics__value">{good}</span>
        </p>
      </li>
      <li className="Statistics__item">
        <p className="Statistics__name">
          Neutral: <span className="Statistics__value">{neutral}</span>
        </p>
      </li>
      <li className="Statistics__item">
        <p className="Statistics__name">
          Bad: <span className="Statistics__value">{bad}</span>
        </p>
      </li>
      <li className="Statistics__item">
        <p className="Statistics__name">
          Total: <span className="Statistics__value">{total}</span>
        </p>
      </li>
      <li className="Statistics__item">
        <p className="Statistics__name">
          Positive feedback:{' '}
          <span className="Statistics__value">{positivePercentage}%</span>
        </p>
      </li>
    </ul>
  ) : (
    <Notification
      message="There is no feedback"
      className="Statistics__message"
    />
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};