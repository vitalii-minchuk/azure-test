"use client"

import { getCsrfToken, signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export const TheHeader = () => {
    const session = useSession()
    console.log('%cpage.tsx line:7 object', 'color: #007acc;', session);
    const socialAction = () => {
    signIn('azure-ad', {
      redirect: false,
    })
      .then((callback) => {
        console.log('_______________11__________', callback);
      })
  
  };
  return (
    <div className="p-6 flex justify-between">
      <div className="flex gap-4">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/new">new</Link>
      </div>
        {session.status === 'authenticated' ? (
          <button className="cursor-pointer" onClick={() => signOut()}>sign out</button>
        ) : (
          <button className="cursor-pointer" onClick={socialAction}>sign in</button>

        )}
    </div>
  )
}
