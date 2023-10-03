interface PostProps {
  title:string
  content:string
}

export default function Post(props:PostProps) {
  return(
    <div className="border border-white rounded-lg">
      <h1 className="p-3 border-b">{props.title}</h1>
      <span className="p-3 block">
        {props.content}
      </span>
    </div>
  )
}