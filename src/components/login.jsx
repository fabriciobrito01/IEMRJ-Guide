import React from 'react';

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <form className="login-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Entrar</button>
        </form>

        <div className="alternative-login">
          <p>ou entre com:</p>
          <button className="google-btn">Entrar com Google</button>
          <button className="facebook-btn">Entrar com Facebook</button>
        </div>

        <p className="signup-link">Não tem uma conta? <a href="#">Crie uma conta</a></p>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .login-page {
          display: flex;
          flex-direction: column;
          min-height: 85vh;
        }

        .footer {
          background-color: rgb(16, 28, 102);
          color: white;
          text-align: center;
          padding: 10px;
        }

        .login-container {
          flex-grow: 1;
          padding: 20px;
          background-color: #f5f5f5;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .login-container h1 {
            color: rgb(16, 28, 102);
            margin-bottom: 20px;
        }
            
        .login-form {
          width: 100%;
          max-width: 300px;
          display: flex;
          flex-direction: column;
          font-weight: bold;
        }

        .login-form label {
          margin-top: 10px;
          color: #333;
        }

        .login-form input {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 1rem;
          background-color: white;
        }

        .login-form button {
          margin-top: 15px;
          padding: 10px;
          border: none;
          background-color: rgb(16, 28, 102);
          color: white;
          font-weight: bold;
          cursor: pointer;
          border-radius: 5px;
        }

        .alternative-login {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 300px;
          margin-top: 15px;
        }
        
        .alternative-login p {
          margin: 10px;
          color: #333;
          display: flex;
          justify-content: center;
          font-size: 15px;
        }

        .google-btn, .facebook-btn {
          padding: 10px;
          margin-top: 10px;
          border: none;
          font-weight: bold;
          cursor: pointer;
          border-radius: 5px;
          color: white;
        }

        .google-btn {
          background-color: #dd4b39;
        }

        .facebook-btn {
          background-color: #3b5998;
        }

        .signup-link {
          margin-top: 20px;
          font-size: 0.9rem;
          color: #333;
        }

        .signup-link a {
          color: rgb(16, 28, 102);
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}

export default LoginPage;
