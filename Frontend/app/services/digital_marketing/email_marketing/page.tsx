import AboutCraft from '@/components/containers/about/AboutCraft'
import Email_bannerscontent from '@/components/containers/service/Marketing/email_marketing/Email_bannerscontent'
import Email_details from '@/components/containers/service/Marketing/email_marketing/Email_details'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import React from 'react'

const page = () => {
  return (
    <div className="my-app">
      
    <Header/>
    <Email_bannerscontent/>
    <Email_details/>
     <main>
        <Footer/>
     </main>
    </div>
  )
}

export default page