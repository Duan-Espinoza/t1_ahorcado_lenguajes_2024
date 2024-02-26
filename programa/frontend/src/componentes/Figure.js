import React from 'react';

// Componente funcional Figure que representa la figura del ahorcado
const Figure = ({ wrongLetters }) => {
  // Calcula el número de errores (número de letras incorrectas)
  const errors = wrongLetters.length;

  return (
    // Contenedor SVG para la figura del ahorcado
    <svg height="250" width="200" className="figure-container">
      {/* Rod */}
      {/* Línea horizontal superior */}
      <line x1="60" y1="20" x2="140" y2="20" />
      {/* Línea vertical */}
      <line x1="140" y1="20" x2="140" y2="50" />
      {/* Línea vertical del soporte */}
      <line x1="60" y1="20" x2="60" y2="230" />
      {/* Línea horizontal del soporte */}
      <line x1="20" y1="230" x2="100" y2="230" />

      {/* Cabeza */}
      {/* Se muestra solo si hay al menos un error */}
      {errors > 0 &&
        <circle cx="140" cy="70" r="20" />
      }
      {/* Cuerpo */}
      {/* Se muestra solo si hay al menos dos errores */}
      {errors > 1 &&
        <line x1="140" y1="90" x2="140" y2="150" />
      }
      {/* Brazos */}
      {/* Se muestra solo si hay al menos tres errores */}
      {errors > 2 &&
        <line x1="140" y1="120" x2="120" y2="100" />
      }
      {/* Se muestra solo si hay al menos cuatro errores */}
      {errors > 3 &&
        <line x1="140" y1="120" x2="160" y2="100" />
      }
      {/* Piernas */}
      {/* Se muestra solo si hay al menos cinco errores */}
      {errors > 4 &&
        <line x1="140" y1="150" x2="120" y2="180" />
      }
      {/* Se muestra solo si hay al menos seis errores */}
      {errors > 5 &&
        <line x1="140" y1="150" x2="160" y2="180" />
      }
    </svg>
  );
}

// Exporta el componente Figure
export default Figure;
