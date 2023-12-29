import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Search from './component/Search';

const App = () => {
  return (
    <div>
      <Header title="Images Gallery" />
      <Search />
    </div>
  );
};

export default App;
