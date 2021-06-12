import React from "react"

const WpPost = props => {
  const { pageContext } = props;

  const {
    title,
    content,
  } = pageContext;

  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content}}></div>
    </>
  )
}

export default WpPost
