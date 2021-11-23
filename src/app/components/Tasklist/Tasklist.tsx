import React, { useState } from 'react';
import styled from 'styled-components';

type TasklistProps = {
  activities: string[];
  setActivities: (activities: string[]) => void;
};

export default function Tasklist({
  activities,
  setActivities,
}: TasklistProps): JSX.Element {
  const [newActivity, setNewActivity] = useState('');

  function onClick(event: { preventDefault: () => void }) {
    event.preventDefault();
    const newActivities = [...activities, newActivity];
    setActivities(newActivities);
    setNewActivity('');
  }

  return (
    <TaskList>
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
    </TaskList>
  );
}

const TaskList = styled.ul`
  list-style: none;
  grid-column: 3/5;
`;
