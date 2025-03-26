import BrowseByCategoryButton from "@/app/HomePage/browseByCategoryButton";

export default function BrowseByCategory() {
  return (
    <>
      <h1 className="text-[20px]  font-[Roboto-bold] mx-[50px] my-[25px]">
        Browse by Category
      </h1>
      <div className="w-[100%] h-[400px] py-[10px] px-[50px] my-[-20px]">
        <BrowseByCategoryButton buttonName="Fresh Produce" />
        <BrowseByCategoryButton buttonName="Frozen Produce" />
        <BrowseByCategoryButton buttonName="Processed Produce" />
        <BrowseByCategoryButton buttonName="Organic Produce" />
        <BrowseByCategoryButton buttonName="Wholesale" />
      </div>
    </>
  );
}
