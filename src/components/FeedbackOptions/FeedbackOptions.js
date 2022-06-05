import React from 'react';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(button => {
    return (
      <button
        key={button}
        type="button"
        onClick={onLeaveFeedback}
        name={button}
        className={s.buttonFeedback}
      >
        {button}
      </button>
    );
  });
};

export default FeedbackOptions;
