import React, { useState } from 'react';


interface User {
    username: string;
    password: string;
  }
  
  const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
      const storedUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');
      const user = storedUsers.find((user) => user.username === username && user.password === password);
  
      if (user) {
        setLoginError(false);
        setLoginSuccess(true);
      } else {
        setLoginError(true);
        setLoginSuccess(false);
      }
    };
  
    return (
      <div>
        <h2>Форма входа</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Имя пользователя:</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">Пароль:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Войти</button>
        </form>
        {loginError && <p>Ошибка входа. Проверьте имя пользователя и пароль.</p>}
        {loginSuccess && <p>Успешный вход. Добро пожаловать!</p>}
      </div>
    );
  };
  
  const App = () => {
    const users: User[] = [
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' },
      { username: 'user3', password: 'password3' },
    ];
  
    React.useEffect(() => {
      localStorage.setItem('users', JSON.stringify(users));
    }, []);
  
    return <LoginForm />;
  };
  
  export default App;
  