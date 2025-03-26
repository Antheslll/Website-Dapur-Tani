import { orderHistory } from "@/app/GlobalComponent/Data/ProductData/ordersHistory";
import { useInvoiceStore } from "@/app/GlobalComponent/Store/historyInvoiceStore";
import { inventoryData } from "@/app/GlobalComponent/Data/ProductData/inventoryData";
export default function GridView({ type }) {
  const { invoiceContent } = useInvoiceStore();
  return (
    <div className="w-full flex justify-center">
      <div className="w-[95%] flex gap-12 flex-wrap overflow-y-scroll">
        {type === "order-history" ? (
          orderHistory
            .filter((item) => item.invoice === invoiceContent.invoice)
            .flatMap((item) => item.product || [])
            .map((productItem) => (
              <GridOfProduct
                type={type}
                key={productItem.key}
                qty={productItem.qty}
                photo={productItem.photo}
                name={productItem.name}
                materialType={productItem.materialType}
                condition={type === "order-history" ? "" : ""}
                amount={productItem.amount}
              />
            ))
        ) : type === "order-status" ? (
          <GridOfProduct
            type={type}
            qty={invoiceContent.product[0].qty}
            photo={invoiceContent.product[0].photo}
            name={invoiceContent.product[0].name}
            amount={invoiceContent.product[0].amount}
          />
        ) : (
          inventoryData.map((productItem) => (
            <GridOfProduct
              type={type}
              productKey={productItem.key}
              key={productItem.key}
              qty={productItem.qty}
              photo={productItem.photo}
              materialCategory={productItem.category}
              name={productItem.name}
              materialType={productItem.materialType}
              amount={productItem.amount}
            />
          ))
        )}
      </div>
    </div>
  );
}

function GridOfProduct({
  qty,
  photo,
  materialType,
  name,
  condition,
  amount,
  type,
}) {
  return (
    <div className="lg:w-[15vw] md:w-[20vw] h-[300px] shadow-md shadow-black grid grid-rows-[150px_150px] rounded-lg">
      <div>
        <img
          src={photo}
          className="w-full h-[150px] object-cover rounded-t-lg"
        />
      </div>
      <div
        className={`grid ${
          type === "order-history"
            ? "grid-rows-[55px_20px_20px_10px_35px]"
            : "grid-rows-[60px_10px_10px_15px_10px_35px]"
        } text-[10px] px-3 pt-1 `}
      >
        <div>
          <p className="text-[#0084FF]">{name}</p>
        </div>
        <div>
          <p className="text-[#04E824] ">{materialType}</p>
        </div>
        {type === "order-history" ? (
          ""
        ) : (
          <div>
            <p className="text-[#FF0004]">{condition}</p>
          </div>
        )}
        <div>
          <p>{amount}</p>
        </div>
        <div className="grid grid-rows-[15px_30px]">
          <div>
            <p>QTY:</p>
          </div>
          <div className="flex justify-center items-center">
            <input
              className="w-[20px] h-[20px] rounded-md bg-[#04E824] text-center text-white"
              defaultValue={qty}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
