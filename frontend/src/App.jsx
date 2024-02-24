import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './context/Themecontext';
import Sidemenu from './components/sidemenu/Sidemenu';

import { Outlet } from 'react-router-dom'


function App() {

  const [themeMode, setThemeMode] = useState("light");

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
            <Sidemenu />
            <Outlet/>
          </div>
        {/* </GalleryContext.Provider> */}
      </ThemeProvider>
    );
  }



export default App
