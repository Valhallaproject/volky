import React from 'react'
import Menu1 from "./../../../assets/menu1.png"
import Menu2 from "./../../../assets/menu2.png"
import "./ProductImg.css"

function ProductImg() {
  return (
    <div className="productImg">
        <img src={Menu1} alt=""/>
        <img src={Menu2} alt=""/>
    </div>
  )
}

export default ProductImg