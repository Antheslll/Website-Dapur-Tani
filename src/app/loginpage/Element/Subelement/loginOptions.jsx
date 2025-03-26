import LogSignButton from "@/app/GlobalComponent/Button/RegistratonFormButton/logSignButton";
import { useAccountStore } from "@/app/GlobalComponent/Store/accountStore";
import GoogleIcon from "@/app/icons/google-icon";
import { useRouter } from "next/navigation";
export default function LoginOptions() {
  const router = useRouter();
  const { activeAccountUpdate } = useAccountStore();
  const handleGuest = () => {
    router.push("/");
    activeAccountUpdate({});
  };
  return (
    <div>
      <button className="w-[70%] h-[35px] border border-[#AFAFAF] rounded-lg mx-[15%]  grid grid-cols-[65%_35%]">
        <div className="font-[Roboto] lg:text-[0.6rem] xl:text-[0.7rem] text-[#6E6E6E] pl-[40%] flex items-center">
          Login with Google
        </div>
        <div className=" pt-2.5">
          <GoogleIcon />
        </div>
      </button>
      <LogSignButton type="Login" />
      <p className="text-[7px] text-center mt-1">
        Don't have an account?
        <span
          className="text-[rgb(4,232,36)] cursor-pointer"
          onClick={() => handleGuest()}
        >
          <u>Login as Guest</u>
        </span>
      </p>
    </div>
  );
}
