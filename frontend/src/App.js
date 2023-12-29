import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Search from './component/Search';


const App = () => {
  const [word, setWord] = useState('');
  const handleSerachSubmit = (e) => {
    e.preventDefault();
    console.log(word)
  }
  
  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={ handleSerachSubmit } />
    </div>
  );
};

export default App;
