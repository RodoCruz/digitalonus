import { Fragment } from 'react';
import Mainpage from './components/main';
import StylesTitle from './styles/Title.module.css';

function App() {
  return (
    <Fragment>
      <div className={StylesTitle["title"]}>
        <h1>Rodolfo Cruz Paniagua</h1>
        <h2>DigitalOnUs - JS - HTML - CSS</h2>
      </div>
      <Mainpage />
    </Fragment>
  );
}

export default App;
