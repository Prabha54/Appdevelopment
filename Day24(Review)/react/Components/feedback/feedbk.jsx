import React, { useState } from 'react';

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const submitFeedback = () => {
    // Here, you can send the feedback to your server or API for processing and storage.
    // This is just a basic example of capturing feedback.
    console.log('Submitted feedback:', feedback);
    // You can clear the feedback field or show a confirmation message here.
  };

  return (
    <div>
      <h1>Feedback</h1>
      <p>We value your feedback. Please let us know your thoughts, suggestions, or concerns about the Employee Tax Calculator.</p>

      <div>
        <label htmlFor="feedback">Your Feedback:</label>
        <textarea
          id="feedback"
          name="feedback"
          value={feedback}
          onChange={handleFeedbackChange}
          rows={5}
          placeholder="Enter your feedback here..."
        />
      </div>

      <button onClick={submitFeedback}>Submit Feedback</button>
    </div>
  );
};

export default FeedbackPage;
