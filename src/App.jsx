import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Todo from './Todo'
import Bio from './Bio'
import Count from './count'
import Users from './Users'


function App() {
  const [count, setCount] = useState(0)
  const Names = ['Anas', 'Muaz', 'Nahin', 'Shihab', 'Jahed']

  const Datas = [
    { name: 'Jahed Hossen', Age: 22 },
    { name: 'Md Anas', Age: 21 },
    { name: 'Muaz', Age: 23 },
    { name: 'Koba Samsu', Age: 32 },
  ]
  return (
    <>
      {/* {Names.map(name =><Todo Name={name}></Todo>)}
     {Datas.map(data=><Bio singer={data}></Bio>)}
      */}
      <Count></Count>
      <Users></Users>
    </>
  )
}

export default App
