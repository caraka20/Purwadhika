import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar border w-[20%] border-black h-screen bg-slate-200">
    {/* pembungkus dalam profil */}
    <div className="grid p-10">
      {/* profil poto */}
      <div className="bungkusProfil grid justify-center">
        <div className=" bg-gray-300 rounded-full dark:bg-gray-600">
          <svg
            className=" w-60 h-60 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
    {/* tutup pembungkus profil */}

    {/* list side bar */}
    <div>
      <div className="grid">
        <div className="border border-r-0 border-black p-5 font-semibold text-2xl">
          Account
        </div>
        <div className="border border-r-0 border-black p-5 font-semibold text-2xl">
          <Link to={"/admin/inputData"}>Input Data</Link>
        </div>
        <div className="border border-r-0 border-black p-5 font-semibold text-2xl">
          <Link to={"/admin/listHotel"}>Hotel List</Link>
        </div>
        <div className="border border-r-0 border-black p-5 font-semibold text-2xl">
          Apapun Itu
        </div>
      </div>
    </div>
    {/* tutup list sidebar */}
  </div>
  )
}

export default Sidebar
