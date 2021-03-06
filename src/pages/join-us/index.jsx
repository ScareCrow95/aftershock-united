import { Flex, Icon, Text } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { BsDiscord } from 'react-icons/bs'
import bg from '../../assets/img/joinusbg.png'
import { ChakraNextImage } from '../../components/common/ChakraNextImage'
import ClassIconElement from '../../components/common/ClassIconElement'
import HeadingContainer from '../../components/common/HeadingContainer'
import Activity from '../../components/home/Activity'
import Trending from '../../components/home/Trending'
import JoinForm from '../../components/join-us/JoinForm'
import Questionairre from '../../components/join-us/Questionairre'

const JoinUs = observer(() => {
  return (
    <Flex
      borderLeftWidth={[0, 0, 0, 0, '3px']}
      borderRightWidth={[0, 0, 0, 0, '3px']}
      borderLeftColor='pr.100'
      borderRightColor='pr.100'
      direction='column'
      boxShadow='dark-lg'
      bg='sec.100'>
      <Flex position='relative' boxShadow='dark-lg'>
        <ChakraNextImage
          src={bg}
          w='100%'
          h='400px'
          objectFit='cover'
          filter='grayscale(100%)'
        />
        <Flex
          position='absolute'
          w='100%'
          h='100%'
          direction='column'
          textAlign='center'
          bg='rgb(0,0,0,.5)'
          justify='center'
          align='center'>
          <Text fontWeight='bold' fontSize='2xl'>
            AFTERSHOCK{' '}
            <Text as='span' color='pr.100'>
              UNITED
            </Text>
          </Text>
          <Text bg='rgb(0,0,0,.5)' p={4} mt={6}>
            call all <ClassIconElement id='barbarian' ml={2} />
            <ClassIconElement id='wizard' mx={2} />
            <ClassIconElement id='monk' mr={2} />
            <Text as='span' fontSize='lg' fontWeight='semibold'>
              Diablo Immortal
            </Text>
            <ClassIconElement id='crusader' ml={2} />
            <ClassIconElement id='necromancer' mx={2} />
            <ClassIconElement id='demonHunter' mr={2} />
            players from veteran to beginner, whale to f2p! So now is your
            chance to get in on something big while in early days! We already
            have hundreds of players ready to roll with plenty of room for more!
          </Text>
          <Flex
            bg='#5662F6'
            align='center'
            rounded='lg'
            p={3}
            mt={8}
            cursor='pointer'
            _hover={{ opacity: 0.8 }}>
            <Icon as={BsDiscord} boxSize={7} mr={3} />
            <Text fontWeight='semibold' fontSize='lg'>
              Join Our Discord
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <HeadingContainer title='About Us' my={8} />
      <Text px={8}>
        <Text as='span' fontWeight='semibold' color='pr.100'>
          Aftershock United
        </Text>{' '}
        is a gaming coummunity where everyone from professional content
        creators, to casual gamers, can be part of a place to play and discuss
        games together. We are partnered with Aftershock Media Group, a talent
        agency that represents some of your favorite content creators in the
        industry. The current focus of our community is getting things rolling
        with Diablo Immortal, but we do plan to branch out and enjoy many other
        games together as well.{' '}
      </Text>
      <JoinForm />
    </Flex>
  )
})

export default JoinUs
