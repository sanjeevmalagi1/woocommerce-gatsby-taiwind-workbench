import React from "react"

const WcProduct = props => {
  const { pageContext } = props;

  const {
    // id,
    name,
    description,
    sale_price,
    price,
  } = pageContext;

  return (
    <>
      <h1>{name}</h1>
      <div>Price: <del>{price}</del> {sale_price} </div>
      <div dangerouslySetInnerHTML={{ __html: description}}></div>
    </>
  )
}

export default WcProduct
