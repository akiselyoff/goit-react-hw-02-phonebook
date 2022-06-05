import React from 'react';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={s.statisticsList}>
    <li className={s.statisticItem}>Good: {good}</li>
    <li className={s.statisticItem}>Neutral: {neutral}</li>
    <li className={s.statisticItem}>Bad: {bad}</li>
    <li className={s.statisticItem}>Total: {total}</li>
    <li className={s.statisticItem}>
      Positive Feedback: {positivePercentage} %
    </li>
  </ul>
);

export default Statistics;
