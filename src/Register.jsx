export default function Register() {
  const sharp=()=>{
    alert("Registered successfully")
  }
  return (
    <div className='bg-[url("https://wallpapers.com/images/hd/e-commerce-1920-x-1080-wallpaper-n3xlajipuhsi0vhg.jpg")] bg-cover bg-center h-screen flex justify-center items-center '>
    <div className='flex-col bg-white w-[25rem] p-5 border rounded-md'>
    <h1 className='font-bold flex justify-center items-center'>SIGN UP</h1>
    <div className='flex-col '>
       <h1>ENTER NAME</h1>
       <input type="text" id="text"placeholder="Enter Username" className='flex mt-1' />
    </div>
    <div className='flex-col'>
       CREATE PASSWORD<input type="password" id="pass"placeholder="Enter Ur Password" className='flex mt-1'/>
       </div> 
       <div className='flex-col'>
       CONFIRM PASSWORD<input type="password" id="pass"placeholder="Enter Ur Password" className='flex mt-1'/>
       </div> 
        
    <button type="submit" onClick={()=>sharp()} className='bg-cyan-600 flex items-center justify-center mt-3 ml-36 border border-black rounded-md text-white px-2 py-1'>SIGNUP</button>
    
    </div>

  </div>
  )
}
