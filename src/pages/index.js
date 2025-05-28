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
        <title>لتسكنوا - للزواج الإسلامي | طريقك لزواج إسلامي صحيح</title>
        <meta name="description" content="لتسكنوا هو التطبيق الأول في العالم الإسلامي للزواج بدون مخالفات شرعية مع توعية بضرورة احسان الاختيار" />
        <meta name="keywords" content="مبادرة مجتمعية تهدف إلى تيسير الزواج وترغيب الشباب فيه مع وضع الدين والأخلاق كمعيار أول في عملية الاختيار" />
        <meta name="author" content="Letaskono" />
        <meta property="og:title" content="لتسكنوا - طريقك لزواج إسلامي صحيح" />
        <meta property="og:description" content="التطبيق الأول للزواج الإسلامي في العالم العربي" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://letaskono-zwaj.com.com" />
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
              "description": "مبادرة مجتمعية تهدف إلى تيسير الزواج وترغيب الشباب فيه مع وضع الدين والأخلاق كمعيار أول في عملية الاختيار",
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
              "url": "https://letaskono-zwaj.com",
              "logo": "https://letaskono-zwaj.com/_next/static/media/logo.757072d0.svg",
              "description": "مبادرة مجتمعية تهدف إلى تيسير الزواج وترغيب الشباب فيه مع وضع الدين والأخلاق كمعيار أول في عملية الاختيار",
              // "sameAs": [
              //   "https://twitter.com/letaskono",
              //   "https://facebook.com/letaskono",
              //   "https://instagram.com/letaskono"
              // ]
            })
          }}
        />
      </Head>

      <div className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        {/* <Testimonials /> */}
        {/* <Download /> */}
        {/* <Footer /> */}
      </div>
    </>
  )
}