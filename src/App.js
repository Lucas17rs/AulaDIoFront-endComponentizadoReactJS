import React from 'react';
import Layout from './components/layout';

function App() {
  return <main>
    <Layout>
      <div>User
        <img source="https://avatars.githubusercontent.com/u/73747647?v=4" alt="picture of user" />
        <h1>nome</h1>
        <h3>Username: </h3>
        <span></span>
        <div>
          <h4>Followers</h4>
          <span>0</span>
        </div>
        <div>
          <h4>Starreds</h4>
          <span>0</span>
        </div>
        <div>
          <h4>Followings</h4>
          <span>0</span>
        </div>
          

      
      </div>
      <div>Repositories</div>
      <div>Starreds</div>
    </Layout>
  </main>
}

export default App;
