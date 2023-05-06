import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import css from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
  return total ? (
    <ul className={css.stat__list}>
      <li className={css.stat__item}>
        <p className={css.stat__name}>
          Good: <span className={css.stat__value}>{good}</span>
        </p>
      </li>
      <li className={css.stat__item}>
        <p className={css.stat__name}>
          Neutral: <span className={css.stat__value}>{neutral}</span>
        </p>
      </li>
      <li className={css.stat__item}>
        <p className={css.stat__name}>
          Bad: <span className={css.stat__value}>{bad}</span>
        </p>
      </li>
      <li className={css.stat__item}>
        <p className={css.stat__name}>
          Total: <span className={css.stat__value}>{total}</span>
        </p>
      </li>
      <li className={css.stat__item}>
        <p className={css.stat__name}>
          Positive feedback:{' '}
          <span className={css.stat__value}>{positivePercentage || 0}%</span>
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
