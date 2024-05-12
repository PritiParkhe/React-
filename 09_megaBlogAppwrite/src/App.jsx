// App.js

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from "./appwrite/Auth";
import { login, logout } from "./store/AuthSlice";
import { Header, Footer } from "./components";
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className="flex-grow overflow-y-auto relative">
        <div className="absolute inset-0 pt-16 overflow-y-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  ) : null;
}

export default App;


