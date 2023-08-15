import React from 'react'

function HeaderLinks() {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4" id="header_links">
    <li className="nav-item">
      <a className="nav-link" href="#">Contact</a>
    </li>

    <li className="nav-item">
      <a className="nav-link" href="#">Discord</a>
    </li>

    <li className="nav-item">
      <a className="nav-link" href="#">Home</a>
    </li>

    <li className="nav-item">
      <a className="btn btn-dark" type="button" href="#">Create Ticket</a>
    </li>

  </ul>
  )
}

export default HeaderLinks