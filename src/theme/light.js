import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '32em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
})

const colors = {
  pr: {
    100: '#ff6a00',
    200: '#e85900',
  },
  blue: {
    100: '#4d84f1',
    200: '#3964b8',
  },
  green: {
    100: '#26ca4f',
  },
  red: {
    50: '#d05f5f',
    100: '#d64141',
  },
  gold: {
    100: '#eba41b',
  },
  sec: {
    100: '#f3f3f3',
    150: '#ebebeb',
    200: '#e9e9e9',
    300: '#d9d9d9',
  },
  input: {
    100: '#fafafa',
  },
  border: {
    25: '#ededed',
    50: '#e4e4e4',
    75: '#c4c4c4',
    100: '#b1b1b1',
  },
  grey: {
    100: '#141414',
    200: '#313131',
    300: '#525252',
  },
}

const sizes = {}

export const lightTheme = extendTheme({
  colors,
  sizes,
  components: { Button: { baseStyle: { _focus: { boxShadow: 'none' } } } },
  shadows: { outline: '0 !important' },
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
  breakpoints,
  fonts: {
    heading: 'Raleway',
    body: 'Raleway',
  },
})
