import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import Button from '../button/Button';
import './signIn.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignIn: React.FC = () => {
  const { toggleProfileMenu } = useActions();
  const { isProfileMenuActive } = useTypedSelector((state) => state.profile);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const toggleProfileMenuHandler = () =>
    toggleProfileMenu(!isProfileMenuActive);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        resetFormFields();
        toggleProfileMenuHandler();
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <form
        id="sign-in__form"
        onSubmit={signInHandler}
        className="sign-in__form"
      >
        <label className="sign-in__label" htmlFor="signin-email">
          Введите ваш e-mail
        </label>
        <input
          className="sign-in__input"
          type="email"
          id="signin-email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label className="sign-in__label" htmlFor="signin-password">
          Введите пароль
        </label>
        <input
          className="sign-in__input"
          type="password"
          id="signin-password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </form>
      <Button buttonText="Войти" buttonType="wide-black" form="sign-in__form" />
    </>
  );
};

export default SignIn;
