import { Routes, Route } from 'react-router-dom';
import { Authorization } from '../../pages/authorization/authorization';
import { Main } from '../../pages/main/main';


export function App() {

  return (
    <>
      <Routes >
          <Route path="/" element={< Authorization />} />
          <Route path="/hotels" element={< Main />} />
      </Routes>
    </>
  )
}
