//  console.log("Welcome To Spotify!");
let songindex = 0;
let audioElement = new Audio("/songs/3servis.mp3");
let masterplay = document.getElementById("masterplay");
let progressbar = document.getElementById("progress");
let gif = document.getElementById("gif");
let mastersongname = document.getElementById("mastersongname");
let songitems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Blinding By The Lights  -    The Weekend",
    filepath: "/songs/0.mp3",
    coverpath: "/covers/BBTL.jpg",
  },
  {
    songName: "Apni Dhi Schoolo Hata Le",
    filepath: "/songs/1.mp3",
    coverpath: "/covers/danace.jpg",
  },
  {
    songName: "Servis Shoes Song",
    filepath: "/songs/2.mp3",
    coverpath: "/covers/servislogo.png",
  },
  {
    songName: "Bado Badi  -    Chahat Fateh Ali Khan",
    filepath: "/songs/3.mp3",
    coverpath: "/covers/chahat.jpg",
  },
  {
    songName: "Toba Toba   -    Chahat Fateh Ali Khan",
    filepath: "/songs/4.mp3",
    coverpath: "/covers/chahat.jpg",
  },
  {
    songName: "Wakka Wakka   -   Fakeera",
    filepath: "/songs/5.mp3",
    coverpath: "/covers/black.jpg",
  },
  {
    songName: "Jeffery Bezos  song",
    filepath: "/songs/6.mp3",
    coverpath: "/covers/jeffbezosi.jpg",
  },
];

songitems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove("fa-play");
    masterplay.classList.add("fa-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-pause");
    masterplay.classList.add("fa-play");
    gif.style.opacity = 0;
  }
});
// audioelement.play();
// listen to events
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

  progressbar.value = progress;
});
progressbar.addEventListener("change", () => {
  audioElement.currentTime = (progressbar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemplay")).forEach(
    (element, i) => {
      element.classList.remove("fa-pause");
      element.classList.add("fa-play");
    }
  );
};
Array.from(document.getElementsByClassName("songItemplay")).forEach(
  (element, i) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);
      makeAllPlays();
      songindex = parseInt(e.target.id);
      e.target.classList.remove("fa-play");
      e.target.classList.add("fa-pause");
      audioElement.src = `/songs/${songindex}.mp3`;
      mastersongname.innerText = songs[songindex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterplay.classList.remove("fa-play");
      masterplay.classList.add("fa-pause");
    });
  }
);
document.getElementById("next").addEventListener("click", () => {
  if (songindex >= 6) {
    songindex = 0;
  } else {
    songindex += 1;
  }
  audioElement.src = `/songs/${songindex}.mp3`;
  mastersongname.innerText = songs[songindex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove("fa-play");
  masterplay.classList.add("fa-pause");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songindex <= 0) {
    songindex = 6;
  } else {
    songindex -= 1;
  }
  audioElement.src = `/songs/${songindex}.mp3`;
  mastersongname.innerText = songs[songindex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove("fa-play");
  masterplay.classList.add("fa-pause");
});
