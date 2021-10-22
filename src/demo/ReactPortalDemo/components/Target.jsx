import React from 'react';

function Target(props) {
  const { forwardRef } = props;

  const STYLE = { width: 500, height: 500, background: 'lightgrey' };

  return (
    <div ref={forwardRef} style={STYLE}>
      Target element
    </div>
  );
}

export default React.forwardRef((props, ref) => <Target forwardRef={ref} {...props} />);
