import React, { PropTypes } from 'react';
import ComC from './componentB';
const ComB = () => {
  function toDoA(params) {

  }
  return (
    <div>
      <ComC func={toDoA.bind(this)} />
    </div>
  );
};

ComB.propTypes = {
  prop1: PropTypes.string.isRequired
};

export default ComB;
