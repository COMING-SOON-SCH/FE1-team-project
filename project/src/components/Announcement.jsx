import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Popup from "./Popup";

export default function Announcement() {
  const [data, setdata] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedData, setSelectedData] = useState(null)

  useEffect(() => {
    setdata([
      {
        title: '사용 안내',
        time: '2023-07-04',
        detail: `
          다음은 사용 안내입니다. \n
          만약 당신이 동아리장이라면? \n
          1. 동아리 제작 \n
          2. 동아리 프로필 꾸미기 \n
          3. 동아리 홍보글 작성 \n
          만약 당신이 동아리 부원이라면? \n
          1. 동아리 가입 \n
          2. 동아리 스케쥴 확인
        `
      },
      {
        title: '금지 행동 목록',
        time: '2023-06-26',
        detail: `
          1. 욕설 금지 \n
          2. 성적인 단어 금지 \n
          3. 패드립 금지 \n
          4. 마녀사냥 금지 \n
        `
      },
      {
        title: '안녕하세요. 운영진입니다.',
        time: '2023-05-12',
        detail: `
          이 웹 페이지를 사용하러 오신 분들 모두 환영합니다.\n
          공지사항을 잘 따라주시고, 잘 활용해주시길 바랍니다.
        `
      }
    ]);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  }

  const onClick = (data) => {
    setShowPopup(true)
    setSelectedData(data);
  }

  return (
    <AnnouncementContainer>
      <AnnouncementTitle>공지사항</AnnouncementTitle>
      {data.map((data, index) => (
        <AnnouncementItem key={index} onClick={() => { onClick(data) }}>
          <ItemTitle>{data.title}</ItemTitle>
          <ItemTime>{data.time}</ItemTime>
        </AnnouncementItem>
      ))}
      {showPopup && (
        <Popup closePopup={closePopup} data={selectedData} />
      )}
    </AnnouncementContainer>
  );
}

const AnnouncementContainer = styled.div`
  border-radius: 30px;
  background-color: white;
  width: 90%;
  height: 400px;
  margin-top: 10%;
  margin-left: 5%;
`;

const AnnouncementTitle = styled.h2`
  margin-left: 5%;
  padding-top: 10px;
`;

const AnnouncementItem = styled.div`
  margin-top: 30px;
  background-color: gray;
  width: 90%;
  height: 80px;
  margin-left: 5%;
`;

const ItemTitle = styled.h3`
  margin-bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
  padding-top: 10px;
  padding-left: 3%;
  height: 40%;
`;

const ItemTime = styled.p`
  padding-left: 3%;
  margin-top: 0;
`;