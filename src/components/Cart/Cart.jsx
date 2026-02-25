import React from 'react'

const Meals = [
  {
    id: 1,
    name: "Masala Dosa",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
    description: "Crispy rice crepe filled with spiced potato masala.",
  },
  {
    id: 2,
    name: "Paneer Tikka",
    image: "https://images.unsplash.com/photo-1701579231378-3726490a407b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuaXJ8ZW58MHx8MHx8fDA%3D",
    description: "Grilled cottage cheese cubes marinated in spicy yogurt mix.",
  },
  {
    id: 3,
    name: "Margherita Pizza",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFyZ2hlcml0YSUyMFBpenphfGVufDB8fDB8fHww",
    description:
      "Classic pizza topped with fresh mozzarella, basil, and tomato sauce.",
  },
]

function Cart() {
  return (
    <div className='w-full h-screen flex flex-col gap-2' >
      
      {Meals.map((meal)=>{
        <div className='w-60 h-60 border border-orange-400 flex gap-3' >
          <img className='rounded-full object-contain' src={meal.image} alt="" />
          <div className='flex gap-2' >
            <h3 className='rounded px-2 py-1 bg-gray-600/40' >{meal.name}</h3>
            <h3 className='rounded px-2 py-1 bg-gray-600/40' >{meal.price}</h3>
          </div>
        </div>
      })}
    </div>
  )
}

export default Cart
