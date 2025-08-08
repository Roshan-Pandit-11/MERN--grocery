import React from "react";

const ProductInfo = () => {

  return(
    <div className='bg-green-100 flex flex-col gap-4'>

    <div className='flex justify-between gap-10 my-4  mx-64'>

      <div className='border-1 rounded-2xl w-[650px] h-[400px]'><img className='w-full h-full rounded-2xl' src="https://tse1.mm.bing.net/th/id/OIP.fhdDb7iNhT8P5XKqrkUN8QHaHa?pid=Api&P=0&h=180" alt="" /></div>

      <div className=' w-full flex flex-col justify-between'>
        <h2 className='font-bold text-3xl'>Name</h2>
        <h3 className='font-semibold text-2xl'>Price</h3>
        <p className='font-medium'>Stock</p>
        <div className='flex gap-4 '>
          <button className='w-40 py-2 font-semibold rounded-md border-2 bg-green-300'>Add to basket</button>
          <button className='w-40 py-2 font-semibold rounded-md border-2'>Save for later</button>
        </div>
        <h2 className='w-full flex justify-between px-10 border-2 py-5 font-semibold text-2xl rounded-lg'>
          <p>500 gm</p>
          <p>price</p>
        </h2>
        <h2 className='w-full flex justify-between px-10 border-2 py-5 font-semibold text-2xl rounded-lg'>
          <p>1 kg</p>
          <p>price</p>
        </h2>
      </div>
    </div>

    <div className='flex flex-col gap-3 mx-64 '>
      <h1 className='font-semibold text-lg '>Why choose bigbasket? </h1>
      <div className='grid gap-3 grid-cols-5 w-full '>

        <div className='border-1 bg-gray-100 rounded-lg py-6 flex flex-col justify-center items-center'>
          <div><img className='rounded-full w-10 h-10' src="https://tse2.mm.bing.net/th/id/OIP.CoFl2EoGrgCpQNa-PbZIagHaHa?pid=Api&P=0&h=180" alt="" /></div>
          <p className='font-medium text-sm'>Quality Products</p>
          <p className='font-light text-sm'>You can trust</p>
        </div>
        <div className='border-1 bg-gray-100 rounded-lg py-6 flex flex-col justify-center items-center'>
          <div><img className='rounded-full w-10 h-10' src="https://tse2.mm.bing.net/th/id/OIP.CoFl2EoGrgCpQNa-PbZIagHaHa?pid=Api&P=0&h=180" alt="" /></div>
          <p className='font-medium text-sm'>Quality Products</p>
          <p className='font-light text-sm'>You can trust</p>
        </div>
        <div className='border-1 bg-gray-100 rounded-lg py-6 flex flex-col justify-center items-center'>
          <div><img className='rounded-full w-10 h-10' src="https://tse2.mm.bing.net/th/id/OIP.CoFl2EoGrgCpQNa-PbZIagHaHa?pid=Api&P=0&h=180" alt="" /></div>
          <p className='font-medium text-sm'>Quality Products</p>
          <p className='font-light text-sm'>You can trust</p>
        </div>
        <div className='border-1 bg-gray-100 rounded-lg py-6 flex flex-col justify-center items-center'>
          <div><img className='rounded-full w-10 h-10' src="https://tse2.mm.bing.net/th/id/OIP.CoFl2EoGrgCpQNa-PbZIagHaHa?pid=Api&P=0&h=180" alt="" /></div>
          <p className='font-medium text-sm'>Quality Products</p>
          <p className='font-light text-sm'>You can trust</p>
        </div>
        <div className='border-1 bg-gray-100 rounded-lg py-6 flex flex-col justify-center items-center'>
          <div><img className='rounded-full w-10 h-10' src="https://tse2.mm.bing.net/th/id/OIP.CoFl2EoGrgCpQNa-PbZIagHaHa?pid=Api&P=0&h=180" alt="" /></div>
          <p className='font-medium text-sm'>Quality Products</p>
          <p className='font-light text-sm'>You can trust</p>
        </div>

      </div>
    </div>

    <div className=' mx-64'>
      <h1 className='font-semibold text-4xl'>Name</h1>
      <div className='border-1 p-5 rounded-2xl mt-4'>
        <h2 className='font-semibold text-lg'>About this product</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis voluptatem modi aperiam quod voluptates mollitia quia aspernatur, vero veniam in cum deleniti tempore dolores ullam numquam iusto excepturi. Voluptatem non, quod repudiandae dignissimos sunt sit minima. Magni architecto id consequuntur?</p>
      </div>
    </div>

   </div>
  )
}

export default ProductInfo ;