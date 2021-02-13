import CategoryScroll from './CategoryScroll';
function CategoryList () {
  return (
    <>
    <div className="sticky top-0 bg-white flex flex-row h-14 px-6 border-b-2 border-gray-100 shadow-md">
      <CategoryScroll />
      <div className="group flex justify-center items-center p-2 transform -rotate-90 ">
        <svg className="w-6 h-6 group-hover:text-indigo-700 transform animate-bounce transition duration-800 ease-in-out"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
    </>
  )
}

export default CategoryList;