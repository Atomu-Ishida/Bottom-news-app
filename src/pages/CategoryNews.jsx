import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

function CategoryNews() {
  const [categoryNews, setCategoryNews] = useState([]);
  let params = useParams();

  const getCategoryNews = async (name) => {
    const api = await fetch(
      `https://mighty-eyrie-27436.herokuapp.com/https://newsapi.org/v2/top-headlines?country=jp&category=${name}&pageSize=100&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json();

    setCategoryNews(data.articles);
  };

  useEffect(() => {
    getCategoryNews(params.type);
  }, [params.type]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {categoryNews
        .slice()
        .reverse()
        .map((article) => {
          return (
            <Card>
              <Link
                to={'/about'}
                state={{
                  description: article.description,
                  image: article.urlToImage,
                  url: article.url,
                  title: article.title,
                }}
              >
                <img src={article.urlToImage} alt={article.title} />
                <h4>{article.title}</h4>
              </Link>
            </Card>
          );
        })}
    </Grid>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled(motion.div)`
  img {
    width: 10rem;
    height: 10rem;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
    font-size: 0.7rem;
  }
`;

export default CategoryNews;
