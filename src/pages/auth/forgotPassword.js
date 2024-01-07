import { FormEvent, useState } from "react";
import { FiMail } from "react-icons/fi";
import Modal from "../../components/molecules/Modal";
import { useAuth } from "../../contexts/AuthContext";

function ForgotPassword() {
  const { passwordReset } = useAuth();
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState(false);
  const [resetMailSent, setResetMailSent] = useState(false);
  const [openModal, setOpenModal] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await passwordReset(email);
      setEmailMessage(true);
      setResetMailSent(true);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("User not found, try again!");
        setEmail("");
      }
      setResetMailSent(false);
    }
  };

  return (
    <div className="flex flex-col justify-center flex-1 min-h-full py-12 sm:px-6 lg:px-8">
      {resetMailSent ? (
        <Modal
          open={openModal}
          setOpen={setOpenModal}
          bgColor={resetMailSent ? "green-100" : "red-100"}
          title={
            resetMailSent
              ? "Password reset email sucessfully sent."
              : "Password reset failed."
          }
          description={
            resetMailSent
              ? "Check email for instructions on how to reset you password. Check spam/junk folder if you dont find the email in the standard inbox"
              : "There was a problem reseting your password. Please try againn"
          }
          linkText={resetMailSent ? " Go back to login" : "Try again"}
          url={resetMailSent ? "login" : "forgot-password"}
          icon={
            resetMailSent ? (
              <FiMail className="w-6 h-6 text-green-600" aria-hidden="true" />
            ) : (
              <FiMail className="w-6 h-6 text-red-600" aria-hidden="true" />
            )
          }
        />
      ) : (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="px-6 py-12 bg-white shadow sm:rounded-lg sm:px-12">
            {emailMessage ? (
              <h3>The Email has been sent; Check your Inbox!</h3>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full px-3 outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#317773] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-[#317773] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#317773] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#317773] font-mono"
                  >
                    Reset your password
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
