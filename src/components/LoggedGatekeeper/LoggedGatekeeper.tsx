import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppSelector } from "../../redux/hooks/hooks";
import { warningIcon } from "../../utils/icons";
import CustomToast from "../CustomToast/CustomToast";

interface Props {
  children: JSX.Element;
}

const errorLoginText = "-Tienes que estar logeado para entrar aquí";

const LoggedGatekeeper = ({ children }: Props) => {
  const { name } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      toast.error(CustomToast(warningIcon, errorLoginText), {
        position: "bottom-center",
        hideProgressBar: true,
        progress: undefined,
      });
      navigate("/login");
    }
  }, [name, navigate]);

  return <>{name && children}</>;
};

export default LoggedGatekeeper;
