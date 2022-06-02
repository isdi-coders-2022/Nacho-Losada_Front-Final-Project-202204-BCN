import styled from "styled-components";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPageStyled = styled.div``;

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageStyled>
      <RegisterForm />
    </RegisterPageStyled>
  );
};

export default RegisterPage;
