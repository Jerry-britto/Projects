import React, { useEffect, useState } from 'react'

const SubTotal = ({items}) => {
  const [price,setPrice]=useState(0)
  useEffect(()=>{
    totalAmount()
  },[items])
  const totalAmount = ()=>{
    let price = 0;
    items.forEach((ele)=>{
      price+=ele.price.cost
    })
    console.log(price)
    setPrice(price)
  }
  return (
    <div className='sub_item'>
      <h3>SubTotal ({items.length} items): <strong style={{fontWeight:700,color:"#111"}}>${price}</strong></h3>
    </div>
  )
}

export default SubTotal;
