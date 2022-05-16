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
  secondary: {
    100: '#2d2d2d',
    150: '#262626',
    200: '#212121',
    300: '#141414',
  },
  grey: {
    100: '#fafafa',
    200: '#c7c7c7',
    300: '#a3a3a3',
  },
  input: {
    100: '#474747',
  },
  border: {
    25: '#323232',
    50: '#474747',
    75: '#505050',
    100: '#555',
  },
  primary: {
    100: '#ff6a00',
    200: '#e85900',
  },
  blue: {
    100: '#4694ff',
    200: '#2367cc',
  },
  green: {
    50: '#5bd91c',
    100: '#00a300',
  },
  red: {
    50: '#d05f5f',
    100: '#d64141',
  },
  gold: {
    100: '#fee3ae',
  },
}

const sizes = {}

export const darkTheme = extendTheme({
  colors,
  sizes,
  components: { Button: { baseStyle: { _focus: { boxShadow: 'none' } } } },
  shadows: { outline: '0 !important' },
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  },
  breakpoints,
  fonts: {
    heading: 'Raleway',
    body: 'Raleway',
  },
})
