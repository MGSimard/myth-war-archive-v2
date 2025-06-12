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

  return (
    <div>
      <audio ref={audioPlayerRef} controls src={selectedTrack?.link || undefined} />
    </div>
  );
}
