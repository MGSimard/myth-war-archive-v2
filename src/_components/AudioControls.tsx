import { TrackTypes } from "@/_components/AudioPlayer";

export default function AudioControls({ selectedTrack }: { selectedTrack: TrackTypes | null }) {
  return (
    <div id="audio-controls">
      {selectedTrack ? (
        <audio key={selectedTrack.link} src={selectedTrack.link} controls autoPlay />
      ) : (
        <div className="audio-placeholder">No track selected</div>
      )}
    </div>
  );
}
