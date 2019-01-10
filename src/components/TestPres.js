import React from 'react';

const TestPres = props => {
  if (props.loaded) {
    return <p>{props.data[0].category}</p>;
  } else {
    return <p>not hi</p>;
  }
}

export default TestPres;