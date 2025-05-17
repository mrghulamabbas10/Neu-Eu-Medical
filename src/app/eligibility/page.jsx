import React from 'react'
import Navbar from '@/layout/navbar'
import Eligibility from '@/components/eligibility'

export default function Page() {
    return (
        <div>
            <Navbar className={ "bg-[#FFE6DF]" } />
            <div className='md:px-8 px-3'>
                <Eligibility />
            </div>
        </div>
    )
}
