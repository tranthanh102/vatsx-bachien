import React from 'react'
import './category-section.scss'

import AliceCarousel from 'react-alice-carousel'

import { Link } from 'react-router-dom'
import { Product } from 'components/product/product'
import { AngleRightIcon } from 'components/icons/icons'

type Props = {
  title: string,
  link: string,
  dataProduct: any,
  isSlider?: boolean | false,
}

type Product = {
  image: string,
  price: number,
  sale: number,
  title: string,
  status: {
    type: string,
    content: string,
  },
}

export const CategorySection = ({title, link, dataProduct, isSlider} : Props) => {
  return (
    <div className="category-section section-wrap align-items-center">
      <h2 className="title-block">{title}</h2>
      <Link className="see-all" to={link}>Xem tất cả  <AngleRightIcon /></Link>
      {isSlider ?
        <div className="category-carousel">
          <AliceCarousel
            mouseTrackingEnabled={false}
            touchTrackingEnabled={false}
            dotsDisabled
            responsive={{0: {items: 1}, 400: {items: 2}, 575: {items: 3}, 991: {items: 4}}}
          >
            {dataProduct.length !== 0 && dataProduct.map((item: Product) => 
              <Product key={item.image} image={item.image} price={item.price} sale={item.sale} title={item.title} status={item.status} />
            )}
          </AliceCarousel>
        </div> :

        <div className="category-main d-flex flex-wrap">
          {dataProduct.length !== 0 && dataProduct.map((item: Product) => 
            <Product className="col-lg-3 col-sm-4 col-6" key={item.image} image={item.image} price={item.price} sale={item.sale} title={item.title} status={item.status} />
          )}
        </div>
      }
    </div>
  )
}
