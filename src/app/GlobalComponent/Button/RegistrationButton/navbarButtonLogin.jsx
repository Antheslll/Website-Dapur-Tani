import Link from "next/link";
import { useRegistrationHooks } from "../../Store/registationStore";

const LoginButton = () => {
  const { setAuth } = useRegistrationHooks();
  return (
    <Link href="/loginpage" onClick={() => setAuth(true)}>
      <div>
        <button className="w-[60px] h-6 green-bg text-white font-bold text-[11px] my-[10px] rounded-[5px] hover:text-[#04e824] hover:bg-white hover:shadow-green-500 hover:shadow-md">
          Login
        </button>
      </div>
    </Link>
  );
};

const LoginButtonSide = () => {
  const { setAuth } = useRegistrationHooks();
  return (
    <Link href="/loginpage" onClick={() => setAuth(true)}>
      <div className="-my-1.5">
        <button className="w-[60px] h-6 green-bg text-white font-bold text-[9px] my-[10px] rounded-[5px] hover:text-[#04e824] hover:bg-white hover:shadow-green-500 hover:shadow-md">
          Login
        </button>
      </div>
    </Link>
  );
};
export { LoginButtonSide };
export default LoginButton;
