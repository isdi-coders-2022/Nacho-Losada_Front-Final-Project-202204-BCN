import { ChangeEventHandler, useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { registerUserThunk } from "../../redux/thunks/thunks";
import RegisterFormStyle from "./RegisterFormStyle";

const RegisterForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
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
    dispatch(registerUserThunk(formData));
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
