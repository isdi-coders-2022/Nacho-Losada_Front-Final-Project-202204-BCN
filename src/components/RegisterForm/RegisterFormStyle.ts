import styled from "styled-components";

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

export default RegisterFormStyle;
