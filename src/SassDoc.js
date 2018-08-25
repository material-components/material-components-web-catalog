import React from 'react';
import './styles/SassDoc.scss';

const renderEntry = (entry, index) => {
  return (
    <div key={index}>
      <h3>
        ${entry.context.name}
      </h3>
      <h4>
        {entry.description}
      </h4>
      <h4>
        {entry.description}
      </h4>
    </div>
  );
}

const SassDoc = ({data}) => {
  console.log(data)
  return (
    data.map(renderEntry)
  );
}

export default SassDoc;