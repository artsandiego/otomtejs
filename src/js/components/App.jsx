import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [logoPath, setLogoPath] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    setName('Otomte JS');
    setLogoPath('./assets/svg/oto.svg');
  }, []);

  return (
    <React.Fragment>
      <img className="oto_logo" src={logoPath} alt={name} />
      <h1>{name}</h1>
    </React.Fragment>
  );
};

export default App;
ReactDOM.render(<App />, document.getElementById('app'));
