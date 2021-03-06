import Link from "next/link";
import AuthCard from "../components/auth/AuthCard";
import Button from "../components/base/Button";
import TextField from "../components/base/TextField";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/authActions";
import * as yup from "yup";
import useValidation from "../hooks/useValidation";
import withGuest from "../components/HOC/withGuest";
import Alert from "../components/base/Alert";
import MetaData from "../components/layouts/MetaData";

const signin = () => {
  // redux
  const dispatch = useDispatch();
  const [loading, serverError] = useSelector(state => [
    state.uiReducer.loadings.signin,
    state.uiReducer.serverErrors.signin,
  ]);

  // form validation
  const { registerInput, wrapHandleSubmit, errors } = useValidation({
    schema: {
      email: yup.string().required("Email is required").email("Enter a valid email"),
      password: yup.string().required("Password is required"),
    },
  });

  const handleSubmit = ({ email, password }) => {
    dispatch(login(email, password));
  };

  return (
    <AuthCard title="Login to your account">
      <MetaData title="Login" />
      <form
        onSubmit={wrapHandleSubmit(handleSubmit)}
        className="mt-8 space-y-6"
        action="#"
        method="POST"
      >
        <div className="space-y-5">
          {serverError && (
            <Alert variant="red" icon="fa fa-info-circle">
              {serverError}
            </Alert>
          )}
          <div>
            <TextField
              {...registerInput("email")}
              error={errors.email ? true : false}
              helperText={errors.email && errors.email.message}
              type="text"
              placeholder="Enter Email address"
            />
          </div>
          <div>
            <TextField
              {...registerInput("password")}
              error={errors.password ? true : false}
              helperText={errors.password && errors.password.message}
              type="password"
              placeholder="Enter Password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember_me"
              className="ml-2 block text-sm text-gray-900 dark:text-white"
            >
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <Link href="/signup">
              <a className="font-medium text-blue-600 hover:text-blue-500">
                Don't have an account?
              </a>
            </Link>
          </div>
        </div>

        <div>
          <Button type="submit" variant="red" className="w-full" disabled={loading}>
            {loading && <i className="fa fa-spinner fa-spin mr-2"></i>}
            Login
          </Button>
        </div>
      </form>
    </AuthCard>
  );
};

export default withGuest(signin);
