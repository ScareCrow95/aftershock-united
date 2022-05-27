import React, { useState, useEffect } from 'react'
import {
  Box,
  Text,
  Input,
  Center,
  Flex,
  Image,
  Circle,
  Icon,
  Button,
  InputGroup,
  InputLeftAddon,
  Stack,
  Divider,
  Spacer,
  HStack,
} from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import HeadingContainer from '../common/HeadingContainer'
import { BsTwitch, BsDiscord, BsTwitter, BsFacebook } from 'react-icons/bs'
import { SiBattledotnet } from 'react-icons/si'
import ClassIconElement from '../common/ClassIconElement'
const JoinForm = observer(() => {
  return (
    <Flex direction='column'>
      <HeadingContainer title='Questionnaire' mt={8} />
      <Text align='center' mt={4} color='grey.300'>
        Aftershock United Diablo Immortal Team Questionnaire | Message
        <Text
          as='span'
          mx={1}
          bg='pr.100'
          fontWeight='semibold'
          color='sec.300'
          px={1}
          py={1}
          rounded='md'>
          ChoseN#3140
        </Text>
        on Discord if you need any help!
      </Text>
      <Flex
        direction='column'
        p={8}
        w='700px'
        alignSelf='center'
        rounded='xl'
        px={16}
        mt={8}>
        <InputGroup>
          <InputLeftAddon>
            <Icon as={BsDiscord} boxSize={5} />
          </InputLeftAddon>
          <Input placeholder='Discord Name # Numbers' />
        </InputGroup>
        <InputGroup mt={4}>
          <InputLeftAddon>
            <Icon as={SiBattledotnet} boxSize={5} />
          </InputLeftAddon>
          <Input placeholder='Battle.Net Tag' />
        </InputGroup>
        <Divider my={4} />
        <FormControl>
          <Flex direction='column'>
            <Text bg='sec.200' rounded='lg' p={1} px={2}>
              Are you able to play on a US West server?
            </Text>
            <RadioGroup defaultValue='1' mt={2} colorScheme='orange'>
              <Flex direction='column'>
                <Radio my={1} value='1'>
                  Yes
                </Radio>
                <Radio my={1} value='2'>
                  No
                </Radio>
              </Flex>
            </RadioGroup>
          </Flex>
          <Divider my={4} />
          <Flex direction='column'>
            <Text bg='sec.200' rounded='lg' p={1} px={2}>
              Which server will you be on?
            </Text>
            <RadioGroup defaultValue='1' mt={2} colorScheme='orange'>
              <Flex direction='column'>
                <Radio my={1} value='1'>
                  North America
                </Radio>
                <Radio my={1} value='2'>
                  Europe
                </Radio>
                <Radio my={1} value='3'>
                  Asia
                </Radio>
                <Radio my={1} value='4'>
                  Other
                </Radio>
              </Flex>
            </RadioGroup>
          </Flex>
          <Divider my={4} />
          <Flex direction='column'>
            <Text bg='sec.200' rounded='lg' p={1} px={2}>
              Which server will you be on?
            </Text>
            <RadioGroup defaultValue='1' mt={2} colorScheme='orange'>
              <Flex direction='column'>
                <Radio my={1} value='1'>
                  Less than 5 hours a week
                </Radio>
                <Radio my={1} value='2'>
                  5-10 hours a week
                </Radio>
                <Radio my={1} value='3'>
                  11-25 hours a week
                </Radio>
                <Radio my={1} value='4'>
                  25+ hours a week
                </Radio>
              </Flex>
            </RadioGroup>
          </Flex>
          <Divider my={4} />
          <Flex direction='column'>
            <Text bg='sec.200' rounded='lg' p={1} px={2}>
              How much are you going to be spending? (No wrong answer just for
              organization purpose)
            </Text>
            <RadioGroup defaultValue='1' mt={2} colorScheme='orange'>
              <Flex direction='column'>
                <Radio my={1} value='1'>
                  Free to Play
                </Radio>
                <Radio my={1} value='2'>
                  $1-$50 USD / Month
                </Radio>
                <Radio my={1} value='3'>
                  $50 - $100 USD / Month
                </Radio>
                <Radio my={1} value='4'>
                  $100 - $250 USD / Month
                </Radio>
                <Radio my={1} value='5'>
                  Over $250 USD / Month
                </Radio>
              </Flex>
            </RadioGroup>
          </Flex>
          <Divider my={4} />
          <Flex direction='column'>
            <Text bg='sec.200' rounded='lg' p={1} px={2}>
              Which time-zone do you live in? (ex: Pacific Standard Time, PDT,
              etc)
            </Text>
            <Input placeholder='Your time zone' mt={2} />
          </Flex>
          <Divider my={4} />
          <Flex direction='column'>
            <Text bg='sec.200' rounded='lg' p={1} px={2}>
              How much are you going to be spending? (No wrong answer just for
              organization purpose)
            </Text>
            <Flex direction='column'>
              <RadioGroup defaultValue='1' mt={2} colorScheme='orange'>
                <Flex justify='space-between'>
                  <Radio my={1} value='1'>
                    1
                  </Radio>
                  <Radio my={1} value='2'>
                    2
                  </Radio>
                  <Radio my={1} value='3'>
                    3
                  </Radio>
                  <Radio my={1} value='4'>
                    4
                  </Radio>
                  <Radio my={1} value='5'>
                    5
                  </Radio>
                  <Radio my={1} value='6'>
                    6
                  </Radio>
                  <Radio my={1} value='7'>
                    7
                  </Radio>
                  <Radio my={1} value='8'>
                    8
                  </Radio>
                  <Radio my={1} value='9'>
                    9
                  </Radio>
                  <Radio my={1} value='10'>
                    10
                  </Radio>
                </Flex>
                <Flex mt={2}>
                  <Text>Never Playerd Before</Text>
                  <Spacer />
                  →
                  <Spacer />
                  <Text>World Class Expert</Text>
                </Flex>
              </RadioGroup>
            </Flex>
          </Flex>
          <Divider my={4} />
          <Flex direction='column'>
            <Text bg='sec.200' rounded='lg' p={1} px={2}>
              What class would be your first choice to play? *
            </Text>
            <RadioGroup defaultValue='1' mt={2} colorScheme='orange'>
              <Flex direction='column'>
                <Radio my={1} value='1'>
                  <ClassIconElement id='barbarian' mr={1} /> Barbarian
                </Radio>
                <Radio my={1} value='2'>
                  <ClassIconElement id='necromancer' mr={1} /> Necromancer
                </Radio>
                <Radio my={1} value='3'>
                  <ClassIconElement id='crusader' mr={1} /> Crusader
                </Radio>
                <Radio my={1} value='4'>
                  <ClassIconElement id='wizard' mr={1} /> Wizard
                </Radio>
                <Radio my={1} value='5'>
                  <ClassIconElement id='monk' mr={1} /> Monk
                </Radio>
                <Radio my={1} value='6'>
                  <ClassIconElement id='demonHunter' mr={1} /> Demon Hunter
                </Radio>
              </Flex>
            </RadioGroup>
          </Flex>
          <Divider my={4} />
          <Flex direction='column'>
            <Text bg='sec.200' rounded='lg' p={1} px={2}>
              How did you hear about this questionnaire?
            </Text>
            <RadioGroup defaultValue='1' mt={2} colorScheme='orange'>
              <Flex direction='column'>
                <Radio my={1} value='1'>
                  Darth Micro
                </Radio>
                <Radio my={1} value='2'>
                  ChoseN
                </Radio>
                <Radio my={1} value='3'>
                  Skratch
                </Radio>
                <Radio my={1} value='4'>
                  ColdBrew
                </Radio>
                <Radio my={1} value='5'>
                  JGigs
                </Radio>
                <Radio my={1} value='6'>
                  Leila Fox
                </Radio>
                <Radio my={1} value='7'>
                  Deadwood Jedi
                </Radio>
                <Radio my={1} value='8'>
                  Smiley
                </Radio>
                <Radio my={1} value='9'>
                  TriggerhappyJon
                </Radio>
                <Radio my={1} value='10'>
                  MadCapper
                </Radio>
                <Radio my={1} value='10'>
                  Other
                </Radio>
              </Flex>
            </RadioGroup>
          </Flex>
        </FormControl>
        <Button my={8} size='lg'>
          Submit
        </Button>
      </Flex>
    </Flex>
  )
})

export default JoinForm
