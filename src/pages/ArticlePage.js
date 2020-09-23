import React from 'react';
import articleContent from './article-content';
import ArticleList from '../components/ArticleList.js';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ( {match} ) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    if(!article) return <NotFoundPage />

    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
    <>
        <h1>{article.title}</h1>
        {article.content.map((paraghraph, key) => (
            <p key={key}>{paraghraph}</p>
        ))}
        <h3>Other articles:</h3>
        <ArticleList articles={otherArticles}/>
    </>
)};

export default ArticlePage;