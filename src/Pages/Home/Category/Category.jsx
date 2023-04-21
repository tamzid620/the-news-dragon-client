import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import News from '../../News/News/News';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData()
    return (
        <div>
           {id && <h1>Here's our category: {categoryNews.length}</h1>}
            {
                categoryNews.map(news => <NewsCard
                key={news._id}
                news ={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;