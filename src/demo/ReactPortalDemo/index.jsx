import { useState, useRef, useEffect } from 'react';
import Target from './components/Target';
import Parent from './components/Parent';

function PortalDemo() {
  const targetElRef = useRef();
  const parentElRef = useRef();
  const [currentTargetEl, setCurrentTargetEl] = useState(null);

  const STYLE = { display: 'flex', color: '#000000', textAlign: 'center' };

  useEffect(() => {
    if (targetElRef.current) setCurrentTargetEl(targetElRef.current);
  }, []);

  return (
    <div>
      <div style={STYLE}>
        <Target forwardRef={targetElRef} />
        <Parent forwardRef={parentElRef} targetEl={currentTargetEl} />
      </div>
    </div>
  );
}

export default PortalDemo;
