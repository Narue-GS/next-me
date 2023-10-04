import Image from 'next/image'
import Header from './components/header'
import Banner from './components/banner'
import PostContainer from './components/postContainer'
import Footer from './components/footer'
import { IPost } from './types/post'

export default function Home() {
  const posts:IPost[] = [
    {
      id:0,
      title:"Chega de palhaços!",
      content:`Depois de tantos palhaços na nossa política, hoje temos como presidente da república, Danilo Gentili, um comediante de verdade
      (sem ofença aos palhaços profissionais)`
    }
  ]
  return (
    <>
      <Header/>
      <Banner/>
      <PostContainer posts={posts}/>
      <Footer/>
    </>
  )
}
