import { useState } from "react";

const VideoPlayer3 = ({ video, poster }) => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative aspect-square w-full">
      <video
        id="videoPlayer"
        className="h-full w-full object-cover rounded-lg"
        autoPlay
        muted={isMuted}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="absolute bottom-0 right-2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FAB02C] rounded-full p-3 lg:p-2"
        onClick={toggleMute}
      >
        {isMuted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path
                fill="currentColor"
                d="M13.26 3.3a1.1 1.1 0 0 1 1.734.78l.006.114v15.612a1.1 1.1 0 0 1-1.643.957l-.096-.062L6.68 16H4a2 2 0 0 1-1.995-1.85L2 14v-4a2 2 0 0 1 1.85-1.994L4 8h2.68zm4.326 5.872L19 10.586l1.414-1.414a1 1 0 1 1 1.414 1.414L20.414 12l1.414 1.414a1 1 0 0 1-1.414 1.415L19 13.414l-1.414 1.415a1 1 0 0 1-1.414-1.415L17.586 12l-1.414-1.414a1 1 0 1 1 1.414-1.414"
              />
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor">
              <path d="M13 6.037c0-1.724-1.978-2.665-3.28-1.562L5.638 7.933H4c-1.105 0-2 .91-2 2.034v4.066c0 1.123.895 2.034 2 2.034h1.638l4.082 3.458c1.302 1.104 3.28.162 3.28-1.562z" />
              <path
                fill-rule="evenodd"
                d="M14.786 7.658a.99.99 0 0 1 1.414-.014A6.14 6.14 0 0 1 18 12c0 1.662-.655 3.17-1.715 4.27a.99.99 0 0 1-1.414.014a1.03 1.03 0 0 1-.014-1.437A4.1 4.1 0 0 0 16 12a4.1 4.1 0 0 0-1.2-2.904a1.03 1.03 0 0 1-.014-1.438"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M17.657 4.811a.99.99 0 0 1 1.414 0A10.22 10.22 0 0 1 22 12c0 2.807-1.12 5.35-2.929 7.189a.99.99 0 0 1-1.414 0a1.03 1.03 0 0 1 0-1.438A8.17 8.17 0 0 0 20 12a8.17 8.17 0 0 0-2.343-5.751a1.03 1.03 0 0 1 0-1.438"
                clip-rule="evenodd"
              />
            </g>
          </svg>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer3;
