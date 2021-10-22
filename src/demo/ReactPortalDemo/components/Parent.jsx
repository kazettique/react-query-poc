import React from 'react';
import ReactDOM from 'react-dom';
import Child from './Child';

function Parent(props) {
  const { forwardRef, targetEl } = props;

  const STYLE = { width: 300, height: 300, background: 'lightblue', overflow: 'hidden' };

  const handleClick = () => {
    console.log('parent click!!');
  };

  return (
    <div ref={forwardRef} style={STYLE} onClick={handleClick}>
      Parent element
      <Child name="Child without portal" />
      {targetEl && ReactDOM.createPortal(<Child name="Child with portal" />, targetEl)}
    </div>
  );
}

export default React.forwardRef((props, ref) => <Parent forwardRef={ref} {...props} />);
