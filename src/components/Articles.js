import React, {useContext} from 'react'

import Article from "./Article"
import { ArticleContext } from "../context/articleContext";

const Articles = () => {
    const { articles } = useContext(ArticleContext)

    return (
        <div className="row m-5">
            {articles.map(article => (
                <Article key={article.id} article={article} />
            ))}
        </div>
    )
}

export default Articles