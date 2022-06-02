import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

function About() {
  const location = useLocation();
  const { description, image, url, title } = location.state;
  return (
    <>
      <ArticleTitle>{title}</ArticleTitle>
      <DetailWrapper>
        <DetailImage>
          <img src={image} alt={title}></img>
        </DetailImage>
        <DetailDiv>
          <p>{description}</p>
          <td onClick={() => window.open(url, '_blank')}>続きはこちら</td>
        </DetailDiv>
      </DetailWrapper>
    </>
  );
}

const ArticleTitle = styled.h2`
  margin-top: 3rem;
  text-align: center;
`;

const DetailWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
  display: flex;
`;

const DetailImage = styled.div`
  img {
    width: 28rem;
    height: 28rem;
  }
`;

const DetailDiv = styled.div`
  margin-left: 5rem;
  p {
    font-size: 1.2rem;
  }
  td {
    font-size: 1.2rem;
    text-decoration: underline;
  }
`;
export default About;
