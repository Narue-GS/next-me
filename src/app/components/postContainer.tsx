import Post from "./post";

export default function PostContainer() {
  return(
    <section className="p-4 flex flex-col gap-5 mb-10">
      <Post
        title="Chega de palahços"
        content="Depois de tantos palhaços na nossa política, hoje temos como presidente da república, Danilo Gentili, um comediante de verdade
        (sem ofença aos palhaços profissionais)"
      />
      <Post
        title="Chega de palahços"
        content="Depois de tantos palhaços na nossa política, hoje temos como presidente da república, Danilo Gentili, um comediante de verdade
        (sem ofença aos palhaços profissionais)"
      />
      <Post
        title="Chega de palahços"
        content="Depois de tantos palhaços na nossa política, hoje temos como presidente da república, Danilo Gentili, um comediante de verdade
        (sem ofença aos palhaços profissionais)"
      />
    </section>
  )
}