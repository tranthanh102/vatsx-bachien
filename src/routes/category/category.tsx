import React, { useEffect } from 'react'
import './category.scss'
import { CategorySection } from 'components/category-section/category-section'
import { Link } from 'react-router-dom'
import mockupDataDiscount from 'data/mockupDataDiscount'
import mockupDataBestSeller from 'data/mockupDataBestSeller'
import mockupDataHot from 'data/mockupDataHot'
import { connect } from 'react-redux'

type dataCategoryList = Array<{
  image: any,
  price: number,
  sale: number,
  title: string,
  status: { type: string, content: string; }
}>

type Props = {
  match: any,
  mockupDataNewest: dataCategoryList
}

const Category = ({ match, mockupDataNewest }: Props) => {
  const [dataCategory, setData] = React.useState<dataCategoryList>([])


  const currentCategory = match.params.category
  const banner = [
    require('assets/images/category-image-1.png'),
    require('assets/images/category-image-2.png'),
    require('assets/images/category-image-3.png'),
    require('assets/images/category-image-4.png')
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
    currentCategory === 'san-pham-moi-nhat' ? setData(mockupDataNewest) :
      currentCategory === 'san-pham-khuyen-mai' ? setData(mockupDataDiscount) :
        currentCategory === 'san-pham-ban-chay' ? setData(mockupDataBestSeller) :
          currentCategory === 'san-pham-noi-bat' ? setData(mockupDataHot) : setData(mockupDataNewest)
          /* return () => {
            console.log("component unmount")
          } */
  }, [])

  return (
    <div className="category">
      <div className="category-banner">
        {
          currentCategory === 'san-pham-moi-nhat' ? <img src={banner[0]} alt="" /> :
            currentCategory === 'san-pham-khuyen-mai' ? <img src={banner[1]} alt="" /> :
              currentCategory === 'san-pham-ban-chay' ? <img src={banner[2]} alt="" /> :
                currentCategory === 'san-pham-noi-bat' ? <img src={banner[3]} alt="" /> : ''
        }
      </div>

      <CategorySection title="SẢN PHẨM MỚI NHẤT" link="/" dataProduct={dataCategory} />

      <div className="category-footer d-flex justify-content-center">
        <Link className="see-more-category" to="/">Xem thêm các sản phẩm khác</Link>
      </div>
    </div>
  )
}


const mapStateToProps = (state: any) => ({
  mockupDataNewest: state.mockupDataCategory,
})

export default connect(mapStateToProps)(Category);
