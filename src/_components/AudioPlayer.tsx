import { Fragment, useState } from "react";
import tracks from "@/_data/assets-audio.json";

export function AudioPlayer() {
  const [selectedAudio, setSelectedAudio] = useState<string | null>(null);

  return (
    <>
      <div id="audio-list">
        <div id="audio-list-header">
          <h3>Audio List</h3>
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
                      onClick={() => setSelectedAudio(track.file)}>
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
        <ul>
          <li className="label">File Name [FIELD]</li>
          <li className="label">File Length [FIELD]</li>
          <li className="label">Details [FIELD]</li>
        </ul>
      </div>
      <div id="audio-controls">Audio Controls</div>
    </>
  );
}
