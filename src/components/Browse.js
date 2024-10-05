import React from 'react'
import Header from './Header';
import BrowseBody from './BrowseBody';
import HeadearUserDropDownMenu from './HeadearUserDropDownMenu';

const Browse = () => {
  return (
    <div className='relative'>
      <Header/>
      <div className='absolute right-4 top-[4.2rem]'>
      <HeadearUserDropDownMenu />
      </div>
      <BrowseBody/>
      </div>
  )
}

export default Browse;