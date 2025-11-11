import Aurora from './elements/Aurora.jsx'
import Squares from './elements/Grid.jsx'
import '../assets/css/elements/aurora.css';
import '../assets/css/elements/grid.css';

export default function Background() {
  return (
    <div className="bg-aurora">
        <Aurora 
          colorStops={[
            "#ffadad", // 1. Rouge pastel,
            "#ffd6a5", // 2. Orange pastel
            "#fdffb6", // 3. Jaune pastel
            "#caffbf", // 4. Vert pastel
            "#9bf6ff", // 5. Cyan pastel
            "#a0c4ff", // 6. Bleu pastel
            "#bdb2ff", // 7. Indigo pastel
            "#ffc6ff" // 8. Violet/Rose pastel
            ]}
          blend={0.7}
          amplitude={0.2}
          speed={1.0}
        />
        <Squares 
            speed={0.05} 
            squareSize={80}
            direction='none' // up, down, left, right, diagonal
            borderColor='#13131c5e'
        />
        <div className="noise-overlay"></div>
    </div>
    );
}
