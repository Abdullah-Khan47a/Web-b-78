// console.log("Welcome To Spotify!");
//       let songindex=0;
//       let audioElement= new Audio("servis.mp3");
//       let masterplay=document.getElementById("masterplay");
//       let progressbar=document.getElementById("progress");
//       let gif=document.getElementById("gif");
//       let songitems=Array.from(document.getElementsByClassName("songItem"));




//       let songs=[
//        {songName: "Blinding By The Lights  -    The Weekend" ,filepath:"c:/Users/HOME - PC/Downloads/The Weeknd - Blinding Lights (Official Audio).mp3",coverpath:"cobers.jpg"},
//        {songName: "Apni Dhi Schoolo Hata Le" ,filepath:"c:/Users/HOME - PC/Downloads/danace krdi pai.mp3",coverpath:"danace.jpg"},
//        {songName: "Servis Shoes Song" ,filepath:"c:/Users/HOME - PC/Downloads/servis.mp3",coverpath:"servislogo.png"},
//        {songName: "Bado Badi  -    Chahat Fateh Ali Khan" ,filepath:"c:/Users/HOME - PC/Downloads/Chahat Fateh Ali Khan - BADO BADI (Official Music Video).mp3",coverpath:"chahat.jpg"},
//        {songName: "toba Toba   -    Chahat Fateh Ali Khan" ,filepath:"c:/Users/HOME - PC/Downloads/Toba Toba Song by Chahat Fateh Ali Khan.mp3",coverpath:"chahat.jpg"},
//        {songName: "Wakka Wakka   -   Fakeera" ,filepath:"c:/Users/HOME - PC/Downloads/WAKA WAKA FUNNY PAKISTANI VERSION.mp3",coverpath:"fakeera.jpg"},
//        {songName: "Bado Badi  -    Chahat Fateh Ali Khan" ,filepath:"c:/Users/HOME - PC/Downloads/Chahat Fateh Ali Khan - BADO BADI (Official Music Video).mp3",coverpath:"chahat.jpg"}
      
//       ];

//       songitems.forEach((element) => {
//         console.log(element,i);
//         element.getElementsByTagName("img")[0].src=songs[i].coverpath;
//         element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
//       });
//      masterplay.addEventListener("click",()=>{
//       if(audioElement.paused|| audioElement.currentTime<=0){
//        audioElement.play();
//        masterplay.classList.remove("fa-play");
//        masterplay.classList.add("fa-pause");
//        gif.style.opacity=1;
//       }
//       else{
//         audioElement.pause();
//        masterplay.classList.remove("fa-pause");
//        masterplay.classList.add("fa-play");
//        gif.style.opacity=0;
//       }


//      })
//       // audioelement.play();
//       // listen to events
//       audioElement.addEventListener("timeupdate",()=>{
        
//         progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
        
//         progressbar.value=progress;
//       });
//       progressbar.addEventListener("change",()=>{

//         audioElement.currentTime=progressbar.value*audioElement.duration/100;
//       })