import Sem_bannerscontent from '@/components/containers/service/Marketing/sem/Sem_bannerscontent'
import Sem_content from '@/components/containers/service/Marketing/sem/Sem_content'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'

const page = () => {
  return (
    <div className="my-app">
      
   
      <Header/>
    <Sem_bannerscontent/>
    <Sem_content/>
     <main>
        <Footer/>
     </main>
    </div>
  )
}

export default page