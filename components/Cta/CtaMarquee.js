import Link from "next/link";

function CtaMarquee({ link, children }) {
  return (
    <Link
      href={link}
      className="relative px-10 py-3 overflow-hidden text-base font-medium text-white uppercase transition-all duration-300 border-2 max-w-max dark:text-third sm:px-4 border-pink lg:px-10 4xl:px-10 4xl:py-8 lg:text-xl 3xl:text-2xl 4xl:text-3xl group"
    >
      {/* TESTO NORMALE */}
      <span className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
        {children}
      </span>

      {/* MARQUEE */}
      <span className="absolute inset-0 flex items-center overflow-hidden opacity-0 group-hover:opacity-100">
        <span className="marquee-inner">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="mx-6">
              {children}
            </span>
          ))}
        </span>
      </span>

      {/* BG */}
    </Link>
  );
}

export default CtaMarquee;
