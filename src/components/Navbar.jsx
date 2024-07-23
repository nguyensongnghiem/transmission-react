import React, { useState } from 'react'
import {AppShell, NavLink, useMantineTheme} from '@mantine/core';
import { NavLink as NavLinkRoute } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IconHome2, IconGauge } from '@tabler/icons-react';
function Navbar({ toggle,computedColorScheme }) {
    const navigate = useNavigate()
    const theme = useMantineTheme()
    return (
        <AppShell.Navbar p='md' c={computedColorScheme==='light' ? theme.colors.gray[4]: 'theme.colors.gray[9]'} style={{ backgroundColor: computedColorScheme === 'dark' ? theme.colors.gray[9]: theme.colors.gray[8] }}>
            <NavLink label='Dashboard' leftSection={<IconGauge size="1rem" stroke={1.5} />} onClick={() => { navigate('/dashboard'); toggle()}}  style={{ fontWeight: 'bold' }}></NavLink>
            <NavLink label='Quản lý Site' leftSection={<IconHome2 size="1rem" stroke={1.5} />} style={{ fontWeight: 'bold' }}>
                <NavLink label='Danh sách Site' onClick={() => { navigate('/site'); toggle() }} ></NavLink>
            </NavLink>
        </AppShell.Navbar>
    )
}

export default Navbar
// onClick={() => { navigate('/dashboard'); toggle() }} 