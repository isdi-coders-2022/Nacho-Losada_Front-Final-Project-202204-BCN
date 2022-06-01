import { ChangeEventHandler, useEffect, useState } from "react";
import styled from "styled-components";
import { registerUserThunk } from "../redux/thunks/thunks";

const RegisterFormStyle = styled.div`
  .register-form {
    p {
      display: none;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .register-form__input {
    width: 300px;
    height: 50px;
    border-radius: 10px;
  }
`;

const RegisterForm = (): JSX.Element => {
  const blankData = {
    username: "",
    password: "",
    name: "",
    email: "",
  };

  const [formData, setFormData] = useState(blankData);
  const [buttonDisable, setButtonDisable] = useState(true);

  useEffect(() => {
    if (
      formData.username !== "" &&
      formData.password !== "" &&
      formData.name !== "" &&
      formData.email !== ""
    ) {
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

  const submitRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    registerUserThunk(formData);
    resetForm();
  };

  return (
    <RegisterFormStyle>
      <form
        onSubmit={submitRegister}
        autoComplete="off"
        noValidate
        className="register-form"
      >
        <label htmlFor="username" />
        <p>Usuario:</p>
        <input
          placeholder="Usuario"
          id="username"
          value={formData.username}
          onChange={changeData}
          className="register-form__input"
        ></input>
        <label htmlFor="password" />
        <p>Contraseña:</p>
        <input
          placeholder="Contraseña"
          id="password"
          type="password"
          value={formData.password}
          onChange={changeData}
          className="register-form__input"
        ></input>
        <label htmlFor="name" />
        <p>Nombre:</p>
        <input
          placeholder="Nombre"
          id="name"
          value={formData.name}
          onChange={changeData}
          className="register-form__input"
        ></input>
        <label htmlFor="email" />
        <p>Correo electrónico:</p>
        <input
          placeholder="Correo electrónico"
          id="email"
          value={formData.email}
          onChange={changeData}
          className="register-form__input"
        ></input>
        <button disabled={buttonDisable} type="submit">
          Crear cuenta
        </button>
      </form>
    </RegisterFormStyle>
  );
};

export default RegisterForm;
