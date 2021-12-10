import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/router'

function Navbar() {
    const {push, pathname, locale} = useRouter();
    const handleChange = e => {
        locale === e.target.value ? 0 : push(pathname, pathname, {locale: e.target.value}) 
        
    }
    return (
        <div className=" w-screen h-24 flex flex-row  place-items-center absolute z-50 justify-center">
            <svg className="absolute left-0 z-10 scale-125" width="196" height="183" viewBox="0 0 196 183" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                <path d="M-3.18484 152.732C-36.3343 147.583 -71.1604 127.714 -97.3075 101.121C-123.465 74.5175 -140.784 41.3473 -139.214 9.68423C-136.063 -53.8578 -74.8234 -124.897 22.1285 -118.739C50.8427 -116.915 88.4548 -108.164 119.079 -86.0498C149.656 -63.9688 173.327 -28.5262 174.197 26.8728C174.988 77.3709 147.335 111.377 111.096 131.518C74.8151 151.681 30.0081 157.888 -3.18484 152.732Z" stroke="#96AEC2" strokeWidth="2"/>
                <path d="M-81.1945 14.8145C-81.5972 -18.73 -67.7587 -56.3618 -45.8547 -86.5457C-23.9418 -116.742 5.90864 -139.306 37.3956 -142.992C100.584 -150.39 180.77 -101.738 190.726 -5.10213C193.674 23.5185 191.262 62.0596 174.515 95.9182C157.793 129.725 126.752 158.931 72.259 168.947C22.5867 178.076 -15.5237 156.426 -41.3783 124.015C-67.2625 91.5673 -80.7912 48.403 -81.1945 14.8145Z" stroke="#BBCFDF" strokeWidth="2"/>
                <path d="M152.215 -23.1956C152.215 10.3512 137.926 47.8142 115.661 77.7329C93.3872 107.664 63.268 129.868 31.7391 133.176C-31.5337 139.815 -111.13 90.2036 -119.925 -6.54483C-122.529 -35.1988 -119.655 -73.7082 -102.502 -107.363C-85.3759 -140.967 -53.9863 -169.798 0.622986 -179.159C50.4013 -187.692 88.249 -165.585 113.713 -132.866C139.205 -100.11 152.215 -56.7866 152.215 -23.1956Z" stroke="#457496" strokeWidth="2"/>
                <path d="M-19.2489 170.943C-52.7222 173.164 -91.049 161.386 -122.376 141.151C-153.716 120.907 -177.865 92.3237 -183.253 61.083C-194.065 -1.61155 -149.832 -84.3176 -53.878 -99.4971C-25.4593 -103.993 13.1558 -103.674 47.8725 -88.7871C82.5367 -73.9226 113.382 -44.5103 126.338 9.35949C138.146 58.4638 118.594 97.6919 87.6324 125.266C56.6357 152.871 14.2683 168.72 -19.2489 170.943Z" stroke="#66839E" strokeWidth="2"/>
                </g>
            </svg>
            

            <Image className="" src="/victorialogo.png" width="201" height="121" alt="" />
            

            <select className="font-text bg-bd text-white uppercase p-1 absolute right-4 sm:right-20" onChange={handleChange} >
                
                <option value="es" disabled selected>LNG</option>
                <option value="es">ES</option>
                <option value="en">EN</option>
            </select>
        

        </div>
    )
}

export default Navbar
