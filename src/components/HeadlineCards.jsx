import React from 'react'

const HeadlineCards = () => {
   

   
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/*Card*/}
        <div className='rounded-xl relative'>
            {/*Overlay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Dosa</p>
                <p className='px-2'>Breakfast, South Indian</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4' onClick={btnClick}>Order Now</button>
            </div>
            <img className='max-h-[168px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1643268972535-a2b100ff3632?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="/" />
        </div>
                {/*Card*/}
                <div className='rounded-xl relative'>
            {/*Overlay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Biryani</p>
                <p className='px-2'>Specials</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4' onClick={btnClick}>Order Now</button>
            </div>
            <img className='max-h-[168px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/5410401/pexels-photo-5410401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
        </div>
                {/*Card*/}
                <div className='rounded-xl relative'>
            {/*Overlay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Desserts</p>
                <p className='px-2'>Bakery,Ice Creams</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4' onClick={btnClick}>Order Now</button>
            </div>
            <img className='max-h-[168px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="/" />
        </div>
    </div>
  )
     
  function btnClick() { window.open("https://www.youtube.com/watch?v=oHg5SJYRHA0");}
}

export default HeadlineCards