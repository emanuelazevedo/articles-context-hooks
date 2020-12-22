import React from "react"
// import "./Article.css"

const article = ({article}) => (
    <div className="col-12 mb-2 article">
        <h1 className="col-5">{article.title}</h1>
        <p className="col-5">{article.body} </p>
    </div>
)

export default article