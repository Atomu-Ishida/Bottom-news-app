import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

function HomeNews() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    const api = await fetch(
      `https://mighty-eyrie-27436.herokuapp.com/https://newsapi.org/v2/top-headlines?country=jp&pageSize=100&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json();

    localStorage.setItem('Article', JSON.stringify(data.articles));
    setArticle(data.articles);
  };

  return (
    <div>
      <Wrapper>
        <h3>日本のボトムニュース</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: true,
            pagination: false,
            drag: 'free',
            gap: '5rem',
          }}
        >
          {article
            .slice()
            .reverse()
            .map((article) => {
              {
                return (
                  <SplideSlide key={article.title}>
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
                        <p>{article.title}</p>
                        <img src={article.urlToImage} alt={article.title} />
                        <Gradient />
                      </Link>
                    </Card>
                  </SplideSlide>
                );
              }
            })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 7rem 0rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  min-height: 18rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 0.3rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default HomeNews;
