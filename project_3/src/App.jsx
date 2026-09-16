import './App.css'
import { useState } from 'react'
    

function App() {
  const [color, setColor] = useState("gray");

  const bg = document.querySelector("body")
  bg.style.backgroundColor = color

  const red = () => setColor("red")
  const blue = () => setColor("blue")
  const green = () => setColor("green")
  const olive = () => setColor("olive")
  const gray = () => setColor("gray")
  const yellow = () => setColor("yellow")
  const pink = () => setColor("pink")
  const purple = () => setColor("purple")
  const cyan = () => setColor("cyan")
  const white = () => setColor("white")
  const black = () => setColor("black")



  return (
    <>
    <div className='mt-60 ml-5 border-2 border-black rounded-xl p-4 w-30/31 inline-flex space-x-10'>  
      <button onClick={red}  className='w-20 h-10 rounded-xl flex justify-center items-center bg-red-500'>Red</button>
      <button onClick={blue} className='w-20 h-10 rounded-xl flex justify-center items-center bg-blue-500'>blue</button>
      <button onClick={green} className='w-20 h-10 rounded-xl flex justify-center items-center bg-green-500'>green</button>
      <button onClick={olive} className='w-20 h-10 rounded-xl flex justify-center items-center bg-olive-500'>olive</button>
      <button onClick={gray} className='w-20 h-10 rounded-xl flex justify-center items-center bg-gray-500'>gray</button>
      <button onClick={yellow} className='w-20 h-10 rounded-xl flex justify-center items-center bg-yellow-500'>yellow</button>
      <button onClick={pink} className='w-20 h-10 rounded-xl flex justify-center items-center bg-pink-500'>pink</button>
      <button onClick={purple} className='w-20 h-10 rounded-xl flex justify-center items-center bg-purple-500'>purple</button>
      <button onClick={cyan} className='w-20 h-10 rounded-xl flex justify-center items-center bg-cyan-500'>cyan</button>
      <button onClick={white} className='w-20 h-10 rounded-xl flex justify-center items-center bg-white'>white</button>
      <button onClick={black} className='w-20 h-10 rounded-xl flex justify-center items-center text-white bg-black'>black</button>
      
    </div>
    </>
  )
}

export default App
