import React from "react";

function Footer() {
  return (
    <footer className="footer-main bg-[#161617] dark:bg-[#D9D9D9] dark:text-white/90 text-third">
      <div className="relative z-20 bg-third h-[200px] [clip-path:inset(0_0_0_0)]">
        <div className="footer-content fixed left-0 bottom-0 h-[250px] w-full flex flex-col items-center lg:items-start text-center lg:text-left gap-6 py-14 md:py-40 md:px-14 bg-black text-white">
          {/* <SocialLinks className="text-4xl" /> */}Social
          <div className="copyright flex flex-col lg:flex-row gap-2.5 [&_a]:anim-underline-white">
            <div>
              &copy; 2025 Cofactory srl - <p>P.I. 10233611218</p>
              <span className="inline-block ml-2.5">&pi; Privacy Policy</span>
            </div>
            <div>
              Made with ❤️ by{" "}
              <a href="https://www.thallion-dev.it">Thallion dev</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
