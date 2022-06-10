import {useState, useEffect} from 'react'

function App() {
  return (
    <div className="">
      Hello world
    </div>
  );
}
export default App;


  // const selected = "bg-gray-200 rounded-full"
  // const [isLight, setIsLight] = useState(true)
  // const handleSwitch = (mode) => {
    
  //   switch (mode){
  //     case "light":
  //       localStorage.setItem("theme", "light")
  //       setIsLight(true)
  //       break;
  //     case "dark":
  //       localStorage.setItem("theme", "dark")
  //       setIsLight(false)
  //       break
  //     default:
  //       break
  //   }
  // }
  
  // useEffect(()=>{
  //     if (localStorage.getItem("theme") === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //   document.documentElement.classList.add('dark')
  //   setIsLight(false)
  //     } else {
  //       document.documentElement.classList.remove('dark')
  //       setIsLight(true)
  //     }
  // }, [isLight])
  
  
{/* <div className="bg-white rounded-full p-2 space-x-5  flex dark:bg-slate-900">
<span className={`p-1 cursor-pointer ${isLight && selected}`} onClick={() => handleSwitch("light")}>
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 font-bold dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>
</span>
  <span className={`p-1 cursor-pointer ${!isLight && selected}`} onClick={() => handleSwitch("dark")}>
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>
</span>
</div> */}


