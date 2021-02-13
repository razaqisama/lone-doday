import NewsList from './NewsList';
import {useSelector} from 'react-redux';

function Main () {
  const newsSelected = useSelector(state => state.newsReducer.selectedNews)
  console.log(newsSelected);
  return (
    <>
      {
        newsSelected.map((news)=>{
          if(news.title) {
            return (
              <NewsList
                key={news.id} 
                news={news} />
            )
          }
        })
      }
    </>
  )
}

export default Main;