import { useState } from 'react';
import Section from '../Section';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import css from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickButton = e => {
    const option = e.target.name;

    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        console.log('Error e.target.name = ', e.target.name);
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedback = () => {
    const totalFeedback = countTotalFeedback();
    let result = 0;

    if (totalFeedback > 0) {
      result = Math.trunc((good / totalFeedback) * 100);
    }

    return `${result}%`;
  };

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleClickButton}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedback()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    </div>
  );
}
