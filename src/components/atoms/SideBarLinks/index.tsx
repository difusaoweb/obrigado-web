import * as React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Collapse
} from '@mui/material'
import {
  Dashboard as DashboardIcon,
  Apps as AppsIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  People as PeopleIcon,
  CameraAlt as CameraAltIcon,
  Build as BuildIcon
} from '@mui/icons-material'
import { useParams, useNavigate, useLocation } from 'react-router-dom'

import styles from './index.module.scss'

export const SideBarLinks = () => {
  const { pathname } = useLocation()

  const [selectedIndex] = React.useState(pathname)
  const [selectedIndexCollapse, setSelectedIndexCollapse] = React.useState<
    string | null
  >(null)
  const [itemCollapsed, setItemCollapsed] = React.useState<string | null>(null)

  const listItemIconClasses = [
    { icon: <BuildIcon />, title: 'Serviços', link: '/servicos' },
    { icon: <AppsIcon />, title: 'Cases', link: '/cases' },
    { icon: <CameraAltIcon />, title: 'Mídias', link: '/midias' },
    { icon: <PeopleIcon />, title: 'Usuários', link: '/usuarios' }
  ]

  function handleSetItemCollapse(index: string) {
    setItemCollapsed(itemCollapsed === index ? null : index)
  }

  React.useEffect(() => {
    function onSetCollapse() {
      switch (pathname) {
        case '/servicos':
          setSelectedIndexCollapse('/servicos')
          setItemCollapsed('/servicos')
          break
        case '/servicos/adicionar':
          setSelectedIndexCollapse('/servicos')
          setItemCollapsed('/servicos')
          break
        case '/cases':
          setSelectedIndexCollapse('/cases')
          setItemCollapsed('/cases')
          break
        case '/cases/adicionar':
          setSelectedIndexCollapse('/cases')
          setItemCollapsed('/cases')
          break
        case '/midias':
          setSelectedIndexCollapse('/midias')
          setItemCollapsed('/midias')
          break
        case '/midias/adicionar':
          setSelectedIndexCollapse('/midias')
          setItemCollapsed('/midias')
          break
        case '/usuarios':
          setSelectedIndexCollapse('/usuarios')
          setItemCollapsed('/usuarios')
          break
        case '/usuarios/adicionar':
          setSelectedIndexCollapse('/usuarios')
          setItemCollapsed('/usuarios')
          break
      }
    }
    onSetCollapse()
  }, [])

  const { userId } = useParams()
  console.log('userId', userId)
  const location = useLocation()
  console.log('location', location)
  const navigate = useNavigate()
  console.log('navigate', navigate)

  return (
    <nav>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="/"
            selected={selectedIndex === '/'}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        {listItemIconClasses.map((item, index) => (
          <ListItem disablePadding key={index} className={styles.listItem}>
            <ListItemButton
              component="a"
              selected={selectedIndexCollapse === item.link}
              onClick={() => handleSetItemCollapse(item.link)}
              className={styles.width100}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
              {itemCollapsed === item.link ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
            </ListItemButton>
            <Collapse
              timeout="auto"
              unmountOnExit
              in={itemCollapsed === item.link}
              className={styles.width100}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    component="a"
                    href={item.link}
                    selected={selectedIndex === item.link}
                  >
                    <ListItemText primary="Lista" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    component="a"
                    href={`${item.link}/adicionar`}
                    selected={selectedIndex === `${item.link}/adicionar`}
                  >
                    <ListItemText primary="Adicionar" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Collapse>
          </ListItem>
        ))}
      </List>
    </nav>
  )
}
