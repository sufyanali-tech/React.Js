import { createRoot } from 'react-dom/client'
import './index.css'
import {Card1, Card2, Card3} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Card1 />
    <Card2 />
    <Card3 />   
  </>
)
