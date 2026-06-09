import React from 'react'

const App = () => {

  const btnClicked = () => {
    console.log('button is clicked');

  }

  function inputChanging() {
    console.log("user is typing");
  }


  const pageScrolling = (elem) => {
    if (elem > 0) {
      console.log('sidha scrolling');
    } else {
      console.log('ulta scrolling');
    }
  }
  return (
    <div onWheel={(elem) => {
      pageScrolling(elem.deltaY)
    }}>
      <div className='h-[100vh] w-full bg-red-500'></div>
      <div className='h-[100vh] w-full bg-pink-500'></div>
      <div className='h-[100vh] w-full bg-yellow-500'></div>





      {/* <div onMouseMove={(elem)=>{
        console.log(elem.clientY);
        
      }} 
      className='h-52 w-52 bg-red-500'>
      </div> */}


      {/* <input onChange={(elem)=>{
        console.log(elem.target.value);
        
      }} type="text" placeholder='Enter Name' className='border-2 px-5 py-3' /> */}


      {/* <input onChange={inputChanging} type="text" placeholder='Enter Name' className='border-2 px-5 py-3' /> */}


      {/* <button className='bg-amber-400' onClick={()=>{
        console.log('button was clicked');
      }}>Click here</button>
      <button className='bg-amber-400' onClick={btnClicked}>Click here</button> */}

      {/* <input onClick={()=>{
        console.log('input par click hua hai');
        
      }} type="text" placeholder='Enter Name' className='border-2 px-5 py-3' /> */}
    </div>
  )
}

export default App