import React from 'react';

import SearchForm from './SearchForm';
import Activity from './Activity';

export default function App(props) {
  const [activities, setActivities] = React.useState(props.activities);
  const [searchQuery, setSearchQuery] = React.useState("");

  const activityFilter = (a) => {
    const regex = new RegExp(searchQuery, 'gi');
    return a.type.match(regex) || a.description.match(regex);
  };

  const activitiesList = activities
    .filter(activityFilter)
    .map((a) => (
      <Activity key={a.id} activity={a} />
    )
  );

  return (
    <div className="activity-log">
      <h1>Activity Log</h1>
      <SearchForm onSearch={setSearchQuery}/>

      <table className="activity-list">
        <thead>
          <tr>
            <th>Date</th>
            <th>Event</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          { activitiesList }
        </tbody>
      </table>
    </div>
  );
}
