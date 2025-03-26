import Link from "next/link";
import { useRegistrationHooks } from "../../Store/registationStore";
const SignUpButton = () => {
  const { setAuth } = useRegistrationHooks();
  return (
    <Link href="/loginpage" onClick={() => setAuth(false)}>
      <button className="w-[60px] h-6 dark-green-bg text-white font-bold text-[11px] my-1 rounded-[5px] hover:text-[#3f4b3b] hover:bg-white hover:shadow-green-950 hover:shadow-md">
        Sign Up
      </button>
    </Link>
  );
};
const SignUpButtonSide = () => {
  return (
    <Link href="/loginpage" onClick={() => setAuth(false)}>
      <div>
        <button className="w-[60px] h-6 dark-green-bg text-white font-bold text-[9px] my-1 rounded-[5px] hover:text-[#3f4b3b] hover:bg-white hover:shadow-green-950 hover:shadow-md">
          Sign Up
        </button>
      </div>
    </Link>
  );
};

export { SignUpButtonSide };
export default SignUpButton;
