import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Announcement() {
  const [announcement, setAnnouncement] = useState([]);

  useEffect(() => {
    setAnnouncement([
      {
        title: '사용 안내',
        time: '2023-07-04'
      },
      {
        title: '금지 행동 목록',
        time: '2023-06-26'
      },
      {
        title: '안녕하세요. 운영진입니다.',
        time: '2023-05-12'
      }
    ]);
  }, []);

  return (
    <AnnouncementContainer>
      <AnnouncementTitle>공지사항</AnnouncementTitle>
      {announcement.map((data, index) => (
        <AnnouncementItem key={index}>
          <ItemTitle>{data.title}</ItemTitle>
          <ItemTime>{data.time}</ItemTime>
        </AnnouncementItem>
      ))}
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
  padding-top: 3%;
`;

const AnnouncementItem = styled.div`
  margin-top: 5%;
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
  padding-top: 3%;
  padding-left: 3%;
  height: 40%;
`;

const ItemTime = styled.p`
  padding-left: 3%;
  margin-top: 0;
`;