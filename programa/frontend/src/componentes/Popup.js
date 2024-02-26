import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';

// Componente funcional Popup que muestra un mensaje al final del juego
const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
  // Variables para almacenar los mensajes finales
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  // Verifica si el jugador ganó o perdió y actualiza las variables de estado en consecuencia
  if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = '¡GANASTE!';
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = '¡PERDISTE!';
    finalMessageRevealWord = `... LA PALABRA ERA: ${selectedWord}`;
    playable = false;
  }

  // Efecto de lado para actualizar el estado jugable cuando cambia la condición de juego
  useEffect(() => {
    setPlayable(playable);
  });

  return (
    // Contenedor del popup, se muestra solo si finalMessage no está vacío
    <div className="popup-container" style={finalMessage !== '' ? { display: 'flex' } : {}}>
      <div className="popup">
        {/* Muestra el mensaje final */}
        <h2>{finalMessage}</h2>
        {/* Muestra la palabra si el jugador perdió */}
        <h3>{finalMessageRevealWord}</h3>
        {/* Botón para volver a jugar */}
        <button onClick={playAgain}>¡Jugar de nuevo!</button>
      </div>
    </div>
  );
}

// Exporta el componente Popup
export default Popup;
