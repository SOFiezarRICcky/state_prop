import React from 'react';
import Materi from './props/Prop';
import Kursus from './state/State';
import './props/style.css';

function App() {
  return (
    <div className="wrapperapp">
      <Kursus />
      <hr />
      <p>Contoh State</p>
      <Materi img={require('./props/seo1.png')} des="belajar seo" harga="120000" />
      <Materi img={require('./props/seo2.jpg')} des="belajar SEO 2" harga="400000" />
      <Materi img={require('./props/seo3.jpg')} des="belajar React Js" harga="50000" />
    </div>
  );
}

export default App;
