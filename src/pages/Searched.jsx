import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  const getSearched = async (search) => {
    const api = await fetch(
      `https://mighty-eyrie-27436.herokuapp.com/https://newsapi.org/v2/top-headlines?country=jp&q=${search}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json();
    console.log(data);
    setSearchedRecipes(data.articles);
  };

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {searchedRecipes.length === 0 && (
        <p>
          記事が見つかりませんでした <br />
          別のワードで検索してください
        </p>
      )}
      {searchedRecipes
        .slice()
        .reverse()
        .map((article) => {
          return (
            <Card key={article.title}>
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

export default Searched;
