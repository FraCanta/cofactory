import Link from "next/link";
const myFont2 = localFont({ src: "../fonts/Raleway-Regular.ttf" });
import localFont from "next/font/local";

const LinkMarquee = () => {
  return (
    <Link href="/works">
      <div className="marquee2">
        <div className={`content2 ${myFont2.className}`}>
          <span className="text-stroke">tutte le storie</span>
          <span className="text-stroke">tutte le storie</span>
          <span className="text-stroke">tutte le storie</span>
          <span className="text-stroke">tutte le storie</span>
          <span className="text-stroke">tutte le storie</span>
          <span className="text-stroke">tutte le storie</span>
        </div>
      </div>
    </Link>
  );
};

export default LinkMarquee;
