import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { useNavigate } from "react-router-dom";
import { ContactPage, Logout } from "@mui/icons-material";
import styled from "styled-components";

export default function SidebarItem({ isSidebarOpen, setIsSidebarOpen }) {
  const navigate = useNavigate();
  const topItems = [
    { text: '홈', url: 'main', icon: HomeIcon },
    { text: '동아리 찾기', url: 'search-club', icon: SearchIcon },
    { text: '동아리 만들기', url: 'makeclub', icon: CreateNewFolderIcon }
  ];
  const bottomItems = [
    { text: '마이 페이지', url: 'mypage', icon: ContactPage },
    { text: '로그아웃', url: null, icon: Logout }
  ];

  const handleItemClick = (item) => {
    if (item.url) {
      navigate(`./${item.url}`);
    } else if (item.text === '로그아웃') {
      // 여기에 로그아웃 로직을 구현합니다.
      console.log('로그아웃 처리');
      // 예: logout();
      // 로그아웃 후 홈 페이지로 리디렉션
      navigate('/');
    }
    setIsSidebarOpen(false);
  };

  return (
    <Box
      sx={{
        width: 250,
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
      role="presentation"
    >
      <LogoBox>

      </LogoBox>
      <List>
        {topItems.map((item) => (
          <ListItem key={item.text} disablePadding onClick={() => handleItemClick(item)}>
            <ListItemButton>
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <List>
        {bottomItems.map((item) => (
          <ListItem key={item.text} disablePadding onClick={() => handleItemClick(item)}>
            <ListItemButton>
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

const LogoBox = styled(Box)`
  width: 150px;
  height: 150px;
  background: gray;
  margin: 20px 0px 0px 50px;
`