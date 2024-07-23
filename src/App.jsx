

import './App.css'
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; //if using mantine date picker features
import 'mantine-react-table/styles.css'; //make sure MRT styles were imported in your app root (once)
import { useDisclosure } from '@mantine/hooks';
import { AppShell, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import SiteList from './components/SiteList';
import SiteCreate from "./components/SiteCreate.jsx";

function App() {
  const [opened, { toggle }] = useDisclosure()
  
  const { setColorScheme } = useMantineColorScheme({keepTransitions: true})
  const computedColorScheme = useComputedColorScheme('dark')

  console.log(computedColorScheme)
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
  }
  return (

    <AppShell
      header={{ height: 50 }}
      navbar={{ width: 250, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
      footer={{ height: 30 }}
    >
      <Header opened={opened} toggle={toggle} />
      <Navbar toggle={toggle } computedColorScheme={computedColorScheme}/>
      <AppShell.Main>
        <Routes>
          <Route path='/dashboard' element={<h1>Dashboard</h1>} />       
          <Route path='/site' element={<SiteList />} />
          <Route path='/site/create' element={<SiteCreate />} />
        </Routes>
      </AppShell.Main>
      <AppShell.Footer>Copyright @ Nguyễn Song Nghiêm</AppShell.Footer>
    </AppShell>


  )
}

export default App
