'use client'

import { useState } from "react";

import { IPost } from "../types/post";
import Post from "./post";

interface PostContainerProps {
  posts: IPost[]
}

export default function PostContainer(props:PostContainerProps) {
  const [postsState, setPostsState] = useState(props.posts)

  const [newPost, setNewPost] = useState({
    id:postsState.length,
    title:'',
    content:''
  })

  function createPost() {
    if(newPost.title) {
      if(newPost.content) {
        setPostsState([...postsState, newPost])
        setNewPost({
          id:newPost.id + 1,
          title:'',
          content:''
        })
        return
      }
      alert("Conteúdo inválido")
      return
    }
    alert("Título inválido")
  }

  function deletePost(id:number) {
    setPostsState(postsState.filter(post => post.id != id))
  }

  function updatePost(property:string, newContent:string, post:IPost) {
    setPostsState(
      postsState.map(i => {
        if(i.id == post.id) {
          if(property == "title"){
            i.title = newContent
          }
          if(property == "content") {
            i.content = newContent
          }
        }
        return i
      })
    )
    console.log(postsState);
    
  }

  return(
    <p></p>
    <section className="p-4 flex flex-col gap-5 mb-5 items-center">
      <div className='flex flex-col border rounded-lg mb-5 w-[50%]'>
        <input 
          value={newPost.title}
          onChange={(e) => setNewPost({...newPost, title: e.target.value})}
          className='font-bold bg-[rgba(255,255,255,0.1)] backdrop-blur-[2px] border outline-none w-1/2 rounded-lg rounded-b-none p-2 text-balck'
          placeholder='Title!'
        />
        <textarea
          value={newPost.content}
          onChange={(e) => setNewPost({...newPost, content: e.target.value})}
          className='bg-[rgba(255,255,255,0.1)] backdrop-blur-[2px] border outline-none rounded-tl-none w-full  rounded-r-none p-2 text-balck'
          placeholder='Content'
        />
        <button
          onClick={createPost}
          style={newPost.title && newPost.content ? {color:"rgb(0,255,0)"} : {color:"gray"}}
          className="p-2 text-center hover:bg-[rgba(0, 255, 0, 0.5)] hover:text-black rounded-lg  w-full rounded-t-none transition"
        >
          Add
        </button>
      </div>
      <div className="flex flex-col gap-5 items-center">
        {postsState.sort((a, b) => b.id - a.id).map(i => (
          <Post
            key={i.id}
            data={i}
            delete_={deletePost}
            update={updatePost}
          />
        ))}
        
      </div>
    </section>
  )
}