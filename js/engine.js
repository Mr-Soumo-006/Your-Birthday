export function typeText(el, text, speed = 35) {
  return new Promise(resolve => {
    let i = 0;
    el.textContent = "";

    const tick = () => {
      el.textContent += text[i++];
      if (i < text.length) {
        setTimeout(tick, speed);
      } else {
        resolve();
      }
    };

    tick();
  });
}

export function fadeTo(url) {
  document.body.style.animation = "sceneOut 1.2s ease forwards";
  setTimeout(() => location.href = url, 1200);
}

export function playAmbient(src, volume = 0.25) {
  let audio = document.getElementById("ambient");
  if (!audio) {
    audio = document.createElement("audio");
    audio.id = "ambient";
    audio.loop = true;
    document.body.appendChild(audio);
  }
  audio.src = src;
  audio.volume = volume;
  audio.play();
}

export async function revealLines(lines, delay = 800) {
  for (const line of lines) {
    line.classList.add("show");
    await new Promise(r => setTimeout(r, delay));
  }
}

export function playTypeSound(audio) {
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}


let bgAudio = null;
let textAudio = null;


export function playMusic(src, volume = 0.4) {
  if (!bgAudio) {
    bgAudio = new Audio();
    bgAudio.loop = true;
  }
  bgAudio.src = src;
  bgAudio.volume = volume;
  bgAudio.play();
}

export function stopMusic() {
  if (bgAudio) {
    bgAudio.pause();
    bgAudio.currentTime = 0;
  }
}

export function initTextSound(src, volume = 0.6) {
  textAudio = new Audio(src);
  textAudio.volume = volume;
}

export function playTextSound() {
  if (!textAudio) return;
  textAudio.currentTime = 0;
  textAudio.play();
}
