import React from 'react'
import { Container, Content } from './styles2'
import { FaDashcube, FaShoppingCart } from 'react-icons/fa';
import {
  FaTimes,
  FaHome,
  FaEnvelope,
  FaRegSun,
  FaUserAlt,
  FaIdCardAlt,
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <NavLink to="/dashboard">        <SidebarItem Icon={FaDashcube} Text="Dashboard" /></NavLink>

        <SidebarItem Icon={FaUserAlt} Text="Users" />
        <NavLink to="/taxlaws"> <SidebarItem Icon={FaEnvelope} Text="Tax Laws" /></NavLink>
        <NavLink to="/taxcalculator"> <SidebarItem Icon={FaRegFileAlt} Text="Tax Calc" /></NavLink>
        <NavLink to="/deduction"> <SidebarItem Icon={FaRegFileAlt} Text="Deduction&Exemption" /></NavLink>
        
      </Content>
    </Container>
  )
}

export default Sidebar