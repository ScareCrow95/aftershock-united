import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import logo from '../../assets/img/logo.png'
import bg from '../../assets/img/headerBG.png'
import logoTitle from '../../assets/img/title-logo.png'
import { MenuData } from '../../constants/menu'
import { ChakraNextImage } from '../common/ChakraNextImage'
const NavigationMenu = observer(() => {
  return (
    <Flex
      h={16}
      bg='#DA8313'
      // bg='red.100'
      align='center'
      justify='center'
      p={4}
      boxShadow='dark-lg'
      zIndex={2}>
      <ChakraNextImage
        src={bg}
        position='absolute'
        h={16}
        w='225px'
        left='0px'
        objectFit='contain'
      />
      <ChakraNextImage
        src={bg}
        position='absolute'
        h={16}
        w='225px'
        right='0px'
        transform='scale(-1.0,1)'
        objectFit='contain'
      />
      <Flex w='1400px' position='relative'>
        <ChakraNextImage src={logo} boxSize={8} />
        <ChakraNextImage
          src={logoTitle}
          objectFit='contain'
          w={32}
          h={8}
          ml={2}
        />
        <Spacer />
        {MenuData.map((x) => {
          return (
            <Menu key={x.id}>
              <MenuButton>
                <Flex align='center'>
                  <Text
                    ml={8}
                    fontWeight='semibold'
                    fontSize='lg'
                    color='sec.300'>
                    {x.id}
                  </Text>
                  {x.subMenu.length > 0 && (
                    <ChevronDownIcon ml={2} boxSize={5} color='sec.100' />
                  )}
                </Flex>
              </MenuButton>

              {x.subMenu.length > 0 && (
                <>
                  <MenuList bg='sec.200'>
                    {x.subMenu.map((item) => {
                      return (
                        <MenuItem _hover={{ bg: 'sec.300' }} key={item.id}>
                          {item.id}
                        </MenuItem>
                      )
                    })}
                  </MenuList>
                </>
              )}
            </Menu>
          )
        })}
      </Flex>
    </Flex>
  )
})

export default NavigationMenu
