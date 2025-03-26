import { useAccountList } from "../Store/accountStore";

export default function RegistrationFormInput({ type, placeholder }) {
  const {
    updateFirstName,
    updateLastName,
    updateEmail,
    updatePassword,
    updateAddress,
  } = useAccountList();

  const handleBlur = (event) => {
    const value = event.target.value;
    placeholder === "First Name"
      ? updateFirstName(value)
      : placeholder === "Last Name"
      ? updateLastName(value)
      : placeholder === "Email"
      ? updateEmail(value)
      : placeholder === "Password"
      ? updatePassword(value)
      : placeholder === "Address"
      ? updateAddress(value)
      : "";
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      className="registration-input"
      onBlur={handleBlur}
    />
  );
}
