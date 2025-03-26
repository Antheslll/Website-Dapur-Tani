export default function ContactBadge({ contactFormat, contact }) {
  return (
    <div className="bg-[#B8DDFF] h-[30px] text-center rounded-lg">
      {contactFormat} <span className="text-[#0084FF]">{contact}</span>
    </div>
  );
}
