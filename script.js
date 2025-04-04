
//Initialize the variables
let songIndex = 0;
let audioElement =new Audio('0.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.querySelector('#masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Naa sikha jeena",filePath:"songs/0.mp3", coverPath: "cover2.jpg"},
    {songName: "Cielo-Humaa",filePath:"songs/1.mp3", coverPath: "cover2.jpg"},
    {songName: "Ishq-Bulava",filePath:"songs/2.mp3", coverPath: "cover2.jpg"},
    {songName: "Love-Yaa",filePath:"songs/3.mp3", coverPath: "cover2.jpg"},
    {songName: "TUTU-X-Song",filePath:"songs/4.mp3", coverPath: "cover2.jpg"},
    {songName: "Naine Ta Heere",filePath:"songs/5.mp3", coverPath: "cover2.jpg"},
    {songName: "Happy Birthday",filePath:"songs/6.mp3", coverPath: "cover2.jpg"},
    {songName: "Believer-Song",filePath:"songs/7.mp3", coverPath: "cover2.jpg"},
    {songName: "Cielo-Huma",filePath:"songs/8.mp3", coverPath: "cover2.jpg"},
    {songName: "Koi-Sehri",filePath:"songs/9.mp3", coverPath: "cover2.jpg"},
]
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
// audioElement.play();


//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    console.log(audioElement.currentTime);
    if(audioElement.paused || audioElement.currentTime <= 0){
       
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
      
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        
       let songPlay=e.target.classList
        songPlay.remove('fa-play-circle');
        songPlay.add('fa-pause-circle');
        audioElement.src = `/${songIndex-1}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
      if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    songPlay.remove('fa-play-circle');
    songPlay.add('fa-pause-circle');
  
 
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 9;
    }
    else{
        songIndex -= 1;
    }
    
    audioElement.src = `/${songIndex}.mp3`;
    
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    songPlay.remove('fa-play-circle');
    songPlay.add('fa-pause-circle');
 
  
})

