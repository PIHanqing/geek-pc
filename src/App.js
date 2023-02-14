// 导入路由
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import { AuthRoute } from '@/components/AuthRoute'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes >
          <Route path='/*' element={
            <AuthRoute>
              <Layout/>
            </AuthRoute>
          } />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
