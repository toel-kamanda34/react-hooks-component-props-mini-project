import React from 'react';

function Article(props) {
const date = props.date || 'January 1, 1970'; 
  const minutesToRead = props.minutes;
  let readTimeIndicator = '';

  if (minutesToRead < 30) {
    const coffeeCups = Math.ceil(minutesToRead / 5);
    readTimeIndicator = `${'☕️'.repeat(coffeeCups)} ${minutesToRead} min read`;
  } else {
    const bentoBoxes = Math.ceil(minutesToRead / 10);
    readTimeIndicator = `${'🍱'.repeat(bentoBoxes)} ${minutesToRead} min read`;
  }

  return (
    <article>
      <h3>{props.title}</h3>
      <small>{date }</small>
      <p>{props.preview}</p>
      {readTimeIndicator && <span>{readTimeIndicator}</span>}
    </article>
  );
}

export default Article
