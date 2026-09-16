import './App.css'
import Card from './Card.jsx'

function App() {
    const object = {
        name:"chahat vora"
      }

    const arr1 = [1,2,3]
  

  return (

    <>
    
    <h1 className='bg-red-100 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
    <Card username="Girl 1" btnText='Click me' var1 = {object}/>
    <Card username="Girl 2" var2 = {arr1}/>
    </>
   
  )
}

export default App
