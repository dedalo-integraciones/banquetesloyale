/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import QuoteParallax from './components/QuoteParallax'
import Tools from './components/Tools'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <QuoteParallax />
        <Tools />
      </main>
      <Footer />
    </>
  )
}
