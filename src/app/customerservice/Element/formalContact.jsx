import ContactBadge from "./Subelement/contactBadge";

export default function FormalContact() {
  return (
    <div className="flex justify-center">
      <div className="w-[20%] max-[900px]:w-[40%] grid gap-2">
        <ContactBadge contactFormat="Email: " contact="dapurtani@gmail.com" />
        <ContactBadge contactFormat="Phone: " contact="+62811126867" />
      </div>
    </div>
  );
}
