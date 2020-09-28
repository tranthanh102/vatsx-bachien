import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'
import { HotlineIcon, MapMarkerIcon,  BctIcon, FacebookIcon, InstagramIcon, PinterestIcon, YoutubeIcon, ZaloIcon, CashIcon, AtmIcon, VisaIcon, MomoIcon, ZalopayIcon } from 'components/icons/icons'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrap section-wrap d-flex flex-wrap">
        <div className="footer-item col-lg-3 col-sm-6 col-12">
          <h4 className="title-group">Công ty</h4>
          <ul>
            <li><Link to="/">Giới thiệu</Link></li>
            <li><Link to="/">Tuyển dụng</Link></li>
          </ul>
        </div>

        <div className="footer-item col-lg-3 col-sm-6 col-12">
          <h4 className="title-group">Chính sách</h4>
          <ul>
            <li><Link to="/">Chính sách bảo mật</Link></li>
            <li><Link to="/">Ưu đãi khách hàng thân thiết</Link></li>
            <li><Link to="/">Chính sách bảo hành trọn đời</Link></li>
            <li><Link to="/">Chính sách giao nhận</Link></li>
            <li><Link to="/">Chính sách đổi sản phẩm</Link></li>
          </ul>
        </div>

        <div className="footer-item col-lg-3 col-sm-6 col-12">
          <h4 className="title-group">Hỗ trợ khách hàng</h4>
          <ul>
            <li><Link to="/">Hướng dẫn mua hàng</Link></li>
            <li><Link to="/">Tra cứu bảo hành</Link></li>
            <li><Link to="/">Quy định về phiếu quà tặng</Link></li>
            <li><Link to="/">Điều khoản sử dụng</Link></li>
          </ul>
        </div>

        <div className="footer-item col-lg-3 col-sm-6 col-12">
          <h4 className="title-group">Kết nối Vascara</h4>
          <ul className="d-flex align-items-center">
            <li><Link to="/"><FacebookIcon /></Link></li>
            <li><Link to="/"><InstagramIcon /></Link></li>
            <li><Link to="/"><PinterestIcon /></Link></li>
            <li><Link to="/"><YoutubeIcon /></Link></li>
            <li><Link to="/"><ZaloIcon /></Link></li>
          </ul>

          <h4 className="title-group">Phương thức thanh toán</h4>
          <ul className="d-flex align-items-center">
            <li><Link to="/"><CashIcon /></Link></li>
            <li><Link to="/"><AtmIcon /></Link></li>
            <li><Link to="/"><VisaIcon /></Link></li>
            <li><Link to="/"><MomoIcon /></Link></li>
            <li><Link to="/"><ZalopayIcon /></Link></li>
          </ul>
        </div>

        <div className="footer-item col-12 d-flex align-items-center flex-wrap">
          <div className="col-lg-6 col-12">
            <BctIcon />
          </div>
          <div className="col-lg-6 col-12 d-flex align-items-center flex-wrap">
            <div className="col-sm-6 col-12 d-flex align-items-center">
              <MapMarkerIcon />
              <Link to="/">Xem vị trí cửa hàng</Link>
            </div>
            <div className="col-sm-6 col-12 d-flex align-items-center">
              <HotlineIcon className="hot-line-icon" />
              <Link to="/">1800 6909 <span>(miễn phí, 9h - 22h)</span></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <p>Công ty TNHH MTV Global Fashion. Văn phòng: Lầu 4 tòa nhà ACM số 96 Cao Thắng phường 04 quận 03 TP Hồ Chí Minh.</p>
        <p>GP số 0314657558 do sở KHĐT Tp Hồ Chí Minh cấp lần đầu ngày 05/10/2017</p>
      </div>
    </div>
  )
}
