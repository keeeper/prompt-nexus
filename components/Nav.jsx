"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setupProviders = async() => {
      const response = await getProviders();
      setProviders(response);
    }
    setupProviders();
  }, []);

  return (
    <nav className="w-full flex-between pt-3 mb-16">
      <Link href="/" className="flex-center gap-2">
        <Image src="/images/logo.svg" width={50} height={50} alt="Logo" /><span className="font-wix text-bold text-lg">Prompt Nexus</span>
      </Link>
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="btn-dark">Create post</Link>
            <button type="button" onClick={signOut} className="btn-outline">Sign out</button>
            <Link href="/profile">
              <Image src={session?.user?.image || "/images/placeholder.png"} width={38} height={38} className="rounded-full" alt="Profile image" />
            </Link>
          </div>
        ) : (
          <>
            {providers && (Object.values(providers).map((provider)=>(
              <button type="button" key={provider.name} onClick={()=>signIn(provider.id)} className="btn-dark">
                Sign in
              </button>
            )))}
          </>
        )}
      </div>
      <div className="relative sm:hidden flex">
        {session?.user ? (
          <div className="flex" onClick={()=>setToggleDropdown((prev) => !prev)}>
            <Image src={session?.user?.image || "/images/placeholder.png"} width={38} height={38} className="rounded-full" alt="Profile image" onClick={()=>{}} />
            {toggleDropdown && (
              <div className="dropdown">
                <Link href="/profile" className="dropdown-link" onClick={()=>setToggleDropdown(false)}>
                  My Profile
                </Link>
                <Link href="/create-prompt" className="dropdown-link" onClick={()=>setToggleDropdown(false)}>
                  Create prompt
                </Link>
                <button type="button" onClick={()=>{
                  setToggleDropdown(false);
                  signOut();
                }} className="w-full mt-5 btn-dark">Sign out</button>
              </div>
            )}
          </div>
        ):(
          <>
            {providers && (Object.values(providers).map((provider)=>(
              <button type="button" key={provider.name} onClick={()=>signIn(provider.id)} className="text-sm py-2 px-6 border border-black bg-black rounded-full text-white hover:bg-transparent hover:text-black transition">
                Sign in
              </button>
            )))}
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav;