import React from "react";
import styled from "styled-components";

const ItemCard = ({ listitem }) => {
    return (
      <ItemCardContainer>
        <ItemName>{listitem.name}</ItemName>
        {/* <ItemSpecs>
          {listitem.specs.map((spec, index) => (
            <ItemSpec key={index}>{spec}</ItemSpec>
          ))}
        </ItemSpecs> */}
      </ItemCardContainer>
    );
};



const ItemCardContainer = styled.div`
    background-color: #e6f2ff;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
    max-width: 400px;
    min-width: 0px;
    text-align: left;
`;

const ItemName = styled.div`
  font-weight: bold;
`;

// const ItemSpecs = styled.ul`
//   max-width: 400px;
// `;

// const ItemSpec = styled.li`
//   max-width: 400px;
// `;

export default ItemCard;