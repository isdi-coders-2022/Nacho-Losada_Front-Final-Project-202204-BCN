import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { warningIcon } from "../../utils/icons";
import CustomToast from "../CustomToast/CustomToast";

interface Props {
  children: JSX.Element;
}

const errorLoginText = "-Tienes que estar logeado para entrar aquí";

const LoggedGatekeeper = ({ children }: Props) => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      toast.error(CustomToast(warningIcon, errorLoginText), {
        position: "bottom-center",
        hideProgressBar: true,
        progress: undefined,
      });
      navigate("/login");
    }
  }, [token, navigate]);

  return <>{token && children}</>;
};

export default LoggedGatekeeper;
