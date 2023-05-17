import Link from "next/link";

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className="flex flex-start flex-col w-full max-w-full">
      <h1 className="heading text-left">
          {type} post
      </h1>
      <p className="description text-left max-w-md">{type} and share prompts!</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-7 mt-10 w-full max-w-2xl form-bg">
        <label>
          <span className="font-wix font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea 
            className="form-textarea" 
            value={post.prompt} 
            onChange={(event)=>setPost({...post, prompt: event.target.value})}
            placeholder="Add your prompt here"
            required
          />
        </label>
        <label>
          <span className="font-wix font-semibold text-base text-gray-700">
            Prompt tag
            <span className="font-normal">(#idea, #development)</span>
          </span>
          <input 
            className="form-input" 
            value={post.tag} 
            onChange={(event)=>setPost({...post, tag: event.target.value})}
            placeholder="#tag"
            required
          />
        </label>
      </form>
    </section>
  )
}

export default Form;