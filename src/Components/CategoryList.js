function CategoryList () {
  return (
    <div className="sticky top-0 flex flex-row h-14 bg-red-400 px-6 space-x-2">
      <div className="flex justify-center items-center bg-red-500 p-2">
        <h1>Selected</h1>
      </div>
      <div className="flex flex-row flex-auto bg-red-500 overflow-x-auto overscroll-contain px-1 py-1 space-x-2" style={{scrollbarWidth: 'none'}}>
        <div className="cursor-pointer flex justify-center items-center px-3 bg-gray-100 rounded-lg">
          <p>Rekomendasi</p>
        </div>
        <div className="cursor-pointer flex justify-center items-center px-3 bg-gray-100 rounded-lg">
          <p>Watch Now</p>
        </div>
        <div className="cursor-pointer flex justify-center items-center px-3 bg-gray-100 rounded-lg">
          <p>Intermezzolodaberksadjer</p>
        </div>
        <div className="cursor-pointer flex justify-center items-center px-3 bg-gray-100 rounded-lg">
          <p>Intermezzolodaberksadjer</p>
        </div>
        <div className="cursor-pointer flex justify-center items-center px-3 bg-gray-100 rounded-lg">
          <p>Intermezzolodaberksadjer</p>
        </div>
        <div className="cursor-pointer flex justify-center items-center px-3 bg-gray-100 rounded-lg">
          <p>Intermezzolodaberksadjer</p>
        </div>
        <div className="cursor-pointer flex justify-center items-center px-3 bg-gray-100 rounded-lg">
          <p>Intermezzolodaberksadjer</p>
        </div>
      </div>
      <div className="flex justify-center items-center bg-red-500 p-2">
        <h1>DropDown</h1>
      </div>
    </div>
  )
}

export default CategoryList;