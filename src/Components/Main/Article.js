function Article ({article}) {
  return (
    <a
      target='_blank' 
      href={article.url.url}
      className="group cursor-pointer inline-block px-3 space-y-2"
      >
      <img 
        className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
        src={`https://obs.line-scdn.net/${article.thumbnail.hash}`}
        >

      </img>
      <div className="w-64 min-h-10 p-2 text-center max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <p>{article.title}</p>
        <p>{article.publisher}</p>
      </div>
    </a>
  )
}

export default Article;