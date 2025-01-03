import Header from "./Header";
import Sidebar from "./Sidebar";
import React from 'react'

const DefaultLayout = ({children}) => {
  return (
    <div>
        <Header/>
        <div className="container">
            <Sidebar/>
            {children}
        </div>
    </div>
  )
}

export default DefaultLayout