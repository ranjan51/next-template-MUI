import { SyntheticEvent, useState } from 'react'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'
// import CardAward from './RaiseTicketsCards'
import { Box } from '@mui/system'
import { IconButton, TextField, MenuItem, Fab, Pagination } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RaiseTicketForms from '../../@core/components/raise-tickets/forms/RaiseTicketForms'
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined'

import CustomAvatar from 'src/@core/components/mui/avatar'
import { Icon } from '@iconify/react'
import CardAward from '../../@core/components/raise-tickets/cards/RaiseTicketsCards'
import FormLayoutsIcons from '../../@core/components/raise-tickets/forms/TicketRaiseForms'

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

const dataMap = new Map([
  [
    'key1',
    {
      contactName: 'Ranjan kishor',
      contactNumber: '9661916051',
      ticketId: 'T-966191',
      location: 'Bengaluru',
      joiningDate: '1-Apr-2024',
      intimationDate: '1-Apr-2024',
      company: 'Microsoft',
      JobType: 'Supervision',
      status: 'ongoing'
    }
  ],
  [
    'key2',
    {
      contactName: 'Ranjan kishor',
      contactNumber: '7003584601',
      ticketId: 'T-966191',
      location: 'Patna',
      joiningDate: '1-Apr-2024',
      intimationDate: '1-Apr-2024',
      company: 'Google',
      JobType: 'Jointing',
      status: 'pending'
    }
  ],
  [
    'key3',
    {
      contactName: 'Sandeep Sharma',
      contactNumber: '7003584601',
      ticketId: 'T-966191',
      location: 'Ranchi',
      joiningDate: '1-Apr-2024',
      intimationDate: '1-Apr-2024',
      company: 'Noventiq',
      JobType: 'Supervision',
      status: 'ongoing'
    }
  ],
  [
    'key4',
    {
      contactName: 'Nandan Pandey',
      contactNumber: '7003584601',
      ticketId: 'T-966191',
      location: 'Kolkata',
      joiningDate: '1-Apr-2024',
      intimationDate: '1-Apr-2024',
      company: 'Microsoft',
      JobType: 'Supervision',
      status: 'ongoing'
    }
  ],
  [
    'key5',
    {
      contactName: 'Binni Kumari',
      contactNumber: '7003584601',
      ticketId: 'T-966191',
      location: 'Kolkata',
      joiningDate: '1-Apr-2024',
      intimationDate: '1-Apr-2024',
      company: 'Microsoft',
      JobType: 'Supervision',
      status: 'ongoing'
    }
  ],
  [
    'key6',
    {
      contactName: 'Binni Kumari',
      contactNumber: '7003584601',
      ticketId: 'T-966191',
      location: 'Kolkata',
      joiningDate: '1-Apr-2024',
      intimationDate: '1-Apr-2024',
      company: 'Microsoft',
      JobType: 'Jointing',
      status: 'pending'
    }
  ]
])
const TabsCustomized = () => {
  const [value, setValue] = useState<string>('1')
  const [isEditing, setIsEditing] = useState(false)
  const [isAdding, setisAdding] = useState(false)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [companyFilter, setCompanyFilter] = useState<string>('')
  const [editingCardData, setEditingCardData] = useState<any>(null) // State to hold card data being edited

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const handleEditClick = (cardData: any) => {
    setIsEditing(true)
    setEditingCardData(cardData) // Set card data being edited
  }
  const handleAddClick = (cardData: any) => {
    setisAdding(true)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase()
    setSearchTerm(searchValue)
  }

  const handleCompanyFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedCompany = event.target.value
    setCompanyFilter(selectedCompany)
  }

  // Extract unique company names
  const companyNames = Array.from(new Set(Array.from(dataMap.values()).map(item => item.company)))

  // Filter the data based on the search term and selected company filter
  const filteredData = [...dataMap].filter(
    ([key, value]) =>
      (value.contactNumber.toLowerCase().includes(searchTerm) ||
        value.contactName.toLowerCase().includes(searchTerm) ||
        value.ticketId.toLowerCase().includes(searchTerm) ||
        value.location.toLowerCase().includes(searchTerm) ||
        value.company.toLowerCase().includes(searchTerm)) &&
      (companyFilter === '' || value.company === companyFilter)
  )

  return (
    <>
      {isEditing ? (
        <FormLayoutsIcons setIsEditing={setIsEditing} cardData={editingCardData} />
      ) : isAdding ? (
        <RaiseTicketForms setisAdding={setisAdding} />
      ) : (
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginBottom: '20px'
            }}
          >
            <TextField
              label='Search Jointers'
              variant='outlined'
              value={searchTerm}
              onChange={handleSearchChange}
              sx={{ marginRight: '10px', width: '75%' }}
            />
            <TextField
              select
              label='Filter by Company'
              variant='outlined'
              value={companyFilter}
              onChange={handleCompanyFilterChange}
              sx={{ width: '25%' }}
            >
              <MenuItem value=''>All</MenuItem>
              {companyNames.map(company => (
                <MenuItem key={company} value={company}>
                  {company}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <TabContext value={value}>
            <TabList onChange={handleChange} aria-label='customized tabs example'>
              <Tab value='1' label='ongoing' />
              <Tab value='2' label='Approved' />
            </TabList>
            <TabPanel value='1'>
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {filteredData.map(([key, data]) => (
                  <CardAward key={key} cardData={data} onEditClick={() => handleEditClick(data)} />
                ))}
              </Box>
            </TabPanel>
            <TabPanel value='2'>
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {filteredData.map(([key, data]) => (
                  <CardAward key={key} cardData={data} onEditClick={() => handleEditClick(data)} />
                ))}
              </Box>
            </TabPanel>
          </TabContext>
          <Box sx={{ position: 'fixed', bottom: '20px', right: '20px' }}>
            <Fab color='primary' aria-label='add' onClick={() => setisAdding(true)}>
              <Icon icon='mdi:plus' height={26} width={26} />
            </Fab>
          </Box>
          <Box style={{ display: 'flex', placeContent: 'flex-end', marginTop: '10px' }}>
            <Pagination count={10} shape='rounded' color='primary' />
          </Box>
        </Box>
      )}
    </>
  )
}

export default TabsCustomized
