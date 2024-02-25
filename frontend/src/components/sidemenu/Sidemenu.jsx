/* eslint-disable react/prop-types */
import ThemeBtn from "../themebtn/ThemeBtn"
import { NavLink } from 'react-router-dom'
import closemenu from '../../assets/menuclose.svg'

function Sidemenu( {isOpen,toggleMenu} ) {

	return (

		<div id="sidemenu" className={`${isOpen ? 'openmenu' : 'closemenu'} flex flex-col items-center md:basis-1/4 sm:basis-2/4 sm:static fixed left-0  h-full overflow-hidden text-black  dark:text-gray-400 bg-white dark:bg-gray-900 rounded border-r-gray-700 border-r-2 p-4 z-20`}>
			<img src={closemenu} onClick={toggleMenu} className="absolute top-4 left-4 cursor-pointer sm:hidden block dark:invert" />
			<ThemeBtn />
			<NavLink className="flex items-center w-full px-3 mt-3" >
				<svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
				</svg>
				<span className="ml-2 text-sm font-bold">MO GALLERY</span>
			</NavLink>
			<div className="w-full px-2">
				<div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
					<NavLink to="/" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" >
						<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
						</svg>
						<span className="ml-2 text-sm font-medium">Gallery</span>
					</NavLink>
				
					<NavLink to="/upload" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" >
						<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
						</svg>
						<span className="ml-2 text-sm font-medium">Upload Image</span>
					</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Sidemenu