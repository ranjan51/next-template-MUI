import { SyntheticEvent, useState } from 'react'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import { CardTwitter } from 'src/@core/components/assignticket/assignticketcard'
import TextField from '@mui/material/TextField'
import AssignTicketsForm from 'src/@core/components/assignticket/assignticketsforms'
import { Pagination } from '@mui/material'

const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    minHeight: 38,
    minWidth: 110,
    borderRadius: 8,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}))

const ACLPage = () => {
  // ** State
  const [value, setValue] = useState<string>('1')
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [formvisible, setFormvisible] = useState<boolean>(false)

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const dataMap = new Map([
    ['key1', { title: '1', content: 'Content 1', description: '' }],
    ['key2', { title: '2', content: 'Content 2', description: '' }],
    ['key3', { title: '3', content: 'Content 3', description: '' }]
  ])

  const [dataMap2, setDataMap] = useState(
    new Map([
      ['key1', { title: '1', content: 'Content 1', description: '' }],
      ['key2', { title: '2', content: 'Content 2', description: '' }],
      ['key3', { title: '3', content: 'Content 3', description: '' }]
    ])
  )

  // Function to handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  // Filter the data based on the search term
  const filteredData = [...dataMap2].filter(([key, value]) =>
    value.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDeleteItem = (key: string) => {
    const newMap = new Map(dataMap)
    newMap.delete(key)
    setDataMap(newMap)
  }

  console.log(formvisible, 'from index')
  return (
    <>
      {!formvisible && (
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '20px' }}>
            <TextField
              label='Search Jointers'
              variant='outlined'
              value={searchTerm}
              onChange={handleSearchChange}
              sx={{ marginRight: '10px', width: '75%' }}
            />
            <TextField
              select
              label='Filter'
              variant='outlined'
              // value={filter}
              // onChange={handleFilterChange}
              sx={{ width: '25%' }}
            ></TextField>
          </Box>
          <Box>
            <TabContext value={value}>
              <TabList onChange={handleChange} aria-label='customized tabs example'>
                <Tab value='1' label='upcoming' />
                <Tab value='2' label='Approved' />
              </TabList>

              <TabPanel value='1'>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                  {filteredData.map(([key, value]) => (
                    <CardTwitter
                      key={key}
                      title={value.title}
                      content={value.content}
                      onDelete={() => handleDeleteItem(key)} // Pass the delete function
                      setFormvisible={setFormvisible}
                    />
                  ))}
                </Box>
                <Box style={{ display: 'flex', placeContent: 'flex-end', marginTop: '10px', width: '100%' }}>
                  <Pagination count={10} shape='rounded' color='primary' />
                </Box>
              </TabPanel>

              <TabPanel value='2'>
                <Typography>No Approved Data</Typography>
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
      )}

      {formvisible && <AssignTicketsForm setFormvisible={setFormvisible} />}
    </>
  )
}

export default ACLPage
