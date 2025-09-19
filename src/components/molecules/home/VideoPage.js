"use client";

import { useRef, useState, useEffect } from "react";

const videos = [
  "/images/HomePage/6912320_Motion_Graphics_Motion_Graphic_1920x1080.mp4",
  "/images/HomePage/6912320_Motion_Graphics_Motion_Graphic_1920x1080.mp4",
  "/images/HomePage/6912320_Motion_Graphics_Motion_Graphic_1920x1080.mp4",
];

export default function VideoCarousel() {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  const scrollToIndex = (i) => {
    if (!containerRef.current) return;
    const width = containerRef.current.offsetWidth;
    containerRef.current.scrollTo({ left: i * width, behavior: "smooth" });
    setIndex(i);
  };

  const next = () => {
    if (index < videos.length - 1) scrollToIndex(index + 1);
  };
  const prev = () => {
    if (index > 0) scrollToIndex(index - 1);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel track */}
      <div
        ref={containerRef}
        className="flex w-full h-full overflow-hidden scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {videos.map((src, i) => (
          <div
            key={i}
            className="w-full h-full flex-shrink-0"
            style={{ scrollSnapAlign: "start" }}
          >
            <VideoPlayer src={src} />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        disabled={index === 0}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 bg-gray-500 text-white/70 px-3 py-3 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={next}
        disabled={index === videos.length - 1}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 bg-gray-500 text-white/70 px-3 py-3 rounded-full"
      >
        ▶
      </button>
    </div>
  );
}

function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTime = () => setCurrentTime(video.currentTime);
    const onLoaded = () => setDuration(video.duration || 0);

    video.addEventListener("timeupdate", onTime);
    video.addEventListener("loadedmetadata", onLoaded);

    // autoplay muted
    video.muted = true;
    video.play().catch(() => setIsPlaying(false));

    return () => {
      video.removeEventListener("timeupdate", onTime);
      video.removeEventListener("loadedmetadata", onLoaded);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolume = (e) => {
    const v = Number(e.target.value);
    if (videoRef.current) videoRef.current.volume = v;
    setVolume(v);
    if (v > 0) setIsMuted(false);
  };

  const handleSeek = (e) => {
    const t = Number(e.target.value);
    if (videoRef.current) videoRef.current.currentTime = t;
    setCurrentTime(t);
  };

  const formatTime = (t) => {
    if (!t || isNaN(t)) return "0:00";
    const m = Math.floor(t / 60);
    const s = String(Math.floor(t % 60)).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="relative w-full h-full bg-white flex items-center justify-center">
      <video
        ref={videoRef}
        src={src}
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      {/* Controls */}
      <div className="absolute bottom-6 left-55 right-0 flex flex-col items-left space-y-2 text-white">
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="bg-white text-black px-3 py-1 rounded"
          >
            {isPlaying ? "⏸️" : "▶️"}
          </button>
          <button
            onClick={toggleMute}
            className="bg-white text-black px-3 py-1 rounded"
          >
            {isMuted ? "🔇" : "🔊"}
          </button>
          {/* <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolume}
            className="w-24 volume-slider"
          /> */}
        </div>
        <div className="flex text-black items-center gap-2">
          <div className="text-sm">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      </div>
    </div>
  );
}