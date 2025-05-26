import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
// import Download from '../components/Download'
// import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Letaskono - Find Your Perfect Islamic Match | Halal Marriage App</title>
        <meta name="description" content="Discover meaningful Islamic relationships with Letaskono - the premier halal marriage app connecting Muslim singles worldwide. Join thousands finding their perfect match today." />
        <meta name="keywords" content="Islamic marriage app, Muslim dating, halal relationships, Islamic matrimony, Muslim singles, marriage app" />
        <meta name="author" content="Letaskono" />
        <meta property="og:title" content="Letaskono - Find Your Perfect Islamic Match" />
        <meta property="og:description" content="The premier halal marriage app connecting Muslim singles worldwide" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://letaskono.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              "name": "Letaskono",
              "description": "Islamic marriage app connecting Muslim singles worldwide in a halal environment",
              "applicationCategory": "Social",
              "operatingSystem": ["iOS", "Android"],
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1000"
              }
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Letaskono",
              "url": "https://letaskono.com",
              "logo": "https://letaskono.com/logo.png",
              "description": "Premier Islamic marriage app connecting Muslim singles worldwide",
              "sameAs": [
                "https://twitter.com/letaskono",
                "https://facebook.com/letaskono",
                "https://instagram.com/letaskono"
              ]
            })
          }}
        />
      </Head>

      <div className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        {/* <Download /> */}
        {/* <Footer /> */}
      </div>
    </>
  )
}