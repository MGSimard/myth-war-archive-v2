import { useState } from "react";

export function AudioPlayer() {
  const [selectedAudio, setSelectedAudio] = useState<string | null>(null);

  return (
    <>
      <div id="audio-list">
        <div id="audio-list-header">
          <h3>Audio List</h3>
        </div>
        <div id="audio-list-content">
          <h4>Music</h4>
          <ul>
            <li>
              <button type="button" aria-label="Select Audio">
                Audio Track 1
              </button>
            </li>
          </ul>
          <h4>Ambient</h4>
          <ul>
            <li>
              <button type="button" aria-label="Select Audio">
                Audio Track 2
              </button>
            </li>
          </ul>
          <h4>Sound Effects</h4>
          <ul>
            <li>
              <button type="button" aria-label="Select Audio">
                Audio Track 3
              </button>
            </li>
          </ul>
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
