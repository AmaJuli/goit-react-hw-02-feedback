import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { Notification } from '../Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total === 0) {
    return <Notification message="There is no feedback" />;
  }

  return (
    <>
      <p className={css.titlegood}>Good: {good}</p>
      <p className={css.titleneutral}>Neutral: {neutral}</p>
      <p className={css.titlebad}>Bad: {bad}</p>
      <p className={css.titletotal}>Total: {total}</p>
      <p className={css.titlepositiv}>Positive feedback: {positivePercentage}%</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
