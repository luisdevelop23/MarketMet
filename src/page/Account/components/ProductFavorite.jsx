import React from 'react'

const ProductFavorite = () => {
  return (
    <div className='flex  rounded-md p-2 bg-zinc-100'>
    <div className='mr-4'>
      <img
        src="https://images.pexels.com/photos/1118875/pexels-photo-1118875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""  className="h-[100px] w-[100px] rounded-lg"
      />
    </div>
    <div>
      <h1 className='nnf-semi-bold text-xl'>Product name</h1>
      <h2 className='text-lg'>Price</h2>
    </div>
  </div>
  )
}

export default ProductFavorite