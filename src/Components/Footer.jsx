import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social </h6>
          <div className="flex gap-5">
            <a href="https://www.facebook.com/g.lap.raj">
              <FaFacebook size={25} />
            </a>
            <a href="https://github.com/md-tahmid-hasan-golap">
              {" "}
              <FaGithub size={25} />
            </a>
            <a href="https://www.youtube.com/@JhankarMahbub">
              {" "}
              <FaYoutube size={25} />
            </a>
            <a href="https://www.instagram.com/golapraj294/">
              {" "}
              <FaInstagramSquare size={25} />
            </a>
          </div>
        </nav>
      </footer>
      <p className="text-center py-4">
        {" "}
        Copyright © 2025 - All right reserved by MyAppBd
      </p>
    </div>
  );
};

export default Footer;
