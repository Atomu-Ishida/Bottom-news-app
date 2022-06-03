import React from 'react';
import { FcSportsMode, FcBusinessContact } from 'react-icons/fc';
import { MdOutlineScience } from 'react-icons/md';
import { RiMentalHealthLine } from 'react-icons/ri';
import { FaRobot } from 'react-icons/fa';
import { TiGroup } from 'react-icons/ti';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <List>
      <SLink to='/Bottom-news-app/category/sports'>
        <FcSportsMode />
        <h4>Sports</h4>
      </SLink>

      <SLink to='/Bottom-news-app/category/business'>
        <FcBusinessContact />
        <h4>Business</h4>
      </SLink>

      <SLink to='/Bottom-news-app/category/science'>
        <MdOutlineScience />
        <h4>Science</h4>
      </SLink>

      <SLink to='/Bottom-news-app/category/health'>
        <RiMentalHealthLine />
        <h4>Health</h4>
      </SLink>

      <SLink to='/Bottom-news-app/category/entertainment'>
        <TiGroup />
        <h4>Entertainment</h4>
      </SLink>

      <SLink to='/Bottom-news-app/category/technology'>
        <FaRobot />
        <h4>Technology</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0rem;
  margin-bottom: 4rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-align: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 7rem;
  height: 7rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.7rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Category;
