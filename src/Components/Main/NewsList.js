import ScrollContainer from 'react-indiana-drag-scroll'
function NewsList () {
  return (
    <div className="flex flex-col p-2">
      <div className="flex justify-center items-center sm:w-1/4 h-10 bg-indigo-700 rounded-t-lg">
        <p className="whitespace-nowrap text-lg font-semibold text-white">Title</p>
      </div>
      <ScrollContainer className="flex overflow-x-scroll p-4 border-2 border-indigo-700" style={{scrollbarWidth: 'none'}}>
        <div className="flex flex-nowrap">
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">

            </div>
          </div>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">

            </div>
          </div>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">

            </div>
          </div>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">

            </div>
          </div>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">

            </div>
          </div>
        </div>
      </ScrollContainer>
    </div>

  )
}

export default NewsList;