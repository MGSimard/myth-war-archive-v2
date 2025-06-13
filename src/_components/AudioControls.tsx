import { useEffect, useRef, useState } from "react";
import { TrackTypes } from "@/_components/AudioPlayer";
import { Pause, Play, SkipBack, SkipForward, Square, Volume, Volume1, Volume2, VolumeOff, VolumeX } from "lucide-react";

const toLogarithmicVolume = (value: number) => {
  const logarithmicVolume = (Math.pow(10, value / 100) - 1) / 9;
  return Math.min(Math.max(logarithmicVolume, 0), 1);
};

const formatTime = (seconds: number) => {
  if (!isFinite(seconds) || seconds === 0) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

const initialVolume = 25;

interface AudioControlsProps {
  currentTrack: TrackTypes | null;
  tracks: TrackTypes[];
  changeTrack: (track: TrackTypes) => void;
}

export default function AudioControls({ currentTrack, tracks, changeTrack }: AudioControlsProps) {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [wasPlayingBeforeSeek, setWasPlayingBeforeSeek] = useState(false);
  const [isSeekDragging, setIsSeekDragging] = useState(false);
  const [isVolumeDragging, setIsVolumeDragging] = useState(false);
  const [volume, setVolume] = useState(initialVolume);

  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const seekerRef = useRef<HTMLDivElement>(null);
  const volumeRef = useRef<HTMLDivElement>(null);

  // Reset state when track changes
  useEffect(() => {
    setDuration(0);
    setCurrentTime(0);
    setIsLoading(true);
    setIsPlaying(false); // Reset playing state when track changes
  }, [currentTrack]);

  // Set initial volume with logarithmic scaling
  useEffect(() => {
    const audioPlayer = audioPlayerRef.current;
    if (!audioPlayer) return;
    audioPlayer.volume = toLogarithmicVolume(initialVolume);
  }, []);

  // Set up audio event listeners with proper cleanup
  useEffect(() => {
    const audioPlayer = audioPlayerRef.current;
    if (!audioPlayer) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const updateDuration = () => {
      setDuration(audioPlayer.duration);
      setIsLoading(false);
    };

    const updateCurrentTime = () => {
      setCurrentTime(audioPlayer.currentTime);
      if (duration === 0 && audioPlayer.duration > 0) {
        setDuration(audioPlayer.duration);
        setIsLoading(false);
      }
    };

    const handleCanPlay = () => {
      if (duration === 0 && audioPlayer.duration > 0) {
        setDuration(audioPlayer.duration);
      }
      setIsLoading(false);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    const handleError = () => {
      audioPlayer.pause();
      setIsPlaying(false);
      setIsLoading(false);
    };

    // Handle ready state on mount
    if (audioPlayer.readyState >= 2 && audioPlayer.duration) {
      setDuration(audioPlayer.duration);
      setIsLoading(false);
    }

    audioPlayer.addEventListener("loadedmetadata", updateDuration, { signal });
    audioPlayer.addEventListener("timeupdate", updateCurrentTime, { signal });
    audioPlayer.addEventListener("canplay", handleCanPlay, { signal });
    audioPlayer.addEventListener("play", handlePlay, { signal });
    audioPlayer.addEventListener("pause", handlePause, { signal });
    audioPlayer.addEventListener("error", handleError, { signal });

    return () => {
      controller.abort();
    };
  }, [currentTrack, duration]);

  // Update volume when changed
  useEffect(() => {
    const audioPlayer = audioPlayerRef.current;
    if (audioPlayer) {
      audioPlayer.volume = toLogarithmicVolume(volume);
    }
  }, [volume]);

  const handlePreviousTrack = () => {
    if (!currentTrack) return;
    const currentIndex = tracks.findIndex((track) => track.file === currentTrack.file);
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    const prevTrack = tracks[prevIndex];
    if (prevTrack) {
      requestAnimationFrame(() => {
        changeTrack(prevTrack);
      });
    }
  };

  const handleNextTrack = () => {
    if (!currentTrack) return;
    const currentIndex = tracks.findIndex((track) => track.file === currentTrack.file);
    const nextIndex = (currentIndex + 1) % tracks.length;
    const nextTrack = tracks[nextIndex];
    if (nextTrack) {
      requestAnimationFrame(() => {
        changeTrack(nextTrack);
      });
    }
  };

  const handlePlayPause = () => {
    const audioPlayer = audioPlayerRef.current;
    if (!audioPlayer) return;
    if (audioPlayer.paused || audioPlayer.ended) {
      if (audioPlayer.error) audioPlayer.load();
      audioPlayer.play().catch((err) => console.error("Error playing:", err));
    } else {
      audioPlayer.pause();
    }
  };

  const handleStop = () => {
    const audioPlayer = audioPlayerRef.current;
    if (!audioPlayer) return;

    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    setCurrentTime(0);
  };

  // Seek bar handlers
  const handleSeekStart = (e: React.PointerEvent<HTMLDivElement>) => {
    const seekBar = seekerRef.current;
    if (!seekBar) return;

    seekBar.setPointerCapture(e.pointerId);
    setIsSeekDragging(true);
    setWasPlayingBeforeSeek(isPlaying);
    if (isPlaying) audioPlayerRef.current?.pause();
    updateSeekPosition(e);
  };

  const handleSeeking = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isSeekDragging) return;
    updateSeekPosition(e);
  };

  const handleSeekEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    const seekBar = seekerRef.current;
    if (!seekBar || !isSeekDragging) return;

    seekBar.releasePointerCapture(e.pointerId);
    setIsSeekDragging(false);

    if (wasPlayingBeforeSeek) {
      audioPlayerRef.current?.play().catch((err) => console.error("Error resuming:", err));
    }
  };

  const updateSeekPosition = (e: React.PointerEvent<HTMLDivElement>) => {
    const seekBar = seekerRef.current;
    const audio = audioPlayerRef.current;
    if (!seekBar || !audio || duration <= 0) return;

    const rect = seekBar.getBoundingClientRect();
    const position = Math.max(0, Math.min((e.clientX - rect.left) / rect.width, 1));
    const newTime = position * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Volume handlers
  const handleVolumeStart = (e: React.PointerEvent<HTMLDivElement>) => {
    const volumeBar = volumeRef.current;
    if (!volumeBar) return;

    volumeBar.setPointerCapture(e.pointerId);
    setIsVolumeDragging(true);
    updateVolumePosition(e);
  };

  const handleVolumeMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isVolumeDragging) return;
    updateVolumePosition(e);
  };

  const handleVolumeEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    const volumeBar = volumeRef.current;
    if (!volumeBar || !isVolumeDragging) return;

    volumeBar.releasePointerCapture(e.pointerId);
    setIsVolumeDragging(false);
  };

  const updateVolumePosition = (e: React.PointerEvent<HTMLDivElement>) => {
    const volumeBar = volumeRef.current;
    if (!volumeBar) return; // Fixed: removed duration check for volume

    const rect = volumeBar.getBoundingClientRect();
    const position = Math.max(0, Math.min((e.clientX - rect.left) / rect.width, 1));
    const newVolume = position * 100;
    setVolume(newVolume);
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div id="audio-controls">
      <audio ref={audioPlayerRef} src={currentTrack?.link || undefined} preload="metadata" />

      <div id="time-display">
        {formatTime(currentTime)} / {isLoading ? "--:--" : formatTime(duration)}
      </div>

      <div
        ref={seekerRef}
        id="seek-wrapper"
        aria-label="Seek"
        onPointerDown={handleSeekStart}
        onPointerMove={handleSeeking}
        onPointerUp={handleSeekEnd}
        onPointerCancel={handleSeekEnd}>
        <div id="seek-track">
          <div id="seek-progress" style={{ width: `${progressPercentage}%` }} />
        </div>
      </div>

      <div id="controls-bottom">
        <button type="button" onClick={handlePreviousTrack} disabled={!currentTrack} aria-label="Previous track">
          <SkipBack fill="currentColor" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={handlePlayPause}
          disabled={!currentTrack || isLoading}
          aria-label={isPlaying ? "Pause" : "Play"}>
          {isPlaying ? (
            <Pause fill="currentColor" aria-hidden="true" />
          ) : (
            <Play fill="currentColor" aria-hidden="true" />
          )}
        </button>
        <button type="button" disabled={!isPlaying} onClick={handleStop} aria-label="Stop">
          <Square fill="currentColor" aria-hidden="true" />
        </button>
        <button type="button" onClick={handleNextTrack} disabled={!currentTrack} aria-label="Next track">
          <SkipForward fill="currentColor" aria-hidden="true" />
        </button>
        <div id="volume-control" className={!currentTrack ? "disabled" : undefined}>
          {volume === 0 ? (
            <VolumeOff aria-hidden="true" />
          ) : volume <= 35 ? (
            <Volume fill="currentColor" aria-hidden="true" />
          ) : volume <= 70 ? (
            <Volume1 fill="currentColor" aria-hidden="true" />
          ) : (
            <Volume2 fill="currentColor" aria-hidden="true" />
          )}
          <div
            ref={volumeRef}
            id="volume-wrapper"
            aria-label="Volume"
            onPointerDown={handleVolumeStart}
            onPointerMove={handleVolumeMove}
            onPointerUp={handleVolumeEnd}
            onPointerCancel={handleVolumeEnd}>
            <div id="volume-track">
              <div id="volume-thumb" style={{ left: `${volume}%` }} />
            </div>
          </div>
        </div>
        {currentTrack ? (
          <a id="audio-download" href={currentTrack.link} className="heading" target="_blank" rel="noopener noreferrer">
            Download
          </a>
        ) : (
          <div id="audio-download" className="heading disabled no-select" aria-label="Disabled">
            Download
          </div>
        )}
      </div>
    </div>
  );
}
