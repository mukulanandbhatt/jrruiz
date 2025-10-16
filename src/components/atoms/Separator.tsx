import React from 'react'
import { cn } from '../molecules/Button/CN'

export default function Separator({className}:{className?:string}) {
  return (
        <hr className={cn("w-full mt-5 mb-5",className)} />
  )
}
