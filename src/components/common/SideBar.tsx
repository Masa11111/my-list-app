import AssessmentIcon from '@mui/icons-material/Assessment';
import HomeIcon from '@mui/icons-material/Home';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { CSSProperties, FC } from 'react';
import { NavLink } from 'react-router-dom';

type menueItem = {
  text: string,
  path: string,
  icon: React.ComponentType
}

interface SideBarProps {
  drawerWidth: number,
  mobileOpen: boolean,
  handleDrawerClose: () => void,
  handleDrawerTransitionEnd: () => void,
}

const SideBar: FC<SideBarProps> = (
  {
    drawerWidth,
    mobileOpen,
    handleDrawerClose,
    handleDrawerTransitionEnd,
  }
) => {

  // メニュー項目
  const menuItems: menueItem[] = [
    { text: 'Home', path: '/', icon: HomeIcon },
    { text: 'Report', path: '/report', icon: AssessmentIcon }
  ]

  // リンクの基本CSS
  const baseLinkStyle: CSSProperties = {
    textDecoration: "none",
    color: "inherit",
    display: "block"
  }

  // リンクを選択状態のCSS
  const activeLinkStyle: CSSProperties = {
    backgroundColor: "rgba(0, 0, 0, 0.08)"
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <NavLink key={item.text} to={item.path} style={({ isActive }) => {
            // インライン要素はオブジェクトで返す必要がある
            return {
              ...baseLinkStyle,
              ...(isActive ? activeLinkStyle : {})
            }
          }}>
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  return (
    <>

      {/* サイドバー */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 }, }}
        aria-label="mailbox folders"
      >

        {/* モバイル用 */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* PC用 */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  )
}

export default SideBar
