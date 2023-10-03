import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className='bg-gradient-to-b text-center from-[rgb(47, 5, 75)] to-white p-4'>
        <h1>Next Me</h1>
      </header>

      <section className='text-center'>
        <h1 className='text-5xl tracking-widest'>Welcome!</h1>
        <span className='tracking-widest'>enjoy the future</span>
      </section>

      <section className='flex justify-center my-10'>
        <input className='border outline-none rounded-full w-[50%] p-2' type="text" placeholder='new post!'/>
        <button>Add</button>
      </section>

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
