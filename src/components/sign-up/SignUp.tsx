import React, { useState } from 'react';
import { db } from '../../firebase.config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { setDoc, doc, serverTimestamp, FieldValue } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

import Button from '../button/Button';
import './signUp.scss';

interface FormFields {
  displayName: string;
  email: string;
  password?: string;
  confirmPassword: string;
  timestamp?: FieldValue;
}

const defaultFormFields: FormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp: React.FC = () => {
  const { toggleProfileMenu } = useActions();
  const { isProfileMenuActive } = useTypedSelector((state) => state.profile);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const toggleProfileMenuHandler = () =>
    toggleProfileMenu(!isProfileMenuActive);

  const resetFormFields = () => setFormFields(defaultFormFields);

  const signUpHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredetial = await createUserWithEmailAndPassword(
        auth,
        email,
        password!
      );

      const user = userCredetial.user;

      updateProfile(auth.currentUser!, {
        displayName: displayName,
      });

      const formDataCopy = { ...formFields };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, 'users', user.uid), formDataCopy);
      resetFormFields();
      toggleProfileMenuHandler();
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
        id="sign-up__form"
        onSubmit={signUpHandler}
        className="sign-up__form"
      >
        <label className="sign-up__label" htmlFor="signup-name">
          Введите ваше имя
        </label>
        <input
          className="sign-up__input"
          type="text"
          required
          id="signup-name"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <label className="sign-up__label" htmlFor="signup-email">
          Введите ваш e-mail
        </label>
        <input
          className="sign-up__input"
          type="email"
          required
          id="signup-email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <label className="sign-up__label" htmlFor="signup-password">
          Введите пароль
        </label>
        <input
          className="sign-up__input"
          type="password"
          required
          id="signup-password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <label className="sign-up__label" htmlFor="signup-password-repeat">
          Повторите пароль
        </label>
        <input
          className="sign-up__input"
          type="password"
          required
          id="signup-password-repeat"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
      </form>
      <Button
        buttonText="Создать Аккаунт"
        buttonType="wide-black"
        form="sign-up__form"
      />
    </>
  );
};

export default SignUp;
