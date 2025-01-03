import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AuthorCard = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12 '>
      <div className='flex items-center animation-fadeIn'>


        <Image className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-blue-500"
        src="/image/model.jpeg" alt="Author Image"
        width={200} height={200}/>
        <div>
          <h3 className='text-xl font-bold'>Basma Khan</h3>
        <p className='text-slate-500'>Frontend Developer </p>
        
        </div>
      </div>


     <div className='mt-4 flex space-x-3'>
      <Link href='#' className='px-4 py-2 text-white bg-pink-600 rounded-md hover:bg-blue-200 transition duration-300'>
      Facebook
      </Link>
      <Link href='#' className='px-4 py-2 text-white bg-pink-600 rounded-md hover:bg-blue-200 transition duration-300'>
      GitHub
      </Link>
      <Link href='#' className='px-4 py-2 text-white bg-pink-600 rounded-md hover:bg-blue-200 transition duration-300'>
      Linkedin
      </Link>
     </div>
    </div>
  )
}

export default AuthorCard
