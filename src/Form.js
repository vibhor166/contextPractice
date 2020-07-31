import React, { useContext } from 'react';
import { LanguageContext } from './contexts/LanguageContext';

const words = {
  english: {
    email: 'Email',
    password: 'Password',
    remember: 'Remember Credentials',
    emailplaceholder: 'Enter email',
    passwordplaceholder: 'Enter password',
    signin: 'Sign In',
  },
  french: {
    email: 'Addresse Electronique',
    password: 'Mot de Passe',
    remember: 'Souviens-toi De Moi',
    emailplaceholder: 'Entre adresse electronique',
    passwordplaceholder: 'Entre Mot de Passe',
    signin: 'Se connecter',
  },
  hindi: {
    email: 'Email bata apna',
    password: 'Password likh ',
    remember: 'Yaad rakh account ko',
    emailplaceholder: 'Idhar daal email',
    passwordplaceholder: 'Idhar password daal',
    signin: 'Khaata khol',
  },
};

function Form() {
  const { language, changeLanguage } = useContext(LanguageContext);

  const {
    email,
    password,
    remember,
    emailplaceholder,
    passwordplaceholder,
    signin,
  } = words[language];
  return (
    <div
      style={{
        backgroundColor: 'white',
        width: '350px',
        height: '350px',
        margin: 'auto',
      }}
    >
      <h1>Form</h1>

      <select value={language} onChange={changeLanguage}>
        <option value='english'>English</option>
        <option value='hindi'>Hindi</option>
        <option value='french'>French</option>
      </select>
      <form>
        <label htmlFor='email'>{email}</label>{' '}
        <input
          type='email'
          name='Email'
          id='email'
          placeholder={emailplaceholder}
        />
        <br />
        <label htmlFor='password'>{password}</label>{' '}
        <input
          type='password'
          name='password'
          id='password'
          placeholder={passwordplaceholder}
        />
        <br />
        <label htmlFor='remember'>{remember}</label>
        <input type='checkbox' name='remember' id='remember' />
        <br />
        <input type='submit' value={signin} />
      </form>
    </div>
  );
}

export default Form;
