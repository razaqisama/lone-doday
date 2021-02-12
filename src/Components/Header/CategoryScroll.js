import ScrollContainer from 'react-indiana-drag-scroll'
import {useDispatch, useSelector} from 'react-redux';
import {selectCategory} from '../../Store/actions';

function CategoryScroll () {
  const dispatch = useDispatch();
  const data = useSelector(state => state.categoriesReducer)

  function setCategory(payload) {
    dispatch(selectCategory(payload))
  }
  return (
    <>
      <div className="flex justify-center items-center p-2 border-b-4 border-indigo-700">
        <p className="whitespace-nowrap text-indigo-700 text-xl font-bold">{data.selectedCategory?.id ? data.selectedCategory.name : 'All News'}</p>
      </div>
      <ScrollContainer 
        className="flex flex-row flex-auto overflow-x-auto px-1 border-r-2" style={{scrollbarWidth: 'none'}}
        >
        {
          data.categories.map((category) => {
            if(category.id !== data.selectedCategory?.id){
              return (
                <div 
                  className="group cursor-pointer flex justify-center items-center px-3 border-b-2 border-white hover:border-indigo-700 hover:bg-gray-100 transform transition duration-800 ease-in-out"
                  key={category.id}
                  onClick={(e)=>{
                    e.preventDefault();
                    setCategory(category);
                  }}
                  >
                  <p className="whitespace-nowrap text-gray-400 text-lg font-semibold group-hover:text-indigo-700 transform transition duration-800 ease-in-out"
                    >{category.name}
                  </p>
                </div>
              )
            }
          })
        }
      </ScrollContainer>
    </>
  )
}

export default CategoryScroll;