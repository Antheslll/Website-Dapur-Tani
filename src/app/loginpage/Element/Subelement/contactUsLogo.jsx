import {
  FacebookIcon,
  GmailIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/app/icons/contact-icon";

export default function ContactUsLogo() {
  return (
    <div>
      <div className="w-[20%] grid grid-cols-4 mx-[40%] mt-3">
        <Icon theIcon={<WhatsappIcon />} />
        <Icon theIcon={<GmailIcon />} />
        <Icon theIcon={<LinkedinIcon />} />
        <Icon theIcon={<FacebookIcon />} />
      </div>
    </div>
  );
}

function Icon({ theIcon }) {
  return <div className="scale-75">{theIcon}</div>;
}
