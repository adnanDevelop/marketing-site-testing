import React from 'react'
import ContactHeader from '../component/ContactSection/ContactHeader'
import ContactForm from '../component/ContactSection/ContactForm'
import ContactMap from '../component/ContactSection/ContactMap'
import ContactFaq from '../component/ContactSection/ContactFaq'

const Contact = () => {
  document.title='GoMarkho-Contact Page'

  return (
    <main>
      <ContactHeader />
      <ContactForm />
      <ContactFaq />
      <ContactMap />
    </main>
  )
}

export default Contact