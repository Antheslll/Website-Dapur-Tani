import { GridIcon } from "../icons/grid-icon";
import { ListIcon } from "../icons/list-icon";

export default function OverlayInvoice() {
  return (
    <div className="w-full h-full bg-black/50 absolute z-50 flex justify-center pt-[60px] ">
      <div className="bg-white fixed w-[60%] h-[450px] pt-5 grid grid-rows-[80px_30px_250px_50px] rounded-xl">
        <div className="ml-[5%] w-[90%] ">
          <div className="grid grid-cols-[70%_30%] font-[Roboto-reguler] text-[13px]">
            <div className="leading-relaxed">
              <h5>Invoice: #0123341</h5>
              <h5>Type : Instant</h5>
              <h5>Status : Finished</h5>
            </div>
            <div className="leading-relaxed">
              <h5>Purchased On: 03/02/2025</h5>
              <h5>Amount : Rp 240.000,-</h5>
            </div>
          </div>
        </div>
        <div className="ml-[5%] w-[90%] ">
          <div className="w-[7%] grid grid-cols-2">
            <div className="w-[20px] h-[20px] border border-black rounded-sm flex justify-center items-center cursor-pointer bg-[#9F9F9F]">
              <ListIcon />
            </div>
            <div className="w-[20px] h-[20px] border border-black rounded-sm flex justify-center items-center cursor-pointer bg-[#9F9F9F]">
              <GridIcon />
            </div>
          </div>
        </div>
        <div className="ml-[5%] w-[90%] ">
          <table className="w-full">
            <thead>
              <tr className="w-full grid grid-cols-[5%_20%_40%_20%_15%] text-[13px] font-[Roboto-reguler] text-[#767676] border-b border-black">
                <th>Qty</th>
                <th>Photo</th>
                <th className="text-left">Name</th>
                <th>Material Type</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="w-full text-[11px] grid grid-cols-[5%_20%_40%_20%_15%] font-[Roboto-reguler]">
                <td className="flex justify-center items-center">2</td>
                <td className="flex justify-center items-center">
                  <img
                    src="/bestSeller/apple.jpg"
                    className="w-[20px] h-[20px]"
                  />
                </td>
                <td className="flex justify-center items-center text-left text-[#0084FF]">
                  Asparagus – Rp 60,000/kg Delicate and flavorful, great for
                  roasting.
                </td>
                <td className="flex justify-center items-center text-[#04E824]">
                  Fresh
                </td>
                <td className="flex justify-center items-center">
                  Rp 120.000,-
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="ml-[5%] w-[90%]  flex justify-end">
          <button className="w-[100px] h-[25px] bg-[#04E824] text-[13px] text-white rounded-xl">
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
