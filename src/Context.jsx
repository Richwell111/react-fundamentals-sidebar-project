import { createContext,useState,useContext, Children } from "react";

const AppContext = createContext()

export const AppProvider = ({children}) =>{

    const [isSidebarOpen,setIsSidebarOPen] = useState(false)

    const [isModalOpen,setIsModalOpen] = useState(false)
     const openSidebar = ()=>{
        setIsSidebarOPen(true)
     }

     const closeSidebar =()=>{
        setIsSidebarOPen(false)
     }
     const openModal = ()=>{
        setIsModalOpen(true)
     }

     const closeModal =()=>{
        setIsModalOpen(false)
     }

    return <AppContext.Provider value={
        {
            isModalOpen,isSidebarOpen,openModal,closeModal,closeSidebar,openSidebar
        }
    }>{children}</AppContext.Provider>
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}