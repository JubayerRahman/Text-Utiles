import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
// import App from '../App';


export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.modes}`}>
  <div className="container-fluid">
    <a className={`navbar-brand text-${props.modes==='dark'?'light':'dark'}`} href="/">{props.title}</a>
    <button className={`navbar-toggler bg-${props.modes}`} type="button" 
    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink to='/'>
          <a className={`nav-link text-${props.modes==='dark'?'light':'dark'}`} 
          aria-current="page" href="/">Home</a>
        </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to='/about'>
          <a className={`nav-link text-${props.modes==='dark'?'light':'dark'}`} href="/">
          {props.about}
            </a></NavLink>
        </li>
      </ul>
      <div className='modeButtons'>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <button className='orange' onClick={props.orangeMode}></button>
      </li>
      <li className="nav-item">
      <button className='green' onClick={props.greenMode}></button>
      </li>
      <li className="nav-item">
      <button className='pink' onClick={props.pinkMode}></button>
      </li>
      </ul>
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className={`form-check-label text-${props.modes==='dark'?'light':'dark'}`} 
        htmlFor="flexSwitchCheckDefault">{props.modes==='light'?'Enable Dark Mode':'Enable Light Mode'}</label>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.prototype ={ title: PropTypes.string, about:PropTypes.string }
Navbar.defaultProps ={ 
    title : "Ohee-TextUttils-App",
    about : "About Us"
}
