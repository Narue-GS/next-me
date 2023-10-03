import Image from 'next/image'
import Header from './components/header'
import Banner from './components/banner'
import PostContainer from './components/postContainer'

export default function Home() {
  return (
    <>
      <Header/>

      <Banner/> 

      <PostContainer/>

      <section>
        <div>
          <h1>Chega de palahços</h1>
          <span>
            Depois de tantos palhaços na nossa política, hoje temos como presidente da república, Danilo Gentili, um comediante de verdade
            (sem ofença aos palhaços profissionais)
          </span>
        </div>
      </section>

      <footer>
        <span>enjoy the future!</span>
      </footer>
    </>
  )
}
