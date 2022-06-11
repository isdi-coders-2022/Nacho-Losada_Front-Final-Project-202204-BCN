import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/hooks";

interface Props {
  children: JSX.Element;
}

const NotLoggedGatekeeper = ({ children }: Props) => {
  const { name } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (name) {
      navigate("/summoners");
    }
  }, [name, navigate]);

  return <>{!name && children}</>;
};

export default NotLoggedGatekeeper;
