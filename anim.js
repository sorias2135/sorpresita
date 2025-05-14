// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "So I'ma love you", time: 2 },
  { text: "every night like it's", time: 3 },
  { text: "the last night", time: 4 },
  { text: "perdonenme todos", time: 5 },
  { text: "Like it's the last night", time: 6 },
  { text: "no asecto", time: 7 },
  { text: "If the world was ending", time: 8 },
  { text: "I'd wanna be next to you", time: 9 },
  { text: "Todo brillaba, tus ojos, tu pelo", time: 45 },
  { text: "Todo se movía a mi alrededor y no sabía que hacer", time: 48 },
  { text: "No sabía si besarte o salir a correr", time: 53 },
  { text: "Y me tomaste de la mano, para siempre", time: 56 },
  { text: "Y ahora sé", time: 62 },
  { text: "Cuál fue la fuerza que me ató a ti", time: 64 },
  { text: "Corramos juntos, vámonos de aquí", time: 67 },
  { text: "A donde tú quieras", time: 70 },
  { text: "Y ahora sé", time: 73 },
  { text: "Cuál fue la fuerza que me ató a ti", time: 75 },
  { text: "Corramos juntos, vámonos de aquí", time: 77 },
  { text: "A donde tú quieras", time: 80 },
  { text: "Hoy me siento afuera del planeta", time: 97 },
  { text: "Y no puedo respirar muy bien", time: 101 },
  { text: "No están tus labios donde los dejé", time: 103 },
  { text: "No fue la vida como la planeamos", time: 105 },
  { text: "Recuerdo el día en el que te besé", time: 113 },
  { text: "Yo estaba loco, pero tú también", time: 116 },
  { text: "Todo brillaba, tus ojos, tu pelo", time: 119 },
  { text: "Todo se caìa a mi alrededor y no sabía que hacer", time: 121 },
  { text: "No sabía si besarte o salir a correr", time: 125 },
  { text: "Y me tomaste de la mano, para siempre", time: 128 },
  { text: "Y ahora sé", time: 134 },
  { text: "Cuál fue la fuerza que me ató a ti", time: 137 },
  { text: "Corramos juntos, vámonos de aquí", time: 139 },
  { text: "A donde tú quieras", time: 142 },
  { text: "Y ahora sé", time: 146 },
  { text: "Cuál fue la fuerza que me ató a ti", time: 148 },
  { text: "Corramos juntos, vámonos de aquí", time: 151 },
  { text: "A donde tú quieras", time: 153 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
