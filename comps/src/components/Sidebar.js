import React from 'react'
import Link from './Link'

function sideBar() {
  const links = [
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' },
  ]
  const renderedLinks = links.map((link) => {
    return (
      <Link key={link.label} to={link.path}>
        {link.label}
      </Link>
    )
  })

  return (
    <div className='sticky top-0 overflow-y-auto flex flex-col'>
      {renderedLinks}
    </div>
  )
}

export default sideBar
