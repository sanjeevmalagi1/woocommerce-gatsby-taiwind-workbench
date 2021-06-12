import React from "react"

const WcProduct = props => {
  const { pageContext } = props;
  // const {
  //   id,
  //   name,
  //   description,
  //   sale_price,
  //   price,
  // } = pageContext;

  return (
    <>
      <h1 className="text-4xl font-bold">Shop</h1>
      <div>
        This is shop front!
      </div>  
    </>
  )
}

export default WcProduct
