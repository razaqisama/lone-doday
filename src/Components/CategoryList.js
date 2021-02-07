function CategoryList () {
  return (
    <div className="sticky top-0 flex flex-row h-14 bg-white px-6 border-b-2 border-gray-100 shadow-md">
      <div className="cursor-pointer flex justify-center items-center p-2 border-b-4 border-indigo-700 hover:bg-gray-100 transform transition duration-400 ease-in-out">
        <p className="whitespace-nowrap text-indigo-700 text-xl font-bold">Selected</p>
      </div>
      <div className="flex flex-row flex-auto overflow-x-auto overscroll-contain px-1" style={{scrollbarWidth: 'none'}}>
        <div className="group cursor-pointer flex justify-center items-center px-3 border-b-2 border-white hover:border-indigo-700 hover:bg-gray-100 transform transition duration-400 ease-in-out">
          <p className="whitespace-nowrap text-gray-400 text-lg font-semibold group-hover:text-indigo-700 transform transition duration-400 ease-in-out">Not Selected</p>
        </div>
        <div className="group cursor-pointer flex justify-center items-center px-3 border-b-2 border-white hover:border-indigo-700 hover:bg-gray-100 transform transition duration-400 ease-in-out">
          <p className="whitespace-nowrap text-gray-400 text-lg font-semibold group-hover:text-indigo-700 transform transition duration-400 ease-in-out">Not Selected</p>
        </div>
      </div>
      <div className="flex justify-center items-center p-2">
        <h1>DropDown</h1>
      </div>
    </div>
  )
}

export default CategoryList;