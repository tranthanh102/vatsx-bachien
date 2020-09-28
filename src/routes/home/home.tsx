import React from 'react'
import { connect } from 'react-redux'
import './home.scss'
import Gif from 'assets/images/banner-gif.gif'

import { CategorySection } from 'components/category-section/category-section'
import { HomepageCarousel } from 'components/homepage-carousel/homepage-carousel'
import mockupDataDiscount from 'data/mockupDataDiscount'
import mockupDataBestSeller from 'data/mockupDataBestSeller'
import mockupDataHot from 'data/mockupDataHot'

const Homepage = ({ mockupDataNewest }: any) => {
  console.log(mockupDataNewest);
  return (
    <div className="homepage">
      <HomepageCarousel />

      <div className="hot-trend section-wrap">
        <h2 className="title-block">Hot Trend 2020</h2>
        <img src={Gif} alt="" />
      </div>

      <CategorySection title="SẢN PHẨM MỚI NHẤT" link="/category/san-pham-moi-nhat" dataProduct={mockupDataNewest} />
      <CategorySection title="SẢN PHẨM KHUYẾN MÃI" link="/category/san-pham-khuyen-mai" dataProduct={mockupDataDiscount} isSlider={true} />
      <CategorySection title="SẢN PHẨM BÁN CHẠY" link="/category/san-pham-ban-chay" dataProduct={mockupDataBestSeller} isSlider={true} />
      <CategorySection title="SẢN PHẨM NỔI BẬT" link="/category/san-pham-noi-bat" dataProduct={mockupDataHot} isSlider={true} />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  mockupDataNewest: state.mockupDataCategory,
})

export default connect(mapStateToProps)(Homepage);