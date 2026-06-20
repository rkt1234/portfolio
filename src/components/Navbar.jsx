import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <ul className={`nav-links ${open ? 'nav-open' : ''}`}>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
        <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
        <li><a href="#work" onClick={() => setOpen(false)}>Work</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>
      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
        <span className={open ? 'bar bar-open' : 'bar'}></span>
        <span className={open ? 'bar bar-open' : 'bar'}></span>
      </button>
    </nav>
  )
}
