import { Fragment, useState } from "react";
import tracks from "@/_data/assets-audio.json";
import AudioControls from "./AudioControls";

interface TrackTypes {
  file: string;
  description: string;
  link: string;
}

export function AudioPlayer() {
  const [selectedAudio, setSelectedAudio] = useState<TrackTypes | null>(null);

  return (
    <>
      <div id="audio-list">
        <div id="audio-list-header">
          <h3 className="label">Audio List</h3>
        </div>
        <div id="audio-list-content">
          {Object.entries(tracks).map(([category, tracks]) => (
            <Fragment key={category}>
              <h4 className="label">{category}</h4>
              <ul>
                {tracks.map((track) => (
                  <li key={track.file}>
                    <button
                      type="button"
                      aria-label={`Select ${track.file}`}
                      onClick={() => setSelectedAudio(track)}
                      className={selectedAudio?.file === track.file ? "selected" : ""}>
                      {track.file}
                    </button>
                  </li>
                ))}
              </ul>
            </Fragment>
          ))}
        </div>
      </div>
      <div id="audio-right">
        <div id="audio-info" aria-atomic="true" aria-live="polite" aria-label="Current Track Information">
          <label htmlFor="audio-file-name">
            <span className="label">File Name:</span>{" "}
            <input id="audio-file-name" type="text" value={selectedAudio?.file} readOnly />
          </label>
          <label htmlFor="audio-length">
            <span className="label">File Length:</span>
            <input id="audio-length" type="text" value={selectedAudio?.length} readOnly />
          </label>
          <label htmlFor="audio-details">
            <span className="label">Details:</span>
            <textarea id="audio-details" value={selectedAudio?.description} readOnly rows={5} />
          </label>
        </div>
        <AudioControls />
      </div>
    </>
  );
}
