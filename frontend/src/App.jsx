import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './context/Themecontext';
import Sidemenu from './components/sidemenu/Sidemenu';
import menuopen from './assets/menuopen.svg';

import { Outlet } from 'react-router-dom'


function App() {

  const [themeMode, setThemeMode] = useState("light");

  

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  





    return (
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        {/* <GalleryContext.Provider value={{ data }}> */}
          <div className='flex items-center justify-center w-screen dark:bg-gray-900 h-screen overflow-auto'>
            <img src={menuopen} alt="" className='absolute top-4 left-4 cursor-pointer' onClick={toggleMenu} aria-hidden='true'/>
            <Sidemenu isOpen={isOpen} toggleMenu={toggleMenu} />

            <Outlet/>
          </div>
        {/* </GalleryContext.Provider> */}
      </ThemeProvider>
    );
  }



export default App
