import React,{useState,useEffect} from 'react'

const Right = ({items}) => {
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
    <div className='right_buy'>
      <img src='https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png' alt='amazon logo'/>
     <div className='cost_right'>
        <p>Your order is eligible</p> <br/>
        <span style={{color:"#565959"}}>Select this option at checkout. Details</span>
        <h3>SubTotal ({items.length} items): <span style={{fontWeight:700}}>${price}</span></h3>
        <button className='rightbuy_btn'>Proccess to Buy</button>
        <div className='emi'>
            EMI available
        </div>
     </div>
    </div>
  )
}

export default Right
