import React from "react";
import { format, parseISO } from 'date-fns';

export default function Activity(props) {
  return(
    <tr key={props.activity.id}>
      <td className="activity__date">{format(parseISO(props.activity.createdAt), 'MMM d, yyyy, h:mm aa')}</td>
      <td className="activity__type">{props.activity.type}</td>
      <td className="activity__description">{props.activity.description}</td>
    </tr>
  );
}