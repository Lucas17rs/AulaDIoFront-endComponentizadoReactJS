import React from 'react';
import Layout from './components/layout';
import Profile from './components/profile';
import { ResetCSS } from './global/resetCSS';
import Repositories from './components/repositories';

function App() {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <Profile />
        <Repositories />
      </Layout>
    </main>
  );
}

export default App;
