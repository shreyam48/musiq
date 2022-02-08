import React from 'react'
import musiqLogo from '../../../Images/musiqLogo.png'
import { BiSearchAlt } from 'react-icons/bi'
import './Topbar.css'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <>
      <div class='main'>
        <div class="form-group has-search">
          <span class="form-control-feedback">
            <BiSearchAlt />
          </span>
          <input type="text" class="form-control" placeholder="Search" />
        </div>
        <Link to="/"><img src={musiqLogo} alt='website logo' class='img-fluid, img' /></Link>
      </div>
    </>
  )
}
export default Topbar