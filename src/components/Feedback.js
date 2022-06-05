import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {};
  handleNeutral = () => {};
  handleBad = () => {};

  render() {
    return (
      <section>
        <p>Please leave feedback</p>
        <div>
          <button type="button">good</button>
          <button type="button">neutral</button>
          <button type="button">bad</button>
        </div>

        <p>Statistics</p>
        <ul>
          <li>Good: {}</li>
          <li>Neutral: {}</li>
          <li>Bad: {}</li>
          <li>Total: {}</li>
          <li>Positive Feedback: {} %</li>
        </ul>
      </section>
    );
  }
}

export default Feedback;
