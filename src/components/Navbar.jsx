import React, { useState } from 'react'
import { AppShell, NavLink } from '@mantine/core';
import { NavLink as NavLinkRoute } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IconHome2, IconGauge } from '@tabler/icons-react';
function Navbar({ toggle }) {
    const navigate = useNavigate()
    
    return (
        <AppShell.Navbar p='md'>
            <NavLink label='Dashboard' leftSection={<IconGauge size="1rem" stroke={1.5} />} onClick={() => { navigate('/dashboard'); toggle()}}  style={{ fontWeight: 'bold' }}></NavLink>
            <NavLink label='Quản lý Site' leftSection={<IconHome2 size="1rem" stroke={1.5} />} style={{ fontWeight: 'bold' }}>
                <NavLink label='Danh sách Site' onClick={() => { navigate('/sites'); toggle() }} ></NavLink>
            </NavLink>
        </AppShell.Navbar>
    )
}

export default Navbar
// onClick={() => { navigate('/dashboard'); toggle() }} 