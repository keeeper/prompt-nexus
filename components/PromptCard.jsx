"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({post, handleTagClick, handleEdit, handleDelete}) => {
  const {data: session} = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState("");

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(()=>{setCopied("")}, 3000);
  }

  const handleNameClick = () => {
    if (post.creator._id === session?.user.id) return router.push("/profile");
    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  }
  return (
    <div className="prompt-card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex justify-start items-center gap-3 cursor-pointer" onClick={handleNameClick}>
          <Image src={post.creator.image} width={40} height={40} alt="User avatar" className="rounded-full object-contain" />
          <div className="flex flex-col">
            <h3 className="font-wix font-semibold text-gray-900">{post.creator.username}</h3>
          </div>
        </div>
        <div className="btn-copy" onClick={handleCopy}>
          <Image src={copied === post.prompt ? "/icons/tick.svg" : "/icons/copy.svg"} width={14} height={14} alt="Copy icon" />
        </div>
      </div>
      <p className="my-4 text-sm font-wix text-gray-700">{post.prompt}</p>
      <a 
        className={`font-inter text-sm cursor-pointer text-dark ${pathName.includes("/profile") ? 'pointer-events-none' : ''}`} 
        onClick={()=> handleTagClick && handleTagClick(post.tag)}>
          #{post.tag}
      </a>
      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className="flex-between gap-4 mt-5 pt-3 border-t border-gray-300 ">
          <button type="button" className="btn-link text-gray-600" onClick={handleEdit}>Edit</button>
          <button type="button" className="btn-link text-red" onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  )
}

export default PromptCard;