import { ChangeEventHandler, useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { loginUserThunk } from "../../redux/thunks/thunks";

const LoginFormStyle = styled.div`
  .login-form {
    p {
      display: none;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .login-form__input {
    width: 300px;
    height: 50px;
    border-radius: 10px;
  }
`;

const LoginForm = (): JSX.Element => {
  const blankData = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(blankData);
  const [buttonDisable, setButtonDisable] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (formData.username !== "" && formData.password !== "") {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [formData]);

  const resetForm = (): void => {
    setFormData(blankData);
  };

  const changeData: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const submitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginUserThunk(formData));

    resetForm();
  };

  return (
    <LoginFormStyle>
      <form
        onSubmit={submitLogin}
        autoComplete="off"
        noValidate
        className="login-form"
      >
        <label htmlFor="username" />
        <p>Usuario:</p>
        <input
          placeholder="Usuario"
          id="username"
          value={formData.username}
          onChange={changeData}
          className="login-form__input"
        ></input>
        <label htmlFor="password" />
        <p>Contraseña:</p>
        <input
          placeholder="Contraseña"
          id="password"
          type="password"
          value={formData.password}
          onChange={changeData}
          className="login-form__input"
        ></input>
        <button disabled={buttonDisable} type="submit">
          Login
        </button>
      </form>
    </LoginFormStyle>
  );
};

export default LoginForm;
