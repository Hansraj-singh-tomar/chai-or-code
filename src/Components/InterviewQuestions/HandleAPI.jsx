// import React from 'react'

import { useEffect, useState } from "react"
import axios from 'axios'

const HandleAPI = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("");

  useEffect(() => {

    // race condition ko avoid karne ke likha hai ye
    // input par type karne par bhut sari request gyi hai server par but mujhe jo response chahiye vo updated vala chahiye uss chij ke liye ham ye likh rhe hai 
    // first req ka res pehle aaye then second ka second and so on ...
    // jab kabhi ham async ka use karenge to hoga ye ki hamne req bheji or purani req aa response hame sabse last me mil rha hai to vo nhi hona chahiye hame updated req/res ka data hi chahiye 
    // purani API ki call ko cancel karne ke liye ham debouncing ka use karte hai 
    const controller = new AbortController()
      
      // ;()() => means that purana jo code and this IIFE jo start hua hai isme hamara code differentiate nhi kar pata hai 
      // ki purana code kha end ho rha hai that is why we use semicolon before IIFE
    ; (
      async () => {
        try {
            setLoading(true)
            setError(false)
            const response = await axios.get(`/api/products?search=${search}`, {
              signal: controller.signal
            })
            setData(response.data);
            setLoading(false)
        } catch (error) {
            if (axios.isCancel(error)) {
              console.log("Request", error.message);
              return;
            }
            setError(true)
            setLoading(false)
          }
      }  
    )()

    return (() => {
      controller.abort();
    })
      
  }, [search])

  // custom hook
  // const [data, error, loading] = CustomReactQuery("/api/products")


  // if (error) {
  //   return <h1>Something went wrong ...</h1>
  // }

  // if (loading) {
  //   return <h1>Loading ...</h1>
  // }


  return (
    <div>
      {loading && (<><h1>Loading ...</h1></>)}
      {error && (<><h1>Something Went Wrong ...</h1></>)}
      <h1>Handle API</h1>
      <label>Search Product: </label>
      <input type="text" placeholder="Search Your Product" value={search} onChange={(e) => setSearch(e.target.value)}/>
      {
        data.map((item) => {
          return (
            <div key={item.id}>
              <p>{ item.name }</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default HandleAPI


// const CustomReactQuery = (urlPath) => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(false)
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     (
//       async () => {
//         try {
//             setLoading(true)
//             setError(false)
//             const response = await axios.get(urlPath)
//             setData(response.data);
//             setLoading(false)
//         } catch (error) {
//             setError(true)
//             setLoading(false)
//           }
//       }
//     )()
//   }, [])

//   return [data, error, loading];
// }

// signal - purani req jitni bhi hai or agar nyi req same url par hit hui hai to vo unhe cancel kar dega or usko send karta hai catch ke andar