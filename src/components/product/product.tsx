import React from 'react'
import './product.scss'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

type Props = {
  image: string,
  price: number,
  sale: number,
  title: string,
  status: {
    type: string,
    content: string,
  },
  className?: string,
}

export const Product = ({ image, price, sale,  title, status, className }: Props) => {
  return (
    <Link to="/product-detail" className={classNames('product', className)}>
      <div className="product-image">
        <img src={image} alt=""/>
      </div>
      <div className="product-price d-flex">
        <p className="price">{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₫</p>
        {sale !== 0 && <div className="price del">{sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₫</div>}
        
      </div>
      <h2 className="product-title">{title}</h2>
      {status.type !== '' && status.type === 'new' ? <div className="price-status">{status.content}</div> : status.type !== '' && <div className="price-status active">{status.content}</div>}
    </Link>
  )
}
