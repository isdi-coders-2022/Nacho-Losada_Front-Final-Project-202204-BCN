import { ChangeEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

    &__input {
      width: 300px;
      height: 50px;
      border-radius: 10px;
    }
  }

  input::placeholder {
    font-size: 1.1rem;
    padding-left: 10px;
  }

  p {
    text-align: center;
    background: linear-gradient(90deg, #e6a94d 50%, #dfd1b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.8rem;
    margin: 10px;
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
  const navigate = useNavigate();

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
    navigate("/summoners");

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
        />
        <label htmlFor="password" />
        <p>Contraseña:</p>
        <input
          placeholder="Contraseña"
          id="password"
          type="password"
          value={formData.password}
          onChange={changeData}
          className="login-form__input"
        />
        <button disabled={buttonDisable} type="submit">
          Login
        </button>
      </form>
      <p>No tienes cuenta?</p>
      <p>
        Registrate <span>aquí</span>
      </p>
    </LoginFormStyle>
  );
};

export default LoginForm;
