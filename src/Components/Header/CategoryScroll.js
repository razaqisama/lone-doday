import ScrollContainer from 'react-indiana-drag-scroll'

function CategoryScroll () {
  return (
    <>
      <div className="cursor-pointer flex justify-center items-center p-2 border-b-4 border-indigo-700 hover:bg-gray-100 transform transition duration-800 ease-in-out">
        <p className="whitespace-nowrap text-indigo-700 text-xl font-bold">Selected</p>
      </div>
      <ScrollContainer 
        className="flex flex-row flex-auto overflow-x-auto px-1 border-r-2" style={{scrollbarWidth: 'none'}}>
        <div className="group cursor-pointer flex justify-center items-center px-3 border-b-2 border-white hover:border-indigo-700 hover:bg-gray-100 transform transition duration-800 ease-in-out">
          <p className="whitespace-nowrap text-gray-400 text-lg font-semibold group-hover:text-indigo-700 transform transition duration-800 ease-in-out"
            >Not Selected
          </p>
        </div>
        <div className="group cursor-pointer flex justify-center items-center px-3 border-b-2 border-white hover:border-indigo-700 hover:bg-gray-100 transform transition duration-800 ease-in-out">
          <p className="whitespace-nowrap text-gray-400 text-lg font-semibold group-hover:text-indigo-700 transform transition duration-800 ease-in-out"
            >Not Selected
          </p>
        </div>
        <div className="group cursor-pointer flex justify-center items-center px-3 border-b-2 border-white hover:border-indigo-700 hover:bg-gray-100 transform transition duration-800 ease-in-out">
          <p className="whitespace-nowrap text-gray-400 text-lg font-semibold group-hover:text-indigo-700 transform transition duration-800 ease-in-out"
            >Not Selected
          </p>
        </div>
        <div className="group cursor-pointer flex justify-center items-center px-3 border-b-2 border-white hover:border-indigo-700 hover:bg-gray-100 transform transition duration-800 ease-in-out">
          <p className="whitespace-nowrap text-gray-400 text-lg font-semibold group-hover:text-indigo-700 transform transition duration-800 ease-in-out"
            >Not Selected
          </p>
        </div>
        <div className="group cursor-pointer flex justify-center items-center px-3 border-b-2 border-white hover:border-indigo-700 hover:bg-gray-100 transform transition duration-800 ease-in-out">
          <p className="whitespace-nowrap text-gray-400 text-lg font-semibold group-hover:text-indigo-700 transform transition duration-800 ease-in-out"
            >Not Selected
          </p>
        </div>
        <div className="group cursor-pointer flex justify-center items-center px-3 border-b-2 border-white hover:border-indigo-700 hover:bg-gray-100 transform transition duration-800 ease-in-out">
          <p className="whitespace-nowrap text-gray-400 text-lg font-semibold group-hover:text-indigo-700 transform transition duration-800 ease-in-out"
            >Not Selected
          </p>
        </div>
        <div className="group cursor-pointer flex justify-center items-center px-3 border-b-2 border-white hover:border-indigo-700 hover:bg-gray-100 transform transition duration-800 ease-in-out">
          <p className="whitespace-nowrap text-gray-400 text-lg font-semibold group-hover:text-indigo-700 transform transition duration-800 ease-in-out"
            >Not Selected
          </p>
        </div>
        <div className="group cursor-pointer flex justify-center items-center px-3 border-b-2 border-white hover:border-indigo-700 hover:bg-gray-100 transform transition duration-800 ease-in-out">
          <p className="whitespace-nowrap text-gray-400 text-lg font-semibold group-hover:text-indigo-700 transform transition duration-800 ease-in-out"
            >Not Selected
          </p>
        </div>
        <div className="group cursor-pointer flex justify-center items-center px-3 border-b-2 border-white hover:border-indigo-700 hover:bg-gray-100 transform transition duration-800 ease-in-out">
          <p className="whitespace-nowrap text-gray-400 text-lg font-semibold group-hover:text-indigo-700 transform transition duration-800 ease-in-out"
            >Not Selected
          </p>
        </div>
        <div className="group cursor-pointer flex justify-center items-center px-3 border-b-2 border-white hover:border-indigo-700 hover:bg-gray-100 transform transition duration-800 ease-in-out">
          <p className="whitespace-nowrap text-gray-400 text-lg font-semibold group-hover:text-indigo-700 transform transition duration-800 ease-in-out"
            >Not Selected
          </p>
        </div>
      </ScrollContainer>
    </>
  )
}

export default CategoryScroll;