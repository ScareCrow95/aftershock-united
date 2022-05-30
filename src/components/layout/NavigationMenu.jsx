import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Button,
  Divider,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { observer } from 'mobx-react-lite'
import logo from '../../assets/img/logo.png'
import bg from '../../assets/img/headerBG.png'
import logoTitle from '../../assets/img/title-logo.png'
import { MenuData } from '../../constants/menu'
import { ChakraNextImage } from '../common/ChakraNextImage'

import { MdOutlineMenu } from 'react-icons/md'
import { useState } from 'react'
import ClassIconElement from '../common/ClassIconElement'

const NavigationMenu = observer(() => {
  const router = useRouter()
  const [show, setShow] = useState(false)
  return (
    <Flex direction='column'>
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
          <Flex display={['none', 'none', 'flex']}>
            {MenuData.map((x) => {
              return (
                <Menu key={x.id} zIndex='5'>
                  <MenuButton
                    onClick={() => {
                      x.href && router.push(x.href)
                    }}>
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
          <Flex display={['flex', 'flex', 'none']} align='center'>
            <Icon
              as={MdOutlineMenu}
              boxSize={7}
              color='sec.300'
              cursor='pointer'
              onClick={() => setShow(!show)}
              _hover={{ opacity: 0.7 }}
            />
          </Flex>
        </Flex>
      </Flex>
      {show && (
        <Flex
          direction='column'
          position='absolute'
          top='120px'
          w='100%'
          zIndex={4}>
          <Flex direction='column' bg='sec.100' boxShadow='dark-lg'>
            <Text
              p={3}
              alignSelf='center'
              fontWeight='semibold'
              cursor='pointer'
              onClick={() => {
                setShow(false)
                router.push('/')
              }}>
              Home
            </Text>
            <Divider />
            <Text
              p={3}
              alignSelf='center'
              fontWeight='semibold'
              cursor='pointer'
              onClick={() => {
                setShow(false)
                router.push('/gems')
              }}>
              Gems
            </Text>
            <Divider />
            <Flex direction='column' pb={2}>
              <Text
                p={3}
                alignSelf='center'
                bg='sec.200'
                w='100%'
                textAlign='center'
                mb={4}>
                Classes
              </Text>
              <Flex align='center' wrap='wrap' justify='center'>
                <ClassIconElement id='barbarian' ml={3} my={2} />
                <Text mt='-3px' fontWeight='semibold' px={2}>
                  Barbarian
                </Text>
                <ClassIconElement id='crusader' ml={3} my={2} />
                <Text mt='-3px' fontWeight='semibold' px={2}>
                  Crusader
                </Text>
                <ClassIconElement id='demonHunter' ml={3} my={2} />
                <Text mt='-3px' fontWeight='semibold' px={2}>
                  Demon Hunter
                </Text>
                <Flex my={2} align='center'>
                  <ClassIconElement id='necromancer' ml={3} />
                  <Text mt='-3px' fontWeight='semibold' px={2}>
                    Necromancer
                  </Text>
                </Flex>
                <ClassIconElement id='monk' ml={3} my={2} />
                <Text mt='-3px' fontWeight='semibold' px={2}>
                  Monk
                </Text>
                <ClassIconElement id='wizard' ml={3} my={2} />
                <Text mt='-3px' fontWeight='semibold' px={2}>
                  Wizard
                </Text>
              </Flex>
            </Flex>
            <Divider />
            <Text
              p={3}
              cursor='pointer'
              alignSelf='center'
              fontWeight='semibold'
              onClick={() => {
                setShow(false)
                router.push('/join-us')
              }}>
              Join us
            </Text>
            <Divider />
            <Text
              p={3}
              alignSelf='center'
              cursor='pointer'
              fontWeight='semibold'
              onClick={() => {
                setShow(false)
                router.push('/creators')
              }}>
              Creators
            </Text>
          </Flex>
        </Flex>
      )}
    </Flex>
  )
})

export default NavigationMenu
