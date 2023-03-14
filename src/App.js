import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './assets/SCSS/style.scss';
import Login from './Components/Login';
import Apply from './Components/Apply';
import AppType from './Components/Apply/AppType';
import What from './Components/Apply/What';
import When from './Components/Apply/When';
import Email from './Components/Apply/Email';
import Phone from './Components/Apply/Phone';
import Name from './Components/Apply/Name';
import Address from './Components/Apply/Address';
import Password from './Components/Apply/Password';
import SSN from './Components/Apply/SSN';
import Review from './Components/Apply/Review';
import Dashboard from './Components/Dashboard';
import Credit from './Components/Apply/Credit';

function App() {

  return (
    <div className="App">
      <div className='App-content'>
        <Router>
          <Routes>
            <Route path='/signin' element={<Login />} />
            <Route path='/apply/*' element={<Apply />}>
              <Route exact path='app-type' element={<AppType />} />
              <Route path="what" element={<What />} />
              <Route path="when" element={<When />} />
              <Route path="email" element={<Email />} />
              <Route path="phone" element={<Phone />} />
              <Route path="name" element={<Name />} />
              <Route path="address" element={<Address />} />
              {/* <Route path="password" element={<Password />} /> */}
              <Route path="ssn-dob" element={<SSN />} />
              <Route path="credit" element={<Credit />} />
              <Route path="general-denial" element={<Review />} />
              {/* 
              <Route path="credits" element={<AppType />} />
              <Route path="upload" element={<AppType />} />
              <Route path="check" element={<AppType />} /> */}
            </Route>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path="*" element={<Navigate to='/apply' replace />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
