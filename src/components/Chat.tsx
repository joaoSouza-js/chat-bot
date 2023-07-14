'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import{ useChat } from 'ai/react'

export function Chat(){
     
    const {messages, input, handleInputChange, handleSubmit} = useChat({
        api: 'api/chat '
    })
    return (
        <Card className='w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content] px-3'   >
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>using vercel SDK to create  a chat bot</CardDescription>
        </CardHeader>
        <CardContent className='space-y-3 text-slate-600 overflow-auto '>
            {
                messages.map(message => (
                    <div key={message.id}  className='flex gap-3  text-sm'>
                        {
                            message.role === 'user' && (
                                <Avatar>
                                    <AvatarFallback>DF</AvatarFallback>
                                    <AvatarImage
                                    src='https://source.unsplash.com/random/200x200/?woman'
                                    />
                                </Avatar>

                            )
                      
                        }

                        {
                            message.role === 'assistant' && (
                                <Avatar>
                                    <AvatarFallback>DF</AvatarFallback>
                                    <AvatarImage
                                    src='https://source.unsplash.com/random/200x200/?tech'
                                    />
                                </Avatar>

                            )
                        }

                        <p className='leading-relaxed'>
                        <span className='block font-bold text-slate-800'>{message.role === 'user' ? 'Usuário:' : 'Ia:' }</span>
                            {message.content}
                        </p>
                    </div>

                ))
            }
         

        
        </CardContent>
        <CardFooter>
            <form 
                 className='space-x-2 flex w-full'
                onSubmit={handleSubmit}
            >
                <Input 
                    value={input} 
                    placeholder='how can i help you'
                    onChange={handleInputChange}
                />
                <Button type='submit'>Send</Button>


            </form>

        </CardFooter>
      </Card>
    )
}