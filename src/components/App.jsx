import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    this.setState({ [e]: this.state[e] + 1 });
  };

  totalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  feedbackPercentage = ({ good }) =>
    Math.round((good * 100) / this.totalFeedback(this.state));
  
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="Container">

        <p className="Feedback__title">Please leave feedback</p>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onFeedback={this.handleClick}
        />

        <p className="Statistics__title">Statistics</p>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.totalFeedback(this.state)}
          positivePercentage={this.feedbackPercentage(this.state)}
        />
      </div>
    );
  }
}

export default App;
