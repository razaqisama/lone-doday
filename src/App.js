import Header from './Components/Header/Header';
import CategoryList from './Components/Header/CategoryList';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Carousel from './Components/Carousel/Carousel';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchLineToday} from './Store/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchLineToday());
  }, [dispatch])

  
  return (
    <div className="flex flex-col">
      <Header />
      <CategoryList />
      <Carousel />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
