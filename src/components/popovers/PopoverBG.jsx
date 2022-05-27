import {
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { useUIStore } from '../../provider/rootStoreProvider'
import bg from '../../assets/img/textures/bgtop.png'
import bgBottom from '../../assets/img/textures/bgbottom.png'
import { ChakraNextImage } from '../common/ChakraNextImage'
import ClassItem from './ClassPopItem'
import ClassPopItem from './ClassPopItem'
import { GRADIENT, GRADIENT_2, GRADIENT_GRAY } from '../../constants/uiData'
import GemPopItem from './GemPopItem'
const PopoverBG = observer(() => {
  const uiStore = useUIStore()

  return (
    <Portal>
      <>
        <Popover
          returnFocusOnClose={false}
          isOpen={uiStore.popover}
          onClose={() => (uiStore.popover = null)}
          closeOnBlur={false}>
          <PopoverTrigger>
            <Flex
              position='absolute'
              top={uiStore.popover ? uiStore.popover.y : 0}
              left={uiStore.popover ? uiStore.popover.x : 0}
              w={uiStore.popover ? `${uiStore.popover.width}px` : 0}
              h={uiStore.popover ? `${uiStore.popover.height}px` : 0}
              pointerEvents='none'
            />
          </PopoverTrigger>
          <PopoverContent rounded='none' border='0'>
            <Flex
              w='400px'
              position='relative'
              direction='column'
              p='2px'
              bg={GRADIENT_2}
              _before={{
                content: '""',
                background: GRADIENT_2,
                position: 'absolute',
                height: '100%',
                width: '100%',
                zIndex: 0,
                opacity: 0.4,
                filter: 'blur(8px)',
              }}
              boxShadow='3px 3px 30px black'>
              <Flex flex={1} zIndex={1} bg='sec.100'>
                {uiStore.popover?.type === 'class' && <ClassPopItem />}
                {uiStore.popover?.type === 'gem' && <GemPopItem />}
              </Flex>
            </Flex>
          </PopoverContent>
        </Popover>
      </>
    </Portal>
  )
})

export default PopoverBG
