import React from 'react'
import Profile from "./Profile";
import { Outlet } from 'react-router-dom';
function Home() {
  return (
    <>
       <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 pt-5">
            <Profile />
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 pt-5">
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
