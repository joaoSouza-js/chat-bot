import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import NextIconSvg from '../../public/next.svg'
import { Chat } from '@/components/Chat'

export default function Home() {
  return (
    <div className='flex min-h-screen bg-zinc-900 justify-center items-center '>
      <Chat/>

    </div>
  )
}
