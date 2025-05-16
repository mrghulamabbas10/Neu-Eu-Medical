import ConsentFormPage from '@/components/contact'
import Footer2 from '@/layout/footer-2'
import Navbar from '@/layout/navbar'
import React from 'react'

export default function Page() {
    return (
        <>
            <div className='bg-[#FFE6DF] md:rounded-b-[10%] rounded-b-[5%]'>
                <Navbar />
                <ConsentFormPage />
            </div>
            <Footer2 className="bg-[#FFE6DF] mt-5" />
        </>
    )
}
