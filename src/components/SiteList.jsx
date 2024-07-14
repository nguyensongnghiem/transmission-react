import { useEffect, useState } from 'react'
import * as siteService from '../services/SiteService'
import { Table } from '@mantine/core'

import { useMemo } from 'react';
import {
    MantineReactTable,
    useMantineReactTable,

} from 'mantine-react-table';
function SiteList() {
    const [siteList, setSiteList] = useState([])
    useEffect(() => {
        getAllSites()
    }, [])
    const getAllSites = async () => {
        const sites = await siteService.getAllSites()
        setSiteList(sites.content)
    }
    // const siteRows = siteList.map((site) => {
    //     return (
    //         <Table.Tr key={site.id}>
    //             <Table.Td>{site.province.name}</Table.Td>
    //             <Table.Td>{site.siteId}</Table.Td>
    //             <Table.Td>{site.siteId2}</Table.Td>
    //             <Table.Td>{site.siteName}</Table.Td>
    //             <Table.Td>{site.latitude}</Table.Td>
    //             <Table.Td>{site.longitude}</Table.Td>
    //             <Table.Td>{site.siteTransmissionType && site.siteTransmissionType.name}</Table.Td>
    //             <Table.Td>{site.transmissionOwner && site.transmissionOwner.name}</Table.Td>                
    //             <Table.Td>{site.note}</Table.Td>
    //         </Table.Tr>
    //     )
    // })



    const columns = useMemo(
        () => [
            {
                accessorKey: 'province.name', //access nested data with dot notation
                header: 'Tỉnh',
            },
            {
                accessorKey: 'siteId',
                header: 'siteId',
            },
            {
                accessorKey: 'siteId2', //normal accessorKey
                header: 'siteId 2',
            },
            {
                accessorKey: 'siteName',
                header: 'siteName',
            },
            {
                accessorKey: 'latitude',
                header: 'latitude',
            },
            {
                accessorKey: 'longitude',
                header: 'longitude',
            },
            {
                accessorKey: 'siteTransmissionType.name',
                header: 'Loại TD',
            },
            {
                accessorKey: 'transmissionOwner.name',
                header: 'Đơn vị ',
            },
            {
                accessorKey: 'note',
                header: 'Ghi chú',
            }
        ],
        []
    );

    const table = useMantineReactTable({
        columns,
        data: siteList
    });


    return (
        <MantineReactTable table={table} />
        // <Table>
        //     <Table.Thead>
        //         <Table.Th>Tỉnh</Table.Th>
        //         <Table.Th>Site ID</Table.Th>
        //         <Table.Th>Site Id khác</Table.Th>
        //         <Table.Th>Tên trạm</Table.Th>
        //         <Table.Th>Vĩ độ</Table.Th>
        //         <Table.Th>Kinh độ</Table.Th>
        //         <Table.Th>Loại Truyền dẫn trạm</Table.Th>
        //         <Table.Th>Đơn vị sở hữu TD</Table.Th>
        //         <Table.Th>Ghi chú</Table.Th>
        //     </Table.Thead>
        //     <Table.Tbody>
        //         {siteRows}
        //     </Table.Tbody>
        // </Table>


    )
}

export default SiteList