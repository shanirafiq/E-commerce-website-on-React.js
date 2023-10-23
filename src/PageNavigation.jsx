import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({title}) => {
  return (
    <>
      <NavLink to="/">
        <ul className='bg-light  ps-5 d-flex justify-content-start align-items-center list-unstyled gap-2'>
            <li>Home</li>
            <li> / {title}</li>
        </ul>
      </NavLink>
    </>
  )
}

export default PageNavigation
