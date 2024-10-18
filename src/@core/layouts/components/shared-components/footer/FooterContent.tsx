// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <Typography sx={{ mr: 2 }}>© 2024,All rights reserved by </Typography>
        <Typography sx={{ marginRight: 2, color: 'red', fontWeight: 'bold' }}>RayChem RPG</Typography>
      </Box>
      <Typography sx={{ marginRight: 2, color: 'blue' }}></Typography>
    </Box>
  )
}

export default FooterContent
