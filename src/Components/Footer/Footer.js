import github from './assets/Github.png';
import linkedIn from './assets/Linkedin.png';
import medium from './assets/Medium.png';

function Footer () {
  return (
    <div className="sticky bottom-0 h-12">
      <div className="bg-opacity-50 flex flex-col h-12 space-y-4 justify-end items-end px-4 rounded-lg pb-2">
        <a 
          href="https://github.com/razaqisama"
          target="_blank"
          className="outline-none cursor-pointer group flex flex-row justify-center items-center">
          <img 
            src={github} 
            alt="github"
            className="border-indigo-800 border-2 rounded-full w-14 h-14 bg-indigo-800 group-hover:scale-125 transform transition duration-500 ease-in-out"
            onClick={()=>{
              console.log('Github')
            }}
            >
          </img>
          <p className="hidden group-hover:inline-block group-hover:translate-x-2 transform text-2xl font-semibold text-indigo-800 bg-white rounded-lg border-2 border-indigo-800 p-1">Github</p>
        </a>
        <a
          href="https://www.linkedin.com/in/razaqisama/"
          target="_blank" 
          className="outline-none cursor-pointer group flex flex-row justify-center items-center">
          <img 
            src={linkedIn}
            alt="linkedin"
            className="border-indigo-800 border-2 rounded-full w-14 h-14 bg-indigo-800 group-hover:scale-125 transform transition duration-500 ease-in-out"
            onClick={()=>{
              console.log('Linkedin')
            }}
            >
          </img>
          <p className="hidden group-hover:inline-block group-hover:translate-x-2 transform text-2xl font-semibold text-indigo-800 bg-white rounded-lg border-2 border-indigo-800 p-1">Linkedin</p>
        </a>
        <a 
          href="https://mulainulislagi.medium.com/"
          target="_blank"
          className="outline-none cursor-pointer group flex flex-row justify-center items-center">
          <img 
            src={medium} 
            alt="github" 
            className="border-indigo-800 border-2 rounded-full w-14 h-14 bg-indigo-800 group-hover:scale-125 transform transition duration-700 ease-in-out"
            onClick={()=>{
              console.log('Medium')
            }}
            >
          </img>
          <p className="hidden group-hover:inline-block group-hover:translate-x-2 transform text-2xl font-semibold text-indigo-800 bg-white rounded-lg border-2 border-indigo-800 p-1">Medium</p>
        </a>

      </div>
    </div>
  )
}

export default Footer;