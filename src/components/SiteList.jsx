import { useEffect, useState } from 'react'
import * as siteService from '../services/SiteService'
import { Table, Box, Button, Paper } from '@mantine/core'
import { mkConfig, generateCsv, download } from 'export-to-csv'; //or use your library of choice here
import { useMemo } from 'react';
import { IconDownload, IconPlus } from '@tabler/icons-react';
import { MantineReactTable, useMantineReactTable, } from 'mantine-react-table';
import { Link } from 'react-router-dom';
import { flattenObject } from '../utils/flattenObj';
import { flatten } from 'flat'
function SiteList() {
    const [siteList, setSiteList] = useState([])
    useEffect(() => {
        getAllSites()
    }, [])
    const getAllSites = async () => {
        const sites = await siteService.getAllSites()
        setSiteList(sites)
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
                filterVariant: 'multi-select',
                mantineFilterMultiSelectProps: {
                    data: ['Đà Nẵng', 'Quảng Nam', 'Quảng Trị', 'TT Huế'],
                },
            },
            {
                accessorKey: 'siteId',
                header: 'Site ID',
            },
            {
                accessorKey: 'siteId2', //normal accessorKey
                header: 'Site ID khác',
            },
            {
                accessorKey: 'siteName',
                header: 'Tên trạm',
            },
            {
                accessorKey: 'latitude',
                header: 'Vĩ độ',
            },
            {
                accessorKey: 'longitude',
                header: 'Kinh độ',
            },
            {
                accessorKey: 'siteTransmissionType.name',
                header: 'Loại TD trạm',
            },
            {
                accessorKey: 'transmissionOwner.name',
                header: 'Đơn vị sở hữu TD ',
            },
            {
                accessorKey: 'note',
                header: 'Ghi chú',
            }
        ],
        []
    );


    const csvConfig = mkConfig({
        fieldSeparator: ',',
        decimalSeparator: '.',
        useKeysAsHeaders: true,
    });

    const handleExportData = () => {

        const flattenList = siteList.map((site) => {
            return flatten(site)
        })
        console.log(flattenList)
        const csv = generateCsv(csvConfig)(flattenList)
        download(csvConfig)(csv)
    }

    const table = useMantineReactTable({
        columns,
        data: siteList,
        paginationDisplayMode: 'pages',
        mantineTableProps: {
            striped: true,
        },
        enableRowActions: true,
        enableRowSelection: true,
        mantineTableHeadRowProps: {

            bg: 'blue'

        },
        mantinePaperProps: {
            shadow: "sm",
            sx: {
                borderRadius: '0',
                border: '1px dashed #e0e0e0',
            },
        },


        renderTopToolbarCustomActions: ({ table }) => (
            <>


                <Box
                    style={{
                        display: 'flex',
                        gap: '16px',
                        padding: '8px',
                        flexWrap: 'wrap',
                    }}
                >
                    <Button
                        size='xs'
                        color="blue"
                        //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
                        onClick={handleExportData}
                        leftSection={<IconDownload />}
                        variant="outline"
                    >
                        Export CSV
                    </Button>
                    {/* <Button
                disabled={table.getPrePaginationRowModel().rows.length === 0}
                //export all rows, including from the next page, (still respects filtering and sorting)
                onClick={() =>
                  handleExportRows(table.getPrePaginationRowModel().rows)
                }
                leftSection={<IconDownload />}
                variant="filled"
              >
                Export All Rows
              </Button>
              <Button
                disabled={table.getRowModel().rows.length === 0}
                //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
                onClick={() => handleExportRows(table.getRowModel().rows)}
                leftSection={<IconDownload />}
                variant="filled"
              >
                Export Page Rows
              </Button>
              <Button
                disabled={
                  !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
                }
                //only export selected rows
                onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
                leftSection={<IconDownload />}
                variant="filled"
              >
                Export Selected Rows
              </Button> */}
                </Box>
            </>
        ),
    });

    return (
        <Paper >
            <Button
                size='xs'
                color="blue"
                //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)                      
                leftSection={<IconPlus />}
                variant="filled"
                my={10}               
                component={Link}
                to='/dashboard'
            >
              Thêm mới
            </Button>
            <MantineReactTable table={table} />
        </Paper>

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