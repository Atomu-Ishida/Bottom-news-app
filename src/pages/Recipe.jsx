import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instruments');

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  const fetchDetails = async () => {
    console.log(params);
    const api = await fetch(
      `https://newsapi.org/v2/top-headlines?q=${params.name}&apiKey=e50e9828adc84ce48154498bf3a02645`
    );
    const data = await api.json();
    console.log(data);
    setDetails(data);
  };
  return (
    <DetailWrapper>
      <DetailDiv>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </DetailDiv>
      <Info>
        <Button
          className={activeTab === 'instruments' ? 'active' : ''}
          onClick={() => setActiveTab('instruments')}
        >
          Instruments
        </Button>
        <Button
          className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </Button>
        {activeTab === 'instruments' && (
          <div>
            <h4 dangerouslySetInnerHTML={{ __html: details.summary }}></h4>
            <h4 dangerouslySetInnerHTML={{ __html: details.instructions }}></h4>
          </div>
        )}

        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 20px;
    line-height: 1.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const DetailDiv = styled.div`
  img {
    width: 25rem;
    height: 22rem;
  }
  h2 {
    font-size: 20px;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 5rem;
`;

export default Recipe;
