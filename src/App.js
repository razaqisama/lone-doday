import Header from './Components/Header/Header';
import CategoryList from './Components/Header/CategoryList';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Carousel from './Components/Carousel/Carousel';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchLineToday} from './Store/actions';
import {useSelector} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const loadingCategory = useSelector(state => state.categoriesReducer.loading)
  const loadingNews = useSelector(state => state.newsReducer.loading)
  useEffect(()=>{
    dispatch(fetchLineToday());
  }, [dispatch])
  
  if(loadingNews || loadingCategory) {
    return (
      <div className="w-full h-full fixed block top-0 left-0 z-50">
        <span className="text-blue-900 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0">
          <i className="fas fa-circle-notch fa-spin fa-5x"></i>
        </span>
      </div>
    )
  }
  else {
    return (
      <div className="flex flex-col">
        <Header />
        <CategoryList />
        <Carousel />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
