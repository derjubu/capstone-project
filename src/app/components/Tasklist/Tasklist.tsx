import React, { useState } from 'react';

export default function Tasklist({}): JSX.Element {
  const [newActivity, setNewActivity] = useState('');
  const [activities, setActivities] = useState(['Climbing', 'Walking']);

  function onClick(event: { preventDefault: () => void }) {
    event.preventDefault();
    const newActivities = [...activities, newActivity];
    setActivities(newActivities);
    setNewActivity('');
  }

  return (
    <div>
      <label htmlFor="NewActivity">
        <input
          type="text"
          value={newActivity}
          placeholder="Add a new activity"
          id="NewActivity"
          onChange={(event) => setNewActivity(event.target.value)}
        />
        <button onClick={onClick}>Add to activities</button>
      </label>
      <ul>
        {activities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
