import { useEffect, useState } from "react"

export default function Announcement() {
  const [announcement, setAnnouncement] = useState([]);

  useEffect(() => {
    setAnnouncement(
      [
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
      ]
    )
  }, [])

  return (
    <div style={announcementStyle}>
      <h2 style={{ marginLeft: '5%', paddingTop: '3%' }}>공지사항</h2>
      {
        announcement.map((data) => {
          return (
            <div style={{ marginTop: '5%', backgroundColor: 'gray', width: '90%', height: '20%', marginLeft: '5%' }}>
              <h3 style={titleStyle}>{data.title}</h3>
              <p style={{ paddingLeft: '3%', marginTop: '0' }}>{data.time}</p>
            </div>
          )
        })
      }
    </div >
  )
}

const announcementStyle = {
  borderRadius: '30px',
  backgroundColor: 'white',
  width: '90%',
  height: '40%',
  marginTop: '10%',
  marginLeft: '5%'
}

const titleStyle = {
  marginBottom: '0',
  whiteSpace: 'nowrap', /* 텍스트가 줄 바꿈되지 않도록 설정 */
  overflow: 'hidden', /* 넘치는 텍스트를 숨기도록 설정 */
  textOverflow: 'ellipsis', /* 넘치는 텍스트를 '...'으로 표시 */
  width: '90%',
  paddingTop: '3%',
  paddingLeft: '3%',
  height: '40%' /* 너비를 지정해 텍스트가 넘치도록 설정 */
}