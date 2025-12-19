"use client"

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {
    const router = useRouter();
    return (
        <div className='flex flex-col gap-4'>
            <div>Dashboard page</div>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button onClick={() => router.push("/dashboard/clients")}>Clients</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>B2B Clients</p>
                </TooltipContent>
            </Tooltip>
        </div>
    )
}

export default page