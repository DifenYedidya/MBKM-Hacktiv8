import './App.css';
import cloud from './img/cloud.svg'
import shoes from './img/shoes.svg'
import people from './img/people.svg'
import voiceCall from './img/voiceCall.svg'
import roles from './img/roles.svg'
import chat from './img/chat.svg'
import justChillin from './img/justChillin.svg'
import star from './img/star.svg'
import {ButtonHero, DownloadHero} from './components/Button'
import NavbarHero from './components/Navbar'
import Footer from './components/Footer'
import {
  Heading,
  Text,
  Flex,
  Box,
  Image
} from 'rebass/styled-components';

function App() {
  return (
    <div className="App">
      <NavbarHero/>
      <Flex className='heroImageContainer heroContainer-3j1eQg'
        flexWrap='wrap'
        px={2}
        py={6}
      >
        <Box px={2} py={2} width={1/4}>
          <Image
            src={cloud}
            variant='background'
          />
          <Image
            src={shoes}
            variant='background'
          />
        </Box>
        <Box className='middle-box' px={2} py={2} width={1/2}>
          <Heading
            fontSize='56px'
            py={3}
          >
            IMAGINE A PLACE...
          </Heading>
          <Text
            verticalAlign='baseline'
            lineHeight='1.625'
          >
            ...where you can belong to a school club, a gaming group, or a worldwide art community. 
            Where just you and a handful of friends can spend time together. A place that makes it easy 
            to talk every day and hang out more often.
          </Text>
            <ButtonHero/>
        </Box>
        <Box px={2} py={2} width={1/4}>
        <Image
            src={cloud}
            variant='background'
          />
          <Image
            src={people}
            variant='background'
          />
        </Box>
      </Flex>
      <div className='grid-3Ykf_K heroBackground-3m0TRU'>
        <div className='row-3wW-Fx grid-left-image heroContainer-3j1eQg'>
          <Image className='imageGrid'
            src={chat}
            variant='background'
            width='678px'
            height='440px'
          />
          <div className='space2grid'></div>
          <div className='description textGrid'>
            <h2 className='h2-25VyWe'>Create an invite-only place where you belong</h2>
            <div className='subtitle'>
              Discord servers are organized into topic-based channels where you can collaborate, share, 
              and just talk about your day without clogging up a group chat.
            </div>
          </div>
        </div>
      </div>
      <div className='grid-3Ykf_K greyBackground'>
        <div className='row-3wW-Fx grid-right-image heroContainer-3j1eQg'>
          <Image className='imageGrid'
            src={voiceCall}
            variant='background'
            width='678px'
            height='440px'
          />
          <div className='space2grid'></div>
          <div className='description textGrid'>
            <h2 className='h2-25VyWe'>From few to a fandom</h2>
            <div className='subtitle'>
              Get any community running with moderation tools and custom member access. 
              Give members special powers, set up private channels, and more.
            </div>
          </div>
        </div>
      </div>
      <div className='grid-3Ykf_K heroBackground-3m0TRU'>
        <div className='row-3wW-Fx grid-left-image heroContainer-3j1eQg'>
          <Image className='imageGrid'
            src={roles}
            variant='background'
            width='678px'
            height='440px'
          />
          <div className='space2grid'></div>
          <div className='description textGrid'>
            <h2 className='h2-25VyWe'>From few to a fandom</h2>
            <div className='subtitle'>
              Get any community running with moderation tools and custom member access. 
              Give members special powers, set up private channels, and more.
            </div>
          </div>
          
        </div>
      </div>
      <Flex className='greyBackground'
        flexWrap='wrap'
        px={2}
        py={3}
      >
        <Box px={2} py={2} width={1/8}></Box>
        <Box className='lastFeature' px={2} py={2} width={6/8}>
          <Heading
            fontSize='40px'
            py={3}
          >
            RELIABLE TECH FOR STAYING CLOSE
          </Heading>
          <Text
            verticalAlign='baseline'
            lineHeight='1.625'
          >
            Low-latency voice and video feels like you’re in the same room. Wave hello over video, 
            watch friends stream their games, or gather up and have a drawing session with screen share.
          </Text>
          <Image className='imageGrid'
            src={justChillin}
            variant='background'
            width='1180px'
            height='715px'
          />
        </Box>
        <Box px={2} py={2} width={1/8}></Box>
      </Flex>
      <Flex className='greyBackground'
        flexWrap='wrap'
        px={2}
        py={2}
      >
        <Box px={2} py={5} width={1/8}></Box>
        <Box className='lastFeature' px={2} py={5} width={6/8}>
        <Image className='imageGrid'
            src={star}
            variant='background'
            width='531px'
            height='49px'
          />
          <Heading
            fontSize='40px'
            py={3}
          >
            Ready to start your journey?
          </Heading>
          <DownloadHero/>
        </Box>
        <Box px={2} py={5} width={1/8}></Box>
      </Flex>
    </div>
  );
}

export default App;
