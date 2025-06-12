import { useEffect, useRef, useState } from "react";
import { TrackTypes } from "@/_components/AudioPlayer";

const toLogarithmicVolume = (value: number) => {
  const logarithmicVolume = (Math.pow(10, value / 100) - 1) / 9;
  return Math.min(Math.max(logarithmicVolume, 0), 1);
};

interface AudioControlsProps {
  selectedTrack: TrackTypes | null;
  tracks: TrackTypes[];
  onTrackChange: (track: TrackTypes) => void;
}

export default function AudioControls({ selectedTrack, tracks, onTrackChange }: AudioControlsProps) {
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  /** FUNCTIONALITIES
   * - Play/Pause
   * - Stop (Pause + Reset to 0)
   * - Next/previous track
   * - Volume Slider (Logarithmic)
   * - Seek bar (Pointer capture)
   * - Display current time and duration
   */

  /** CONSTRAINTS
   * - One playing at a time
   * - Logarthmic volume curve
   * - If playing and seeking, resume play on seek end
   * - If paused and seeking, keep paused on seek end
   * - Capture pointer when seeking so your cursor can be off the bar
   * - Use signals for event cleanups
   * - If skip next at last track, play first track
   * - If skip previous at first track, play last track
   * - Do not autoplay to next track on track end (This isn't an album player, transitions to SFX)
   */

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

  return (
    <div>
      <audio ref={audioPlayerRef} controls src={selectedTrack?.link || undefined} />

      <button type="button" onClick={handlePlayPause}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}
