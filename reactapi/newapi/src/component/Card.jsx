import axiso from 'axios'
import React, { useEffect,useState } from 'react'


const Card = () => {
    const [user,setUser] = useState([])
    useEffect(()=>{
        axiso.get("https://65bc9b97b51f9b29e931d808.mockapi.io/talha2").then((res) => setUser(res.data));
        getData();
    }, []);

    const getData = () =>{
        axiso.get("https://65bc9b97b51f9b29e931d808.mockapi.io/talha")
        .then((res)=> setUser(res.data));
    };

    const deleteUser = (id) =>{
        axiso.delete(`https://65bc9b97b51f9b29e931d808.mockapi.io/talha/${id}`).then(( )=> {
            setUser(user.filter((item) => item.id !== id));
        })
        .catch((error)=>{
            console.log(error);
        });
    };
  return (
    <div className=' flex justify-between flex-wrap'>
        {user.map((item)=>{
            return(
                <div key={item} className=' w-[300px]'>
                    
                    <h1>{item.talha}</h1>
                    <h2>{item.talhahussain}</h2>
                    <button onClick={deleteUser} className=' bg-slate-700'>delete</button>
                </div>
            )
        })}
      
    </div>
  )
}

export default Card
