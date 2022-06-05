import React from 'react';

const FeedbackOptions = ({ option, onLeaveFeedback }) => {
  return option.map(button => {
    return (
      <button
        key={button}
        type="button"
        onClick={onLeaveFeedback}
        name={button}
      >
        {button}
      </button>
    );
  });
};

export default FeedbackOptions;
