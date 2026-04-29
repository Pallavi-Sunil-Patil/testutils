import React from 'react';

export default function Testform(props) {
  return (
    <footer className="container-fuild py-3" style={{ borderTop: '1px solid #dcd8d8' }}>
      <p className="text-center m-0" style={{color: props.mode === 'light' ? 'black' : 'white',backgroundColor:props.mode==='light'?'white':'#00000000' }}>
        © 2026 Copyright
      </p>
    </footer>
  );
}