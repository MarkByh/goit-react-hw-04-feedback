import { Section } from './section';
import { useState } from 'react';
import { Statistics } from './statistics';
import { Notification } from './notification';
import { FeedbackOptions } from './feedbackOptions';
export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  const handleClick = e => {
    const option = e.currentTarget.value;
    if (option === 'good') {
      setGood(state => state + 1);
    } else if (option === 'neutral') {
      setNeutral(state => state + 1);
    } else if (option === 'bad') {
      setBad(state => state + 1);
    }
  };

  const total = countTotalFeedback();
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={handleClick}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given yet" />
        )}
      </Section>
    </div>
  );
};
export default Feedback;
