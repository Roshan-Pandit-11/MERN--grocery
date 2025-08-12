import React, { useEffect, useState } from "react";
import { useNavigate , useParams } from "react-router-dom";

const ProductInput = () => {
  const [name , setname] = useState('') ;
  const [description , setdescription] = useState('') ;
  const [price , setprice] = useState(0) ;
  const [catogery , setcatogery] = useState('') ;
  const [stock , setstock] = useState(0) ;
  const [image , setimage] = useState(null) ;
  const [responseMsg , setresponseMsg] = useState('') ;
  const [isedit , setisedit] = useState(false) ;
  const [path , setpath] = useState(null) ;
  const navigate = useNavigate() ;

  const {id} = useParams() ;
  useEffect(() => {
    if (id){
      setisedit(true) ;
    }else{
      setisedit(false) ;
    }
  } , [])

  useEffect(() => {
       let timer ;
        if (responseMsg){
           timer = setTimeout(() => {
          if (path){
            navigate(path)
          }else{
            navigate(path) ;
          }
        }, 1000);
        }
        return () => {
          clearTimeout(timer) ;
        }
      }, [path ,navigate ]) ;

  async function handlesubmit (e) {
    e.preventDefault() ;
    const formdata = new FormData() ;
    formdata.append("name" , name) ;
    formdata.append("description" , description) ;
    formdata.append("price" , price) ;
    formdata.append("catogery" , catogery) ;
    formdata.append("stock" , stock) ;
    formdata.append("image" , image) ;

    let responsedata ;
    if (!isedit){
    const response = await fetch("http://localhost:3001/product/create" , {
      method : "POST" ,
      headers : {
        "token" : localStorage.getItem("token") 
      } ,
      body : formdata  
    })
     responsedata = await response.json() ;
    } 
    else{
      const response = await fetch(`http://localhost:3001/product/update/${id}` , {
      method : "PUT" ,
      headers : {
        "token" : localStorage.getItem("token") 
      } ,
      body : formdata  
    })
     responsedata = await response.json() ;
    }

    setname('') ;
    setdescription('') ;
    setprice(0) ;
    setcatogery('') ;
    setstock('') ;
    setimage(null) ;
    setisedit(false) ;
    setresponseMsg(responsedata.message) ;
    {isedit ? setpath("/profile") : setpath("/")}
  }

  return(
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-400 via-green-500 to-lime-600 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-[1.01]">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8 tracking-tight">
          {isedit ? ("Edit Your Grocery Item") : ("Post Your Grocery Item")}
        </h1>

        {responseMsg ? (
          <div className={`mt-6 p-4 rounded-lg text-center font-bold text-xl transition-all duration-300 ease-in-out
                           ${responseMsg.includes('success') || responseMsg.includes('created') ? 'bg-green-100 text-green-700 shadow-md' : 'bg-red-100 text-red-700 shadow-md'}`}>
            {responseMsg}
          </div>
        ) : (
          <form onSubmit={handlesubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setname(e.target.value)}
                className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500
                           transition duration-200 ease-in-out text-gray-800 text-base"
                placeholder="e.g., Organic Apples"
              />
            </div>

            <div>
              <label htmlFor="Description" className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <input
                type="text"
                id="Description"
                required
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500
                           transition duration-200 ease-in-out text-gray-800 text-base"
                placeholder="e.g., Fresh, crisp, and locally grown"
              />
            </div>

            <div>
              <label htmlFor="Price" className="block text-sm font-semibold text-gray-700 mb-2">
                Price
              </label>
              <input
                type="number"
                min={0}
                id="Price"
                value={price}
                onChange={(e) => setprice(e.target.value)}
                className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500
                           transition duration-200 ease-in-out text-gray-800 text-base"
                placeholder="e.g., 2.99"
              />
            </div>

            <div>
              <label htmlFor="Catogery" className="block text-sm font-semibold text-gray-700 mb-2">
                Category:
              </label>
              <input
                type="text"
                placeholder="fruits/vegetables/dairy"
                required
                value={catogery}
                onChange={(e) => setcatogery(e.target.value)}
                className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500
                           transition duration-200 ease-in-out text-gray-800 text-base"
              />
            </div>

            <div>
              <label htmlFor="Stock" className="block text-sm font-semibold text-gray-700 mb-2">
                Stock
              </label>
              <input
                type="number"
                min={0}
                id="Stock"
                required
                value={stock}
                onChange={(e) => setstock(e.target.value)}
                className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500
                           transition duration-200 ease-in-out text-gray-800 text-base"
                placeholder="e.g., 100"
              />
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-semibold text-gray-700 mb-2">
                Select image:
              </label>
              <input
                type="file"
                id="image"
                required
                accept="image/*"
                onChange={(e) => setimage(e.target.files[0])}
                className="mt-1 block w-full text-gray-700 text-base file:mr-4 file:py-2 file:px-4
                           file:rounded-full file:border-0 file:text-sm file:font-semibold
                           file:bg-green-100 file:text-green-700 hover:file:bg-green-200 cursor-pointer
                           transition duration-200 ease-in-out"
              />
              {image && (
                <p className="mt-2 text-sm text-gray-500">Selected: {image.name}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg
                         transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
                         flex items-center justify-center"
            >
              
              {isedit ? ("Update Product") : ("Upload Product")}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default ProductInput ;