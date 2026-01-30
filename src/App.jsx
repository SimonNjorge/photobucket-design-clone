import DigitalMemories from './components/DigitalMemories'
import Download from './components/Download'
import EmbedPhotos from './components/EmbedPhotos'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import KeyNotes from './components/KeyNotes'
import Pricing from './components/Pricing'
import ProtectPlanet from './components/ProtectPlanet'
import SharePassions from './components/SharePassions'
import VideoSec from './components/VideoSec'

import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(121, 129, 100)'
    },
    secondary: {
      main: 'rgb(3, 116, 255)'
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='overflow-x-hidden'>
        <Header />
        <Hero/>
        <Pricing/>
        <Download/>
        <VideoSec/>
        <DigitalMemories/>
        <SharePassions/>
        <EmbedPhotos/>
        <ProtectPlanet/>
        <KeyNotes/>
        <Footer/>
      </div>
    </ThemeProvider>
  )
}

export default App
