import { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoWithControls({ src }) {
  const videoRef = useRef(null);

  const [hover, setHover] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [previousVolume, setPreviousVolume] = useState(0.5);

  const [hasStarted, setHasStarted] = useState(false);

  // ---------------- PLAY / PAUSE ----------------
  const togglePlay = () => {
    if (!videoRef.current) return;

    if (!hasStarted) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      setMuted(false);
      videoRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
    } else {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // ---------------- TIMING ----------------
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const update = () => {
      setCurrentTime(video.currentTime);
      setProgress((video.currentTime / video.duration) * 100);
      setDuration(video.duration);
    };

    video.addEventListener("timeupdate", update);
    video.addEventListener("loadedmetadata", update);

    return () => {
      video.removeEventListener("timeupdate", update);
      video.removeEventListener("loadedmetadata", update);
    };
  }, []);

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    videoRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  const formatTime = (t) => {
    if (!t) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  // ---------------- VOLUME: MUTE / UNMUTE ----------------
  const toggleMute = () => {
    if (!videoRef.current) return;

    if (!muted) {
      // 🔇 MUTE: salva volume e metti a zero
      setPreviousVolume(volume);
      setVolume(0);
      videoRef.current.volume = 0;
      videoRef.current.muted = true;
      setMuted(true);
    } else {
      // 🔊 UNMUTE: ripristina volume precedente
      const restored = previousVolume > 0 ? previousVolume : 0.3;
      setVolume(restored);
      videoRef.current.volume = restored;
      videoRef.current.muted = false;
      setMuted(false);
    }
  };

  // ---------------- VOLUME SLIDER ----------------
  const handleVolumeChange = (e) => {
    const v = parseFloat(e.target.value);
    setVolume(v);

    if (!videoRef.current) return;
    videoRef.current.volume = v;

    if (v === 0) {
      setPreviousVolume(previousVolume || 0.5);
      videoRef.current.muted = true;
      setMuted(true);
    } else {
      videoRef.current.muted = false;
      setMuted(false);
      setPreviousVolume(v);
    }
  };

  // ---------------- RENDER ----------------
  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        src={src}
        muted={muted}
        playsInline
        loop
        autoPlay
        className="object-cover w-full h-full"
      />

      {/* CONTROLLI */}
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-0 left-0 z-20 w-full p-4"
          >
            {/* PROGRESS BAR */}
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
              className="w-full h-1 my-4 border-none outline-none cursor-pointer accent-white/50 "
            />

            {/* CONTROLLI */}
            <div className="relative flex items-center gap-3 text-white">
              {/* PLAY */}
              <button
                onClick={togglePlay}
                className="p-1 rounded-full bg-third/50 backdrop-blur-lg"
              >
                <Icon
                  icon={
                    isPlaying ? "flowbite:pause-solid" : "flowbite:play-solid"
                  }
                  width="28"
                  className="transition-all duration-300 ease-in-out"
                />
              </button>

              {/* VOLUME */}
              <div className="relative group">
                <div className="flex items-center w-10 h-10 overflow-hidden transition-all duration-300 rounded-full group-hover:w-36 bg-third/50 backdrop-blur-lg">
                  {/* MUTE BUTTON */}
                  <button
                    onClick={toggleMute}
                    className="p-2 ml-[2px] rounded-full"
                  >
                    <Icon
                      icon={
                        muted ? "mage:volume-mute" : "mage:volume-down-fill"
                      }
                      width="22"
                      className="transition-all duration-500"
                    />
                  </button>

                  {/* SLIDER */}
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-0 h-1 ml-2 transition-all duration-300 cursor-pointer group-hover:w-20 rotate-270 accent-white/20"
                  />
                </div>
              </div>

              {/* TIME */}
              <span className="px-4 py-2 text-sm rounded-full bg-third/50 backdrop-blur-lg">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
