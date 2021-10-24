import React from 'react'
import { Header, Player, SideBar } from '../components'

const MainLayout = ({ children, history }) => (
  <div className="main">
    <SideBar />
    <div className="main__content">
      <Header history={history} />
      <div className="main__content__child">
        {children}
      </div>
    </div>
    <Player />
  </div>
)

export default MainLayout
