import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data - ", data);
  };
  return (
    <>
      <h3>Login Form</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input
            type="email"
            {...register("email", { required: "email is required" })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label>password</label>
          <input
            type="password"
            {...register("password", {
              required: "password is required!",
              minLength: {
                value: 6,
                message: "password must be at least 6 charecter",
              },
            })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        <button type="submit">Login</button>
      </form>
    </>
  );
};
export default LoginForm;
