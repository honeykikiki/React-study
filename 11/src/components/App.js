import React, { useState } from 'react';
import AppRouter from 'components/Router';
import { authService } from 'fbase';

const App = () => {
  console.log(authService);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>
        &copy; Hwitter
        {new Date().getFullYear()}
      </footer>
    </>
  );
};

export default App;
