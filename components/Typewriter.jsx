import { useEffect, useState } from "react";

export default function Typewriter({ lines = [], speed = 50, className = "" }) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let tempLines = Array(lines.length).fill("");

    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        const line = lines[currentLine];
        if (currentChar < line.length) {
          tempLines[currentLine] += line[currentChar];
          setDisplayedLines([...tempLines]);
          setCurrentLineIndex(currentLine);
          currentChar++;
        } else {
          currentLine++;
          currentChar = 0;
        }
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [lines, speed]);

  return (
    <h1 className={`font-bold text-center ${className}`}>
      {lines.map((_, index) => (
        <div key={index}>
          {displayedLines[index]}
          {index === currentLineIndex && !done && (
            <span className="animate-pulse ml-1 text-gray-800 dark:text-white">
              |
            </span>
          )}
        </div>
      ))}
    </h1>
  );
}
