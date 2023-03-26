import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="bg-neutral-300 text-center text-black">
      <div className="container pt-9">
        <div className="mb-9 flex justify-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/parvez.rahman.144"
            className="mr-9 text-neutral-800"
          >
            <BsFacebook />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/parvezrahman100"
            className="mr-9 text-neutral-800 "
          >
            <BsTwitter />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=GTvVlcSMSckKnqFgDtPWkvxmTTJcFQdpSCHMQpcwQBxtZlbntWlxxgfzRbhBQLSsqjMRRXJJFJHxF"
            className="mr-9 text-neutral-800 "
          >
            <BsGoogle />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/i_amparvezrahman/"
            className="mr-9 text-neutral-800 "
          >
            <BsInstagram />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/parvez-miah-945910229/"
            className="mr-9 text-neutral-800 "
          >
            <BsLinkedin />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Parvez-Rahman100"
            className="text-neutral-800 "
          >
            <BsGithub />
          </a>
        </div>
      </div>

      <div className="bg-neutral-300 p-4 text-center text-neutral-800 ">
        © 2023 Copyright:
        <a
          className="text-neutral-800 px-1 font-bold cursor-pointer"
          href="https://parvez-portfolio-337dd.web.app/"
        >
          Parvez's Work
        </a>
      </div>
    </footer>
  );
};

export default Footer;
