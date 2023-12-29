import { useState } from "react";
import img from "../../assets/loginimg.jpg";
import logo from "../../assets/logo.svg";
import LoginForm from "./LoginForm";
import { useForm } from "react-hook-form";

const BackgroundImage = () => (
  <div className="flex-auto w-[600px] relative text-center">
    <img src={img} alt="login img" className="max-h-screen w-full" />
    <div className="flex absolute top-6 left-6 justify-center items-center">
      <img className="w-[35px] h-[35px] mr-2" src={logo} alt="logo" />
      <div className="text-violet-900 text-[35px] font-normal font-['League Spartan']">
        Growth View
      </div>
    </div>
  </div>
);

const LoginButton = ({ onClick, text, style }) => (
  <div
    onClick={onClick}
    className={`btn w-[435px] h-[88px] px-16 py-5 ${style}`}
  >
    {text}
  </div>
);

const Login = () => {
  const [isInput, setIsInput] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data.email);

  return (
    <div className="flex mx-auto max-h-screen">
      <BackgroundImage />
      <div className="w-[650px] bg-[#A21113] flex flex-col justify-center items-center">
        <h3 className="text-white text-5xl font-bold mb-[88px]">Log In</h3>
        {isInput ? (
          <LoginForm
            userRole={userRole}
            onSubmit={handleSubmit(onSubmit)}
            register={register}
          />
        ) : (
          <>
            <LoginButton
              onClick={() => {
                setIsInput(true);
                setUserRole("Admin");
              }}
              text="Admin Login"
              style="shadow-md hover:bg-[#C6C6C6] active:bg-[#053752] active:text-white justify-center items-center gap-2.5 text-[40px] font-normal"
            />
            <LoginButton
              onClick={() => {
                setIsInput(true);
                setUserRole("Manager");
              }}
              text="Manager Login"
              style="shadow-md hover:bg-[#C6C6C6] hover:text-[#A21113] active:bg-[#053752] active:text-white justify-center items-center gap-2.5 text-[40px] font-normal mt-6"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
