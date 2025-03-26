import { useProfileNavHooks } from "@/app/GlobalComponent/Hooks/profileHooks";
import {
  useAccountList,
  useAccountStore,
  useEditAccountStore,
} from "@/app/GlobalComponent/Store/accountStore";

export default function NavigationOnProfile() {
  const {
    setEdit,
    edit,
    editedFirstName,
    editedLastName,
    editedPassword,
    editedAddress,
  } = useEditAccountStore();
  const { isNavProfile } = useProfileNavHooks();

  const { activeAccount } = useAccountStore();

  const { addAccount, removeAccount, accountList } = useAccountList();

  const { activeAccountUpdate } = useAccountStore();
  const handleChangeExecution = () => {
    if (edit) {
      const updatedAccount = {
        firstName: editedFirstName || activeAccount?.firstName || "",
        lastName: editedLastName || activeAccount?.lastName || "",
        email: activeAccount?.email || "",
        password: editedPassword || activeAccount?.password || "",
        address: editedAddress || activeAccount?.address || "",
      };

      const accountExists = accountList.some(
        (account) => account.email === activeAccount.email
      );
      if (accountExists) {
        removeAccount(activeAccount.email);
      }
      activeAccountUpdate(updatedAccount);
      addAccount(updatedAccount);
      console.log("Akun diperbarui", updatedAccount);
    }

    setEdit(!edit);
  };
  return (
    <div className="bg-[#cdcdcd] grid lg:grid-cols-[15%_85%] md:pl-[20%]">
      <div className="md:hidden lg:block"></div>
      <div className="lg:w-full md:w-[80%] grid lg:grid-cols-[15%_15%_15%_15%_40%] md:grid-cols-[18%_18%_18%_18%_28%]">
        <ProfileNavButton subProfile="Account" />
        <ProfileNavButton subProfile="Order Status" />
        <ProfileNavButton subProfile="FAQ" />
        <ProfileNavButton subProfile="Feedback" />
        {isNavProfile === "Account" ? (
          <div className=" flex justify-center items-center">
            <button
              className=" w-[70px] h-[23px] ml-[25%] rounded-[50px] bg-[#04E824] text-white text-[12px]"
              onClick={handleChangeExecution}
            >
              {edit ? "Apply" : "Edit"}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
function ProfileNavButton({ subProfile }) {
  const { isNavProfile, handleNavProfile } = useProfileNavHooks();
  return (
    <div className=" flex justify-center">
      <button
        className={`font-bold text-[15px]  ${
          isNavProfile === subProfile ? "text-[#04E824]" : "text-black"
        }`}
        onClick={() => {
          handleNavProfile(subProfile);
        }}
      >
        {subProfile}
      </button>
    </div>
  );
}
