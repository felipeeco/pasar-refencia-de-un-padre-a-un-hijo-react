import React, { useRef, forwardRef, useImperativeHandle } from 'react';

const ParentComponent = () => {
  const childRef = useRef(null);

  const handleClick = () => {
    if (childRef.current) {
      childRef.current.perro();
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Focus en el Input del Hijo</button>
      <ChildComponent ref={childRef} />
    </div>
  );
};

const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    perro: () => {
      inputRef.current.focus();
    }
  }));

  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
});

export function App() {
  return (
    <div className='App'>
      <ParentComponent />
    </div>
  );
}
