import React, { PropTypes } from 'react';
import ComB from './componentB';
const ComA = () => {
  function toDoA(params) {

  }
  return (
    <div>
      <ComB func={toDoA.bind(this)} />
    </div>
  );
};

ComA.propTypes = {
  prop1: PropTypes.string.isRequired
};

export default ComA;
