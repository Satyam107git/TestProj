import { SpectrumVisualizer, SpectrumVisualizerTheme } from "react-audio-visualizers";
import "./index.css"

function App() {
  return (

    <div style={{height: '100vh'}}>
    <SpectrumVisualizer
    audio="https://cdn.discordapp.com/attachments/775740994595323954/775741544149549096/Andromedik_-_SHE_NCS_ReleaseMP3_160K.mp3"
    theme={SpectrumVisualizerTheme.radialSquaredBars}
    colors={["#009688", "#26a69a"]}
    iconsColor="#26a69a"
    backgroundColor="blue"
    showMainActionIcon
    showLoaderIcon
    highFrequency={8000}
      />
    </div>
  );
}

export default App;
