import { GrFacebook, GrInstagram, GrMail, GrTwitter } from "react-icons/gr";

interface SocialsProps {
  link: string;
  icon: JSX.Element;
}

const size: number = 30;

const Socials = () => {
  const socialLinks: SocialsProps[] = [
    {
      link: "#",
      icon: <GrFacebook size={size} />,
    },
    {
      link: "#",
      icon: <GrTwitter size={size} />,
    },
    {
      link: "#",
      icon: <GrInstagram size={size} />,
    },
    {
      link: "#",
      icon: <GrMail size={size} />,
    },
  ];
  return (
    <>
      <div className="bg-black/90 rounded-lg mt-5 py-2 text-white shadow-lg shadow-gray-900 border-solid border-2 border-[#14261D]">
        <ul className="flex justify-around">
          {socialLinks.map((item, index) => {
            return (
              <>
                <a
                  href={item.link}
                  className="hover:scale-110 duration-300 eas-in-out transition-all"
                  key={index}
                >
                  <li className={"font-nav text-lightBrown"}>{item.icon}</li>
                </a>
                {index === socialLinks.length - 1 ? null : (
                  <div className="bg-white/50 h-[100] w-0.5 rounded-2xl" />
                )}
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Socials;
