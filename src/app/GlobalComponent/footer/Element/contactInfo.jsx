export default function ContactInfo({ contactFormat, contact }) {
  return (
    <div className="min-[820px]:pl-[25%] ">
      <h5 className="text-white font-[Roboto-bold] text-[15px]">
        {contactFormat}
      </h5>
      <span className="text-white text-[12px]">{contact}</span>
    </div>
  );
}
