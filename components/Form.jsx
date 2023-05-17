import Link from "next/link";

const Form = ({type, post, setPost, isSubmitting, handleSubmit}) => {
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
            Tag {` `}
            <span className="font-normal text-sm">(#idea, #javascript, #education)</span>
          </span>
          <input 
            className="form-input" 
            value={post.tag} 
            onChange={(event)=>setPost({...post, tag: event.target.value})}
            placeholder="#tag"
            required
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button 
            type="submit"
            disabled={isSubmitting}
            className="px-5 py-1.5 text-sm bg-primary rounded-full text-white border-[1px] border-primary hover:bg-transparent hover:text-primary transition"
          >
            {isSubmitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form;