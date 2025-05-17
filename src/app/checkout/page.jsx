import CheckoutPage from '@/components/checkout'
import Navbar from '@/layout/navbar'
import React from 'react'

export default function Page() {
    return (
        <div>
            <Navbar className={ "bg-[#FFE6DF]" } />
            <div className='md:px-8 px-3'>
                <CheckoutPage />
            </div>
        </div>
    )
}
