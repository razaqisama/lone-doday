import Header from './Components/Header/Header';
import CategoryList from './Components/Header/CategoryList';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <CategoryList />
      <Main />
      <div className="flex">
        <h1>Bottom</h1>
      </div>
      
    </div>
  );
}

export default App;
