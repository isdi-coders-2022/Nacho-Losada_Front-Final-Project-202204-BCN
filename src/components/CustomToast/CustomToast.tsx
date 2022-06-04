import styled from "styled-components";

const CustomToast = (icon: string, text: string): JSX.Element => {
  const CustomToastStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    .toast__icon {
      width: 50px;
    }
  `;

  return (
    <CustomToastStyle>
      <img src={icon} alt="" className="toast__icon" />
      <div className="toast__text">{text}</div>
    </CustomToastStyle>
  );
};

export default CustomToast;
