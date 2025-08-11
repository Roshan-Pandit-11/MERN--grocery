
const backupProducts = [
  {
    id: 1,
    name: '',
    href: '/product/1',
    price: 'Rs48',
    imageSrc: '',
    stock: 10,
    imageAlt: "lady's finger .",
  },
  {
    id: 2,
    name: '',
    href: '#',
    price: 'Rs35',
    imageSrc: '',
    stock: 20,
    imageAlt: 'bandi hai apni gobhi.',
  },
  {
    id: 3,
    name: '',
    href: '#',
    price: 'Rs89',
    imageSrc: '',
    stock: 30,
    imageAlt: 'good stuff.',
  },
  {
    id: 4,
    name: '',
    href: '#',
    price: 'Rs35',
    imageSrc: '',
    stock: 40,
    imageAlt: 'alu hmm bas alu.',
  },
  {
    id: 5,
    name: '',
    href: '#',
    price: 'Rs64',
    imageSrc: '',
    stock: 50,
    imageAlt: 'Ganj.. i mean gajar.',
  },
  {
    id: 6,
    name: '',
    href: '#',
    price: 'Rs39',
    imageSrc: '',
    stock: 60,
    imageAlt: 'karela khaya kar',
  },
  {
    id: 7,
    name: '',
    href: '#',
    price: 'Rs50',
    imageSrc: '',
    stock: 70,
    imageAlt: 'invisible tamatar.',
  },
  {
    id: 8,
    name: '',
    href: '#',
    price: 'Rs32',
    imageSrc: '',
    stock: 80,
    imageAlt: 'Sabzi ki pic.',
  },
]

import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);       //iski zaroorat nhi hai bus testing ke liye use kiya tha ai se nhi kiya hai tere hi code ko dekh ke kiya hai ye sara niche ka
    useEffect(() => {
    fetch('http://localhost:3001/product/')                 // Khud se kiya hai bhai matlab tu sikh sakta hai to me nhi sikh sakta kya
      .then((res) => {                                      //Ye YouTube se dekha hai
        return res.json();                                
      })
      .then((data) => {
          setProducts(data.products);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setError(true); 
      });
  }, []);




  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {(error ? backupProducts : products).map((product) => (       // Ye bhi tere code se aya hai mat bolio ai ka hai
            <a key={product._id || product.id} href={product.href || {/*link*/}} className="group"> {/* Product Link daldio href me kese dale ga dekh lio */}
              <img
                alt={product.imageAlt}

                src={product.image ? `data:image/jpeg;base64,${product.image}`: product.imageSrc || ''}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              
              <p className="mt-1 text-sm text-gray-500"> Number of stocks available: {product.stock}</p>
              <button className="mt-2 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                Add to cart
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
