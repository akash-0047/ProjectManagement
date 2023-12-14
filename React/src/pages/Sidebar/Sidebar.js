import React from 'react'
import { Link } from 'react-router-dom';
import sidebarlog from '../../assets/img/logo.svg';
import Dashboard from '../../assets/img/Dashboard.svg';
import DashboardActive from '../../assets/img/Dashboard-active.svg';
import ProjectList from '../../assets/img/Project-list.svg';
import ProjectListActive from '../../assets/img/Project-list-active.svg';
import CreateProject from '../../assets/img/create-project.svg';
import CreateProjectActive from '../../assets/img/create-project-active.svg';
import LogOut from '../../assets/img/Logout.svg';
import '../Sidebar/Sidebar.scss';

const Sidebar = () => {
  return (
    <>
      <div className='sidebar_main'>
        <div className='offcanvas offcanvas-start' tab-index="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          {/* <div className='offcanvas_header'>
            <div className='header_logo'>
              <img src={sidebarlog} alt='logo' />
              <span className='logo_txt'>logo</span>
            </div>
          </div> */}

          <div className='offcanvas-body'>
            <div className='inner_sidebar'>

              <div className='menu_list' id="sidebar">
                <ul className="menu_list_main">
                  <li className='nav-item'>
                    <Link className="ato" href="/main/dashboard">
                      <div className='sidebar_icon'>
                        <img src={Dashboard} alt="Dashboard" />
                        {/* <img src={ DashboardActive } alt="Dashboard" /> */}
                      </div>
                      {/* <span>Dashboard </span> */}
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link className="ato" href="/prescription">
                      <div className='sidebar_icon'>
                        <img src={ProjectList} alt="Project List" />
                        {/* <img src={ ProjectListActive } alt="Project List" /> */}
                      </div>
                      {/* <span>Prescription </span> */}
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link className="ato" href="/chat">
                      <div className='sidebar_icon'>
                        <img src={CreateProject} alt="Create Project" />
                        {/* <img src={ CreateProjectActive } alt="Create Project" /> */}
                      </div>
                      {/* <span>Message </span> */}
                    </Link>
                  </li>


                </ul>
              </div>
              <div className='logout_wrap'>
                <ul>
                  <li className='nav-item'>
                    <Link className="ato" href="#">
                      <div className='sidebar_icon'>
                        <img src={LogOut} alt="Logout" />

                      </div>

                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
