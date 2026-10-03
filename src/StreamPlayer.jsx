import { useState, useRef} from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

function StreamPlayer ({ stationName, streamUrl }){
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

        function togglePlay() {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play();
                setIsPlaying(true);
            }
        }
        function toggleMute() {
            audioRef.current.muted = !audioRef.current.muted;
            setIsMuted(!isMuted);
            }

    return (
        <section className = "stream-player">
            <audio ref = {audioRef} src = {streamUrl} preload = "none" />
            <div className="now-playing">
                <span className="live-badge">LIVE!</span>
                <span className = "player-station"> {stationName}</span>
            </div>

            <div className = "controls">
                <button onClick = {togglePlay} aria-label = {isPlaying ? 'Pause' : 'Play'}>
                    {isPlaying  ? <FaPause/> : <FaPlay/>}
                </button>
                <button onClick={toggleMute} aria-label={isMuted ? 'Unmute' : 'Mute'}>
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
            </div>
        </section>
    );
}
export default StreamPlayer;