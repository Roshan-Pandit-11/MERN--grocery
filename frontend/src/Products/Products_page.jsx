


import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchcall () ;
  } , []) ;

  const fetchcall = async() => {
    const response = await fetch("http://localhost:3001/product/" , {
      method : "GET" 
    })
    const responsedata = await response.json() ;
    setProducts(responsedata.products) ;
    if (products == []){
      setError(true) ;
    }
  }
  

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {(error ? (
            <div>Server Down</div>
           ) :(
                 products.map((product) => (
              
                <a key={product._id} href= {`/product/${product._id}`} className="group"> 
              <img
                src={`data:image/jpeg;base64,${product.image}`}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              
              <p className="mt-1 text-sm text-gray-500"> stocks available: {product.stock}</p>
              <button className="mt-2 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                Add to cart
              </button>
            </a>
              
          ))
           )
           )}
        </div>
      </div>
    </div>
  )
}
