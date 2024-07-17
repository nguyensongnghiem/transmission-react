import { useDisclosure } from '@mantine/hooks';
import { Flex, AppShell, Burger, Button, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconSun } from '@tabler/icons-react';
import { IconMoon } from '@tabler/icons-react';
function Header({opened,toggle}) {
  
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('dark')
  console.log(computedColorScheme)
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
  }
  return (

    <AppShell.Header>
      <Flex justify='space-between' align='center' style={{ padding: '10px 20px' }} >
        <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' ></Burger>
        <img height='40px' src='./mobifone.png'></img>
          <Button>Hello</Button>
        <Button size='xs' radius={50} onClick={toggleColorScheme} variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }} >
          {computedColorScheme === 'dark' ? <IconSun /> : <IconMoon />}

        </Button>
      </Flex>
    </AppShell.Header>
  )
}

export default Header