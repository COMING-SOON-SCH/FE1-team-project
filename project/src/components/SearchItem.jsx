import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 260px;
  height: 160px;
  object-fit: cover;
  background-color: #fff;
  margin-top: 20px;
`;

const InfoContainer = styled.div`
  margin-top: 10px;
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ClubInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 260px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const ClubName = styled.div`
  font-size: 16px;
  margin-left: 5px;
`;

const Category = styled.div`
  font-size: 12px;
  margin-left: 5px;
  color: #666;
`;

const Description = styled.div`
  font-size: 18px;
  margin-top: 5px;
  margin-left: 5px;
`;

const SearchItem = ({ image, clubName, category, description }) => (
  <ItemContainer>
    <Image src={image} alt="이미지" />
    <InfoContainer>
      <ClubInfoContainer>
        <ClubName>{clubName}</ClubName>
        <Category>{category}</Category>
      </ClubInfoContainer>
      <Description>{description}</Description>
    </InfoContainer>
  </ItemContainer>
);

export default SearchItem;