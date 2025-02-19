import React from 'react'
import { useGlobalContext } from './Context'
import { FaBars } from 'react-icons/fa'

export const Home = () => {
   const {openModal,openSidebar}= useGlobalContext()
  return (
    <main>
        <button onClick={openSidebar} className="sidebar-toggle">
            <FaBars/>
        </button>
        <button onClick={openModal} className="btn">
            show modal
        </button>
    </main>
  )
}
