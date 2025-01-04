
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center max-h-screen">
      <h3 className="text-[#4ECCA3] text-2xl font-bold my-6">
        Let&apos;s Connect Together
      </h3>
      <nav>
        <div className="grid grid-flow-col   gap-4 text-2xl">
          <a
            className="text-[#24A4F2]"
            href="https://x.com/?lang=en"
            target="_blank"
          >
            <FaTwitter />
          </a>
          <a
            className="text-[#0A66C2]"
            href="https://www.linkedin.com/in/md-rayhan-mia-927115220/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            className="text-[#0866FF]"
            href="https://www.facebook.com/rs.rayhan.18"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            className="text-[#FE09D9]"
            href="https://www.instagram.com/"
            target="_blank"
          >
            <FaInstagramSquare />
          </a>
        </div>
      </nav>
      <footer className="footer footer-center p-8">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Md.Rayhan
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;