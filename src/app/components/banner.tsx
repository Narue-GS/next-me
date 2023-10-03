export default function Banner() {
  return(
    <section className='text-center mt-5'>
      <h1 className='text-5xl tracking-widest'>Welcome!</h1>
      <span className='tracking-widest'>enjoy the future</span>
      <div className='flex justify-center my-10'>
        <input className='border outline-none rounded-full w-[50%] p-2 text-balck' type="text" placeholder='new post!'/>
        <button>Add</button>
      </div>
    </section>
  )
}