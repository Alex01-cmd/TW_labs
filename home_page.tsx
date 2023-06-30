import React from 'react';
import { observer } from 'mobx-react';

const HomePage = observer(() => {
  return (
    <div>
      <h1>Home page</h1>
      <p>First Name: Alexandr</p>
      <p>Last Name: Ichim</p>
      <p>Group: RM-201</p>
    </div>
  );
});

export default HomePage;