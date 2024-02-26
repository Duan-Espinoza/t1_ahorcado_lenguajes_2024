import React, { useState, useEffect } from 'react';
import Header from './componentes/Header';
import Figure from './componentes/Figure';
import WrongLetters from './componentes/WrongLetters';
import Word from './componentes/Word';
import Popup from './componentes/Popup';
import Notification from './componentes/Notification';
import { showNotification as show, checkWin } from './helpers/helpers';

import './App.css';

//Duan Antonio Espinoza Olivares
//2019079490
//Tarea 1 - lenguajes de programación

// Array de palabras para el juego
//modificar para backend
const words = ['aplicacion', 'programa', 'interfaz', 'lenguaje'];
// Selecciona una palabra aleatoria del array
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  // Estados para controlar el estado del juego
  const [playable, setPlayable] = useState(true); // Indica si el juego es jugable
  const [correctLetters, setCorrectLetters] = useState([]); // Letras correctas seleccionadas por el jugador
  const [wrongLetters, setWrongLetters] = useState([]); // Letras incorrectas seleccionadas por el jugador
  const [showNotification, setShowNotification] = useState(false); // Controla la visualización de notificaciones

  // Efecto de lado para manejar eventos de teclado
  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          // La letra es correcta
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            // Ya se seleccionó esta letra
            show(setShowNotification);
          }
        } else {
          // La letra es incorrecta
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            // Ya se seleccionó esta letra
            show(setShowNotification);
          }
        }
      }
    }
    // Agrega un event listener para escuchar eventos de teclado
    window.addEventListener('keydown', handleKeydown);

    // Limpia el event listener al desmontar el componente
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  // Función para reiniciar el juego
  function playAgain() {
    setPlayable(true);

    // Vacía los arrays de letras correctas e incorrectas
    setCorrectLetters([]);
    setWrongLetters([]);

    // Selecciona una nueva palabra aleatoria
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      {/* Componente de cabecera */}
      <Header />
      {/* Contenedor principal del juego */}
      <div className="game-container">
        {/* Componente para mostrar la figura del ahorcado */}
        <Figure wrongLetters={wrongLetters} />
        {/* Componente para mostrar las letras incorrectas */}
        <WrongLetters wrongLetters={wrongLetters} />
        {/* Componente para mostrar la palabra a adivinar */}
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      {/* Componente emergente para el final del juego */}
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      {/* Componente para mostrar notificaciones */}
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
