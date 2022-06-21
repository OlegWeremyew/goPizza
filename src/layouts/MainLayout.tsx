import React from 'react';

import { Outlet } from 'react-router-dom';

import { Header } from '../components';

export const MainLayout: React.FC = () => (
  <div className="wrapper">
    <Header />
    <div className="content">
      <Outlet />
    </div>
  </div>
);

