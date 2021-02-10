function Header() {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between bg-white items-center h-16 py-2 px-10">
        <div className="cursor-pointer flex justify-center items-center h-full bg-indigo-800 p-2 rounded-lg">
          <p className="text-white text-2xl font-bold">Lone</p>
          <p className="text-yellow-300 text-2xl font-bold">Dodey</p>
        </div>
        <div className="cursor-pointer flex justify-center items-center h-full bg-yellow-300 px-6 p-1 rounded-2xl">
          <p className="text-md font-semibold">Login</p>
        </div>
      </div>
    </div>
  )
}

export default Header;