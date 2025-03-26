export default function ImageOnProductList({ src }) {
  return (
    <div>
      <img src={src} className="w-[40px] h-[40px] shadow-sm shadow-black" />
    </div>
  );
}
