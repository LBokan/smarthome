import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PrivateRoute, PublicRoute } from '@/components';
import { Layout } from '@/components/Layout';

import { Devices } from './Devices';
import { Fallback } from './Fallback';
import { Landing } from './Landing';
import { Login } from './Login';
import { Logs } from './Logs';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute restricted redirectTo="/">
              <Login />
            </PublicRoute>
          }
        />
        <Route path="*" element={<Fallback />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Landing />} />
          <Route path="devices" element={<Devices />} />
          <Route path="logs" element={<Logs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
