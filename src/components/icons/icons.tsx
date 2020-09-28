import React from 'react'

import iconAngleLeft from 'assets/icons/icon-angle-left.png'
import iconAngleRight from 'assets/icons/icon-angle-right.png'
import iconAtm from 'assets/icons/icon-atm.png'
import iconBct from 'assets/icons/icon-bct.png'
import iconCart from 'assets/icons/icon-cart.png'
import iconCash from 'assets/icons/icon-cash.png'
import iconClose from 'assets/icons/icon-close.png'
import iconFacebook from 'assets/icons/icon-facebook.png'
import iconHotline from 'assets/icons/icon-hotline.png'
import iconInstagram from 'assets/icons/icon-instagram.png'
import iconMapMarker from 'assets/icons/icon-map-marker.png'
import iconMomo from 'assets/icons/icon-momo.png'
import iconPinterest from 'assets/icons/icon-pinterest.png'
import iconSearch from 'assets/icons/icon-search.png'
import iconVisa from 'assets/icons/icon-visa.png'
import iconYoutube from 'assets/icons/icon-youtube.png'
import iconZalo from 'assets/icons/icon-zalo.png'
import iconZaloPay from 'assets/icons/icon-zalopay.png'
import iconCaretDown from 'assets/icons/icon-caret-down.svg'
import iconBars from 'assets/icons/icon-bars.svg'
import iconPlus from 'assets/icons/icon-plus.png'
import iconMinus from 'assets/icons/icon-minus.png'

import iconDelivery from 'assets/icons/icon-delivery.png'
import iconCall from 'assets/icons/icon-call.png'
import iconPayment from 'assets/icons/icon-payment.png'
import iconGuard from 'assets/icons/icon-guarantee.png'
import iconReturn from 'assets/icons/icon-return.png'


interface IconType {
  className?: string
  onClick?: any
}

export const DeliveryIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconDelivery} className={className} onClick={onClick} alt="" />
)
export const CallIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconCall} className={className} onClick={onClick} alt="" />
)
export const PaymentIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconPayment} className={className} onClick={onClick} alt="" />
)
export const GuardIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconGuard} className={className} onClick={onClick} alt="" />
)
export const ReturnIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconReturn} className={className} onClick={onClick} alt="" />
)
export const PlusIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconPlus} className={className} onClick={onClick} alt="" />
)
export const MinusIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconMinus} className={className} onClick={onClick} alt="" />
)
export const BarsIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconBars} className={className} onClick={onClick} alt="" />
)
export const CaretDownIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconCaretDown} className={className} onClick={onClick} alt="" />
)
export const AngleLeftIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconAngleLeft} className={className} onClick={onClick} alt="" />
)
export const AngleRightIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconAngleRight} className={className} onClick={onClick} alt="" />
)
export const AtmIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconAtm} className={className} onClick={onClick} alt="" />
)
export const BctIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconBct} className={className} onClick={onClick} alt="" />
)
export const CartIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconCart} className={className} onClick={onClick} alt="" />
)
export const CashIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconCash} className={className} onClick={onClick} alt="" />
)
export const CloseIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconClose} className={className} onClick={onClick} alt="" />
)
export const FacebookIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconFacebook} className={className} onClick={onClick} alt="" />
)
export const HotlineIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconHotline} className={className} onClick={onClick} alt="" />
)
export const InstagramIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconInstagram} className={className} onClick={onClick} alt="" />
)
export const MapMarkerIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconMapMarker} className={className} onClick={onClick} alt="" />
)
export const MomoIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconMomo} className={className} onClick={onClick} alt="" />
)
export const PinterestIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconPinterest} className={className} onClick={onClick} alt="" />
)
export const SearchIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconSearch} className={className} onClick={onClick} alt="" />
)
export const VisaIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconVisa} className={className} onClick={onClick} alt="" />
)
export const YoutubeIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconYoutube} className={className} onClick={onClick} alt="" />
)
export const ZaloIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconZalo} className={className} onClick={onClick} alt="" />
)
export const ZalopayIcon = ({ className, onClick }: IconType): React.ReactElement => (
  <img src={iconZaloPay} className={className} onClick={onClick} alt="" />
)
