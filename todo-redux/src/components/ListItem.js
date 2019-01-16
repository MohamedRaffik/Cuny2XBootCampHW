import React from 'react';

const ListItem = (props) => {
  return (
    <li>
      <span key={props.id}>
        <h3>{props.info.text}</h3>
        <p>Created: {props.info.date}</p>
        <button onClick={props.onComplete}>{props.info.isCompleted ? 'Undo Complete' : 'Complete'}</button>
        <button onClick={props.onRemove}>Remove</button>
      </span>
    </li>
  );
}

export default ListItem;