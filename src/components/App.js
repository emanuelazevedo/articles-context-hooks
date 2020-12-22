import React from "react"
import "../styles/App.scss"

import Articles from "./Articles"
import AddArticle from "./AddArticle"
import ArticleProvider from "../context/articleContext"

export default function App() {
  return(
    <div className="container-fluid">
      <ArticleProvider>
        <AddArticle/>
        <Articles />
      </ArticleProvider>
    </div>
  )
}
