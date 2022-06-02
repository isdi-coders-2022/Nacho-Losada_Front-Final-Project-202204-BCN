import styled from "styled-components";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPageStyled = styled.div``;

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled>
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
