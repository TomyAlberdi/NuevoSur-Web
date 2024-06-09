import '@/App.scss'
import CustomRouter from "@/routes.jsx";
import { useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import ProductContextComponent  from '@/Hooks/ProductContextComponent';

function App() {

  useEffect(() => {
    register()
  }, [])

  return (
    <div className="App">
      <ProductContextComponent>
        <CustomRouter />
      </ProductContextComponent>
    </div>
  )
}

export default App
