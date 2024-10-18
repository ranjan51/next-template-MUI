import React, { ReactNode, useState } from 'react'
import { Typography, Select, MenuItem, Button, OutlinedInput } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import Link from 'next/link'
import Icon from 'src/@core/components/icon'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import useMediaQuery from '@mui/material/useMediaQuery'
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'
import { useSettings } from 'src/@core/hooks/useSettings'
import { useTheme } from '@mui/material/styles'
import { useAuth } from 'src/hooks/useAuth'
import themeConfig from 'src/configs/themeConfig'

const RegisterIllustrationWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  padding: theme.spacing(20),
  paddingRight: '0 !important',
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(10)
  }
}))

const RegisterIllustration = styled('img')(({ theme }) => ({
  maxWidth: '48rem',
  [theme.breakpoints.down('xl')]: {
    maxWidth: '38rem'
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '30rem'
  }
}))

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 400
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 450
  }
}))

const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: 400
  }
}))

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  letterSpacing: '0.18px',
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down('md')]: { marginTop: theme.spacing(8) }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const Register = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const theme = useTheme()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))
  const { skin } = settings
  const imageSource = skin === 'bordered' ? 'auth-v2-register-illustration-bordered' : 'auth-v2-register-illustration'

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    username: yup.string().required('username is required'),
    phone: yup.string().required(),
    // password: yup
    //   .string()
    //   .min(8)
    //   .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //     'Must contain 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special case character'
    //   )
    //   .required(),
    jointerType: yup.string().required('Role is required')
  })

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: any) => {
    console.log(data)
    reset()
  }

  return (
    <Box className='content-right'>
      {!hidden ? (
        <Box sx={{ flex: 1, display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
          <RegisterIllustrationWrapper>
            <RegisterIllustration
              alt='register-illustration'
              src={`/images/pages/${imageSource}-${theme.palette.mode}.png`}
              height={350}
            />
          </RegisterIllustrationWrapper>
          <FooterIllustrationsV2 image={`/images/pages/auth-v2-register-mask-${theme.palette.mode}.png`} />
        </Box>
      ) : null}
      <RightWrapper sx={skin === 'bordered' && !hidden ? { borderLeft: `1px solid ${theme.palette.divider}` } : {}}>
        <Box
          sx={{
            p: 7,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'background.paper'
          }}
        >
          <BoxWrapper>
            <Box
              sx={{
                top: 30,
                left: 40,
                display: 'flex',
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img src='/images/logoo.png' alt='Your Image' width={90} height={80} style={{ marginBottom: '1rem' }} />
              <Typography variant='h6' sx={{ ml: 2, lineHeight: 1, fontWeight: 700, fontSize: '1.5rem !important' }}>
                {themeConfig.templateName}
              </Typography>
            </Box>
            <Box sx={{ mb: 6 }}>
              <TypographyStyled variant='h6'>Raychem RPG</TypographyStyled>
              <Typography variant='body2'>Register Your Business Today! </Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <Controller
                  name='username'
                  control={control}
                  rules={{ required: true }}
                  defaultValue=''
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label='Username'
                      sx={{ mb: 1 }}
                      placeholder='Enter user name'
                      error={Boolean(errors.username)}
                      helperText={(errors.username?.message as string) || ''}
                    />
                  )}
                />
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <Controller
                  name='email'
                  control={control}
                  rules={{ required: true }}
                  defaultValue=''
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label='Email'
                      sx={{ mb: 1 }}
                      placeholder='user@email.com'
                      error={Boolean(errors.email)}
                      helperText={(errors.email?.message as string) || ''}
                    />
                  )}
                />
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <Controller
                  name='phone'
                  control={control}
                  rules={{ required: true }}
                  defaultValue=''
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label='Phone'
                      sx={{ mb: 1 }}
                      placeholder='+91'
                      error={Boolean(errors.phone)}
                      helperText={(errors.phone?.message as string) || ''}
                    />
                  )}
                />
                {/* </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <Controller
                  name='password'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <FormControl fullWidth sx={{ mb: 1 }}>
                      <InputLabel htmlFor='auth-login-v2-password'>Password</InputLabel>
                      <OutlinedInput
                        {...field}
                        label='Password'
                        id='auth-login-v2-password'
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              onMouseDown={e => e.preventDefault()}
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              <Icon icon={showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                            </IconButton>
                          </InputAdornment>
                        }
                        error={Boolean(errors.password)}
                      />
                    </FormControl>
                  )}
                />
                {errors.password && (
                  <FormHelperText sx={{ color: 'error.main' }} id=''>
                    {errors.password.message as string}
                  </FormHelperText>
                )}
              </FormControl> */}
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id='jointer-type-label'>Role</InputLabel>
                <Controller
                  name='jointerType'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <Select
                      {...field}
                      labelId='jointer-type-label'
                      label='Jointer Type'
                      error={Boolean(errors.jointerType)}
                    >
                      <MenuItem value='customer'>Customer</MenuItem>
                      <MenuItem value='jointer'>Jointer</MenuItem>
                    </Select>
                  )}
                />
                {errors.jointerType && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.jointerType.message as string}</FormHelperText>
                )}
              </FormControl>

              <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 7, mt: 5 }}>
                Sign up
              </Button>
            </form>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography sx={{ mr: 2, color: 'text.secondary' }}>Already have an account?</Typography>
              <Typography href='login' component={Link} sx={{ color: 'primary.main', textDecoration: 'none' }}>
                Sign in instead
              </Typography>
            </Box>
          </BoxWrapper>
        </Box>
      </RightWrapper>
    </Box>
  )
}

Register.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

Register.guestGuard = true

export default Register
