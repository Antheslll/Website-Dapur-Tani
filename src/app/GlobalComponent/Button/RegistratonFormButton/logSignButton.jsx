import { useAccountList, useAccountStore } from "../../Store/accountStore";
import { useRouter } from "next/navigation";
import { useRegistrationHooks } from "../../Store/registationStore";
export default function LogSignButton({ type }) {
  const router = useRouter();
  const {
    firstName,
    lastName,
    email,
    password,
    address,
    addAccount,
    accountList,
  } = useAccountList();
  const { setAuth } = useRegistrationHooks();
  const { activeAccountUpdate } = useAccountStore();
  const accountEmail = accountList.map((item) => item.email);
  const handleAddAccount = () => {
    if (!accountEmail.includes(email)) {
      addAccount({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        address: address,
      });

      alert(
        "Akun anda telah dibuat, mohon login untuk mengakses website dengan akun anda!"
      );
      setAuth(true);
    } else {
      alert("Akun email anda sudah terdaftar");
    }
  };

  const credentialSaved = accountList.map((item) => [
    item.email,
    item.password,
    item.firstName,
    item.lastName,
    item.address,
  ]);

  const entryAccount = () => {
    const matchedAccount = credentialSaved.find(
      (cred) => cred[0] === email && cred[1] === password
    );

    if (matchedAccount) {
      alert(
        `Selamat datang kembali ${matchedAccount[2]} ${matchedAccount[3]},\nDapur Tani siap menyambutmu!`
      );
      activeAccountUpdate({
        firstName: matchedAccount[2],
        lastName: matchedAccount[3],
        email: matchedAccount[0],
        password: matchedAccount[1],
        address: matchedAccount[4],
      });

      router.push("/");
    } else {
      alert("Email atau Password mungkin ada yang salah");
    }
  };

  return (
    <button
      className="registration-button"
      onClick={type === "Sign Up" ? handleAddAccount : entryAccount}
    >
      {type}
    </button>
  );
}
