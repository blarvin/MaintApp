import React from "react";
import styled from "styled-components";

const CreateNewSibling = ({ onClick }) => {
    return (
      <AddSiblingButton onClick={() => onClick(PLACEHOLDER_ITEM)}>+ New Sibling</AddSiblingButton>
    );
};

const AddSiblingButton = styled.button`
  background-color: #e6f2ff;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  width: 100%;
  max-width: 400px;
  min-width: 0px;
  display: flex;
  flex-direction: column;
`;

const PLACEHOLDER_ITEM = {
    name: "Placeholder Item",
    specs: ["Placeholder Spec 1", "Placeholder Spec 2", "Placeholder Spec 3"]
};

export default CreateNewSibling;