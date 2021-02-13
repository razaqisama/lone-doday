import ScrollContainer from 'react-indiana-drag-scroll'
import {useSelector} from 'react-redux';
import CarouselItem from './CarouselItem';
function Carousel () {
  const newsSelected = useSelector(state => state.newsReducer.selectedNews)
  return (
    <>
    {
      newsSelected.map((item)=>{
        if(item.type == 50) {
          return (
            <div 
              key={item.id}
              className ="flex flex-col h-lg bg-gray-100">
              <ScrollContainer className="flex items-center overflow-x-scroll h-full px-4" style={{scrollbarWidth: 'none'}}>
                <div className="flex flex-nowrap space-x-2">
                  {
                    item?.sections[0]?.articles?.map(carousel => {
                      return (
                        <CarouselItem
                          key={carousel.id}
                          carousel={carousel}/>
                      )
                    })
                  }
                </div>
              </ScrollContainer>
            </div>
          )
        }
      })
    }
    </>
  )
}

export default Carousel;