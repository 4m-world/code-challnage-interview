import React from 'react'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faHeadphonesAlt,
  faHeart,
  faPlayCircle,
  faSearch,
  faStream
} from '@fortawesome/free-solid-svg-icons'

import './_sidebar.scss'

function renderSideBarOption(link, icon, text, {selected} = {}) {
  return (
    <div
    className={cx('sidebar__option', { 'sidebar__option--selected': selected })}
  >
    <FontAwesomeIcon icon={icon} />
    <p>{text}</p>
  </div> 
  )
}

const SideBar = ()=> (
  <div className="sidebar">
  <div className="sidebar__profile">
    <FontAwesomeIcon icon={faUserCircle} width={40} />
    <p>Hi Candidate</p>
  </div>
  <div className="sidebar__options">
    {renderSideBarOption('/', faHeadphonesAlt, 'Discover', { selected: true })}
    {renderSideBarOption('/search', faSearch, 'Search')}
    {renderSideBarOption('/favourites', faHeart, 'Favourites')}
    {renderSideBarOption('/playlists', faPlayCircle, 'Playlists')}
    {renderSideBarOption('/charts', faStream, 'Charts')}
  </div>
</div>
)

export default SideBar