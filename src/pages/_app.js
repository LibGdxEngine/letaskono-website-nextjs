import '../styles/globals.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    })
  }, [])

  return <Component {...pageProps} />
}

export default MyApp