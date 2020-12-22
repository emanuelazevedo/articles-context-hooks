import React, {useState, useContext} from "react"
import "../styles/AddArticle.scss"

import {ArticleContext} from "../context/articleContext"

const AddArticle = () => {
    const { saveArticle } = useContext(ArticleContext)

    const [article, setArticle] = useState()

    const handleArticleData = e => {
        setArticle({
            ...article,
            [e.target.id]: e.target.value,
        })
    }

    const addNewArticle = e => {
        e.preventDefault();
        saveArticle(article);
        
    }

    return (
        <div className="row justify-content-center mt-5">
            <form onSubmit={addNewArticle} className="col-5 add-article">
                <input
                type="text"
                id="title"
                placeholder="Title"
                onChange={handleArticleData}
                className="col-12 mb-1"
                required
                />
                <textarea 
                type="text"
                id="body"
                placeholder="Body"
                onChange={handleArticleData}
                className="col-12"
                required
                />
                
                <button className="btn">Add article</button>
            </form>
        </div>
    )
}

export default AddArticle