import ScrollContainer from 'react-indiana-drag-scroll'

function Carousel () {
  return (
    <div className ="flex flex-col h-lg bg-gray-100">
        <ScrollContainer className="flex items-center overflow-x-scroll h-full px-4" style={{scrollbarWidth: 'none'}}>
          <div className="flex flex-nowrap space-x-2">
            <div className="inline-block space-y-2">
              <div className="w-screen h-96 max-w-7xl overflow-hidden rounded-lg bg-red-200 shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img 
                  src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt="testing"
                  className="w-full h-full"
                  ></img>
              </div>
              <div className="cursor-pointer flex items-center justify-center w-screen min-h-10 max-w-7xl rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <p className="text-center">Lorem Ipsum Dolor Sit amet dan embel embel lainnya ohe ohe </p>
              </div>
            </div>
            <div className="inline-block space-y-2">
              <div className="w-screen h-96 max-w-7xl overflow-hidden rounded-lg bg-red-200 shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img 
                  src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt="testing"
                  className="w-full h-full"
                  ></img>
              </div>
              <div className="cursor-pointer flex items-center justify-center w-screen h-10 max-w-7xl overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <p className="whitespace-nowrap">Lorem Ipsum Dolor Sit amet</p>
              </div>
            </div>
            <div className="inline-block space-y-2">
              <div className="w-screen h-96 max-w-7xl overflow-hidden rounded-lg bg-red-200 shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img 
                  src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt="testing"
                  className="w-full h-full"
                  ></img>
              </div>
              <div className="cursor-pointer flex items-center justify-center w-screen h-10 max-w-7xl overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <p className="whitespace-nowrap">Lorem Ipsum Dolor Sit amet</p>
              </div>
            </div>
          </div>
        </ScrollContainer>
    </div>
  )
}

export default Carousel;