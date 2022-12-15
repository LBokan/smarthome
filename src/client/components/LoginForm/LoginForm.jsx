import React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { useThemeMode } from '@/hooks';

import { setIconColor } from './styles';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required')
});

export const LoginForm = () => {
  const { themeMode } = useThemeMode();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm({ values: '' });
    }
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <Box
      component="form"
      sx={{ position: 'relative', zIndex: '1', maxWidth: '300px' }}
      onSubmit={formik.handleSubmit}
    >
      <FormControl
        sx={{
          position: 'relative',
          pb: '40px'
        }}
        fullWidth
      >
        <InputLabel
          htmlFor="email"
          size="small"
          sx={{ top: '2px' }}
          error={formik.touched.email && Boolean(formik.errors.email)}
        >
          Email
        </InputLabel>
        <InputBase
          id="email"
          size="medium"
          sx={{ minHeight: '45px' }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <FormHelperText
          sx={{
            position: 'absolute',
            bottom: '20px'
          }}
          error={formik.touched.email && Boolean(formik.errors.email)}
        >
          {formik.touched.email && formik.errors.email}
        </FormHelperText>
      </FormControl>

      <FormControl
        sx={{
          position: 'relative',
          pb: '40px'
        }}
        fullWidth
      >
        <InputLabel
          htmlFor="password"
          size="small"
          sx={{ top: '2px' }}
          error={formik.touched.password && Boolean(formik.errors.password)}
        >
          Password
        </InputLabel>
        <InputBase
          id="password"
          size="medium"
          sx={{ minHeight: '45px' }}
          type={showPassword ? 'text' : 'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                sx={{ color: setIconColor(themeMode) }}
                aria-label="Toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText
          sx={{ position: 'absolute', bottom: '20px' }}
          error={formik.touched.password && Boolean(formik.errors.password)}
        >
          {formik.touched.password && formik.errors.password}
        </FormHelperText>
      </FormControl>

      <Button
        sx={{ height: '45px' }}
        variant="contained"
        fullWidth
        type="submit"
      >
        Login
      </Button>
    </Box>
  );
};
