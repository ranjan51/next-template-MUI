
import Grid from '@mui/material/Grid'

import ChangePasswordCard from 'src/views/pages/account-settings/security/ChangePasswordCard'

const TabSecurity = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <ChangePasswordCard />
      </Grid>
    </Grid>
  )
}
export default TabSecurity
