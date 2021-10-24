import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import MainLayout from './common/layout/MainLayout';
import './styles/_main.scss';

ReactDOM.render(
  <React.StrictMode>
    <MainLayout>
      <Routes />
    </MainLayout>
  </React.StrictMode>,
  document.getElementById('root')
);