import ScrollContainer from 'react-indiana-drag-scroll'
import {useState} from 'react';
import Article from './Article';
function NewsList ({news}) {
  const [articles, setArticles] = useState(news.sections[0].articles);
  if(articles.length) {
    return (
      <div className="flex flex-col p-2">
        <div className="flex justify-center items-center sm:w-1/4 h-10 bg-indigo-700 rounded-t-lg">
          <p className="whitespace-nowrap text-lg font-semibold text-white">{news.title}</p>
        </div>
        <ScrollContainer className="flex overflow-x-scroll p-4 border-2 border-indigo-700" style={{scrollbarWidth: 'none'}}>
          <div className="flex flex-nowrap">
            {
              articles.map((article)=>{
                return (
                  <Article 
                    key={article.id}
                    article={article}/>
                )
              })
            }

          </div>
        </ScrollContainer>
      </div>
    )
  } else {
    return (
      ''
    )
  }
}

export default NewsList;