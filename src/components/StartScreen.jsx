import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ItemCard from './ItemCard';
import CreateNewSibling from './CreateNewSibling';

const ItemList = () => {
  const [listitems, setListItems] = useState([]);

  const addNewSibling = (newItem) => {
    const newListItems = [...listitems, newItem];
    setListItems(newListItems);
  };

  useEffect(() => {
  
    const fetchData = async () => {
        // Define the base URL depending on the environment
        const baseUrl = process.env.NODE_ENV === 'development'
        ? 'http://localhost:9999/.netlify/functions'
        : '/.netlify/functions';
      try {
        const response = await fetch(`${baseUrl}/data_service`);
        const data = await response.json();
        // Get the name field value for the ItemCard components
        const transformedData = data.map(item => ({
          ...item,
          name: item.name
          .replace(/[^a-zA-Z0-9]/g, " ")
          .replace(/ +(?= )/g, "")
          .trim()
        }));
        setListItems(transformedData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ItemListContainer>
      <Content>
        <Header>
          <Title>My Company</Title>
          <Subtitle>Maintenance App</Subtitle>
        </Header>

        {listitems.map((listitem, index) => (
          <ItemCard key={index} listitem={listitem} />
        ))}

        <CreateNewSibling onClick={addNewSibling} />
      </Content>
    </ItemListContainer>
  );
};

const ItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  min-width: 0px;
  height: 100vh;
  margin: 0 auto;
`;

const Content = styled.div`
  width: 100%;
  max-width: 400px;
  min-width: 0px;
`;

const Header = styled.div`
  margin-bottom: 1rem;
  text-align: center;
  max-width: 400px;
  min-width: 0px;
`;

const Title = styled.h1`
  max-width: 400px;
`;

const Subtitle = styled.p`
  max-width: 400px;
`;

export default ItemList;
