import React from "react";

const HighScores = ({ highScores }) => {
    return (
      <div>
        <h2>High Scores</h2>
        {highScores.length > 0 ? (
          <ol>
            {highScores.map((score, i) => (
              <li key={i}>{score}</li>
            ))}
          </ol>
        ) : (
          <p>No high scores yet.</p>
        )}
      </div>
    );
  };
export default HighScores;  