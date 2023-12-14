import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import '../Main/Main.scss';

import { Outlet } from 'react-router-dom';
const Main = () => {
  return (
    <>
      <div className="main_block">
        <div className="sidebar_section">
          <Sidebar></Sidebar>
        </div>
        <div className="main_section">
          <div className="">
            <Header></Header>
          </div>
          <div className="dashboard_main_content">
            <Outlet />
          </div>
          {/* <div className="footer">
            <Footer></Footer>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Main
