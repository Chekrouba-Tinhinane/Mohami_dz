import React from "react";
import { Link } from "react-router-dom";
import google from "./assets/icons/google.svg";
import scene from "./assets/sign/scene2.jpg";

const SignIn = () => {
  /*  const loginUser = async (email, password) => {
      try {
        const response = await axios.post("http://localhost:3000/user/login", {
          email: email,
          password: password,
        });
        console.log(response.data);
        const { token, user } = response.data;
        setToken(token);
        setUser(user);
  
        localStorage.setItem("token", token);
        <Link to={"/"} />;
        return { token, user };
      } catch (error) {
        // setErrors((prev) => {
         // return { ...prev, password: "incorrect password" };
        //}); 
        if (error.response.data.errors.email === "That email is not registered") {
          console.log("hey");
          setErrors((prev) => {
            return { ...prev, email: "That email is not registered" };
          });
        } else if (
          error.response.data.errors.password === "That password is incorrect"
        ) {
          setErrors((prev) => {
            return { ...prev, password: "incorrect password" };
          });
        }
  
        console.log(error.response.data.errors.email);
        return { error: error.response.data };
      }
    };
   */

  /* const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)/,
        "Password must include at least one letter and one number"
      ),
  }); */

  const handleSubmit = async (values) => {
    // Handle form submission logic here
    console.log("Form values:", values);
    setErrors(null);


    /*  const { token, user, error } = await loginUser(
      values.email,
      values.password
    );

    if (error) {
      console.log("Login error:", error);
    } else {
      console.log("Login success:", user, token);
      // redirect to dashboard or some other page
    }
    if (error.email === 'incorrect email') {
      console.log('hey')
      setErrors((prev) => {
        return { ...prev, email: "That email is not registered" };
      });
    } else if (error.password === 'incorrect password') {
      setErrors((prev) => {
      return { ...prev, password: "incorrect password" };
    });
    } */
  };

  return (
    <div className=" flex h-screen items-center ">
      {/* grandparent wrapper */}
      <div className=" basis-[60%] ">
        {/* left side bg */}
        <img src={scene} className=" bg- h-screen w-full object-cover" alt="" />
      </div>
      {/*       <div className="flex flex-col items-center justify-center h-full">
       */}{" "}
      <div className=" relative  w-[30%] flex flex-col h-[85%] pb-10  border border-primary mx-auto items-center">
        {/* right side */}
        <h1 className=" recursive text-primary absolute -top-10 bg-white">
          Se Connecter
        </h1>
        <header className=" text-center my-8">
          {/* Welcome */}
          <small className=" text-gray-500">
            Veuillez saisir vous informations.
          </small>
        </header>
        <form className=" basis-[60%] w-[65%]" action="">
          {/* form inputs */}
          <div className=" flex flex-col ">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className=" border-b border-primary rounded-sm outline-none px-1 py-1.5"
              placeholder="Ex: email_81194@gmail.com"
            />
          </div>

          <div className="flex flex-col mt-8">
            <label htmlFor="pwd">Mot de passe</label>
            <input
              type="password"
              id="pwd"
              name="pwd"
              className=" border-b border-primary rounded-sm outline-none px-1 py-1.5"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-between mb-9 mt-4">
            {/* password actions */}
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember" className=" text-xs">
                Se rappeler de moi
              </label>
            </div>

            <a className=" text-xs opacity-70 cursor-pointer">
              Mot de passe oublié?
            </a>
          </div>

          <div className="flex flex-col items-center gap-4  ">
            {/* login methods */}
            <button
              onClick={handleSubmit}
              className=" bg-primary recursive p-2 tracking-wider font-medium text-white w-full"
              type="submit"
            >
              Se connecter
            </button>
            <a
              href=""
              className="  border border-primary recursive p-2 tracking-wider font-medium justify-center w-full flex gap-4 flex-shrink-0 min-w-max items-center"
            >
              <img src={google} className=" w-[5%] " alt="" />{" "}
              <span className=" min-w-max text-sm"> Log in with Google </span>
            </a>
          </div>
        </form>
        <footer className=" basis-[10%] mt-32 ">
          <span className="   text-xs opacity-70">
            Vous n’avez pas un compte ?
          </span>{" "}
          <Link
            to={"/Signup"}
            className=" cursor-pointer text-sm font-semibold"
          >
            S'inscrire
          </Link>
        </footer>
      </div>
      {/* <footer className=" basis-[10%] ">
          <span className=" text-sm opacity-70">Don't have an account?</span>{" "}
          <Link
            to={"/Signup"}
            className=" cursor-pointer text-sm font-semibold"
          >
            Sign up
          </Link>
        </footer> */}
      {/* </div> */}
    </div>
  );
};

export default SignIn;