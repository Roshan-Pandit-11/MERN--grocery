import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"

const UserAccountPage = () => {
  const [grocery , setgrocery] = useState(true) ;
  const [loading , setloading] = useState(true) ;
  const [myproducts , setmyproducts] = useState([]) ;
  const navigate = useNavigate() ;

  useEffect(() => {
    fetchdata() ;
  }, []) ;

  const fetchdata = async() => {
    const response = await fetch("http://localhost:3001/user/me" , {
      method : "GET" , 
      headers : {
        "token" : localStorage.getItem("token")
      }
    })
    const responsedata = await response.json() ;
    setmyproducts([]) ;
    setmyproducts(responsedata.myproducts) ;
    if (responsedata.myproducts.length == 0){
      setgrocery(false) ;
    }
    setloading(false) ;
  }

  async function deletegrocery (id) {
    const response = await fetch(`http://localhost:3001/product/delete/${id}` , {
      method : "DELETE" ,
      headers : {
        "token" : localStorage.getItem("token")
      }
    })
    const responsedata = await response.json() ;
    fetchdata() ;
  }

  async function editgrocery(id) {
    navigate(`/product/edit/${id}`)
  }

    // Mock user data 
  const user = {
    name: "Mokshika",
    email: "mokshika@gmail.com",
    phone: "+(91) 7123456789",
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-6"> {/* Updated gradient colors */}
    <div className="mt-10 max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-6 space-y-6">
      <div className="flex items-center justify-between border-b-2 border-indigo-500 pb-4"> {/* Changed border color and thickness */}
        <h2 className="text-3xl font-extrabold text-indigo-800">Personal Details</h2> {/* Larger, bolder text */}
        <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-semibold transition-colors duration-200">Edit Profile</a>
      </div>

      <div className="bg-indigo-50 p-4 rounded-lg shadow-inner space-y-2">
        <p className="text-lg font-semibold text-indigo-900">{user.name}</p>
        <p className="text-sm text-indigo-700">{user.email}</p>
        <p className="text-sm text-indigo-700">{user.phone}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
        <div className="bg-white border border-indigo-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow">
          <h3 className="text-md font-semibold text-indigo-800 mb-2">Edit Address</h3>
          <ul className="space-y-1 text-indigo-600 text-sm">
            <li><a href="#" className="hover:underline">Delivery Addresses</a></li>
            <li><a href="#" className="hover:underline">Email Addresses</a></li>
          </ul>
        </div>
        <div className="bg-white border border-indigo-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow">
          <h3 className="text-md font-semibold text-indigo-800 mb-2">View Orders</h3>
          <ul className="space-y-1 text-indigo-600 text-sm">
            <li><a href="#" className="hover:underline">Past Orders</a></li>
            <li><a href="#" className="hover:underline">Pending Orders</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="flex mt-10 justify-center">
      <h1 className="font-serif font-bold text-4xl text-purple-700 tracking-wide">My Grocery</h1> {/* Larger font size and different color */}
    </div>
    
    <div className="mt-8 px-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {(grocery ? (
        loading ? (
          <div className="text-center text-xl text-gray-600 col-span-full">Loading...</div>
        ) : (
          myproducts.map((product) => (
           <div key={product._id} className="group border rounded-xl border-gray-300 shadow-sm p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
             <a href={`/product/${product._id}`} className="group border rounded-xl border-gray-300 shadow-sm p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <img
                src={`data:image/jpeg;base64,${product.image}`}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-90 transition-opacity"
              />
              <div className="p-2">
                <h3 className="mt-2 text-md font-semibold text-gray-800">{product.name}</h3>
                <p className="mt-1 text-xl font-bold text-gray-900">${product.price}</p>
                <p className="mt-1 text-sm text-gray-500">Stocks available: {product.stock}</p>
                
                
              </div>
            </a>
            <div className="flex justify-between items-center mt-4 gap-4">
                  <button className="flex-1 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-200"
                  onClick={() => editgrocery(product._id)} 
                  >
                    Edit
                  </button>
                  <button className="flex-1 py-2 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 transition-colors duration-200"
                  onClick={() => deletegrocery(product._id)}
                  >
                    Delete
                  </button>
                </div>
           </div>
          ))
        )
      ) : (
        <div className="text-center text-xl text-gray-600 col-span-full">You do not have any grocery listings.</div>
      ))}
    </div>
  </div>
);
};

export default UserAccountPage;
