import { IPost } from "../types/post"

interface PostProps {
  data:IPost
  delete_:(id:number) => void
  update:(property:string, newContent:string, post:IPost) => void
}

export default function Post(props:PostProps) {

  return(
    <div className="border border-white rounded-lg text-white w-[60%] backdrop-blur-[2px]">
      <div className="p-3 text-2xl w-ful flex justify-between border-b">
        <input className="bg-transparent" defaultValue={props.data.title} onChange={(e) => props.update("title",e.target.value, props.data)}/>
        <span onClick={() => props.delete_(props.data.id)} className="cursor-pointer">X</span>
      </div>
      <span className="p-3 block">
        {props.data.content}
      </span>
    </div>
  )
}