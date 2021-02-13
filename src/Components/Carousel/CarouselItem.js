function CarouselItem ({carousel}) {
  console.log(carousel);
  return (
    <a 
      target="_blank"
      href={carousel.url.url}
      className="cursor-pointer group inline-block space-y-2">
      <div className="h-96 max-w-7xl overflow-hidden rounded-lg bg-red-200 shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <img 
          src={`https://obs.line-scdn.net/${carousel.thumbnail.hash}`} alt="testing"
          className="w-full h-full"
          ></img>
      </div>
      <div className="flex items-center justify-center w-screen min-h-10 max-w-7xl rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <p className="text-center">{carousel.title}</p>
      </div>
    </a>
  )
}

export default CarouselItem;