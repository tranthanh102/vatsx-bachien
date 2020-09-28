import React, { useState, useEffect } from 'react'
import './header.scss'
import { Link } from "react-router-dom"
import classNames from 'classnames'

import Logo from 'assets/images/logo.png'
import User from 'assets/images/user.png'
import { SearchIcon, CartIcon, CaretDownIcon, BarsIcon, CloseIcon, PlusIcon } from 'components/icons/icons'

export const Header = () => {
  const [visibleMenu, setvisibleMenu] = useState(false)

  const toggleMenu = () => {
    setvisibleMenu(!visibleMenu)
  }

  useEffect(() => {
    const listMenu = document.querySelector('.list-menu')
    window.addEventListener('scroll', () => {
      if (window.scrollY > 125) {
        listMenu?.classList.add('active')
      } else {
        listMenu?.classList.remove('active')
      }
    })
  }, [])

  return (
    <div className="header">
      <div className="header-wrap section-wrap d-flex align-items-center justify-content-between">
        <div className="header-logo">
          <div className="header-nav-btn" onClick={toggleMenu}>
            <BarsIcon />
          </div>
          <Link to="/">
            <img src={Logo} alt=""/>
          </Link>
        </div>
        <div className="header-location">
          <p>Chọn kho giao hàng</p>
          <div className="location d-flex align-items-center justify-content-between">
            <span>Hà Nội</span>
            <CaretDownIcon />
          </div>
        </div>
        <div className="header-search d-flex align-items-center">
          <SearchIcon />
          <input type="text" placeholder="Tìm kiếm" />
        </div>
        <div className="header-authen">
          <Link to="/">Đăng ký</Link>
          <span>/</span>
          <Link to="/">Đăng nhập</Link>
        </div>
        <div className="header-cart d-flex align-items-end">
          <div className="search-mobile">
            <SearchIcon />
          </div>
          <CartIcon />
          <span>(0)</span>
        </div>
      </div>
      <div className="header-wrap list-menu">
        <ul className="section-wrap d-flex align-items-center justify-content-between">
          <li><Link to="/">Giày</Link></li>
          <li><Link to="/">Túi Xách</Link></li>
          <li><Link to="/">Balo</Link></li>
          <li><Link to="/">Ví Bóp</Link></li>
          <li><Link to="/">Dép & Guốc</Link></li>
          <li><Link to="/">Phụ Kiện</Link></li>
          <li><Link to="/">Giftcard</Link></li>
          <li><Link to="/">Sale Off</Link></li>
          <li><Link to="/">New arrival</Link></li>
          <li><Link to="/">Summer Kisses</Link></li>
          <li><Link to="/">Tin Tức</Link></li>
        </ul>
      </div>
      <div className={classNames('nav-menu-mobile', { 'active': visibleMenu })} >
        <div className="nav-menu-overlay" onClick={toggleMenu} ></div>
        <div className="nav-menu-main">
          <div className="nav-close" onClick={toggleMenu}>
            <CloseIcon />
          </div>
          <div className="nav-user">
            <img src={User} alt=""/>
          </div>
          <ul>
            <li>
              <Link to="/">Giày</Link>
              <PlusIcon />
            </li>
            <li>
              <Link to="/">Túi Xách</Link>
              <PlusIcon />
            </li>
            <li><Link to="/">Balo</Link></li>
            <li>
              <Link to="/">Ví Bóp</Link>
              <PlusIcon />
            </li>
            <li><Link to="/">Dép & Guốc</Link></li>
            <li>
              <Link to="/">Phụ Kiện</Link>
              <PlusIcon />
            </li>
            <li><Link to="/">Giftcard</Link></li>
            <li><Link to="/">Sale Off</Link></li>
            <li><Link to="/">New arrival</Link></li>
            <li><Link to="/">Summer Kisses</Link></li>
            <li>
              <Link to="/">Tin Tức</Link>
              <PlusIcon />
            </li>
          </ul>
          <div className="line"></div>
          <ul>
            <li><Link to="/">Đăng ký</Link></li>
            <li><Link to="/">Đăng nhập</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
