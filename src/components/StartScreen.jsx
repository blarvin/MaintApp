import React, { useState } from "react";
import styled from "styled-components";

const AssetCard = ({ asset }) => {
  return (
    <AssetCardContainer>
      <AssetName>{asset.name}</AssetName>
      <AssetSpecs>
        {asset.specs.map((spec, index) => (
          <AssetSpecItem key={index}>{spec}</AssetSpecItem>
        ))}
      </AssetSpecs>
    </AssetCardContainer>
  );
};

const AddNewAsset = ({ onClick }) => {
  return <AddAssetButton onClick={onClick}>+ New Asset</AddAssetButton>;
};

const StartScreen = () => {
  const [assets, setAssets] = useState([
    { name: "Placeholder Asset", specs: ["Spec 1", "Spec 2", "Spec 3"] },
  ]);

  const addNewAsset = () => {
    const newAsset = {
      name: "New Asset",
      specs: ["Spec A", "Spec B", "Spec C"],
    };
    setAssets([...assets, newAsset]);
  };

  return (
    <StartScreenContainer>
      <Content>
        <Header>
          <Title>My Company</Title>
          <Subtitle>Maintenance App</Subtitle>
        </Header>

        {assets.map((asset, index) => (
          <AssetCard key={index} asset={asset} />
        ))}

        <AddNewAsset onClick={addNewAsset} />
      </Content>
    </StartScreenContainer>
  );
};

const AssetCardContainer = styled.div`
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

const AssetName = styled.div`
  font-weight: bold;
`;

const AssetSpecs = styled.ul`
  max-width: 400px;
`;

const AssetSpecItem = styled.li`
  max-width: 400px;
`;

const AddAssetButton = styled.button`
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

const StartScreenContainer = styled.div`
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

export default StartScreen;
