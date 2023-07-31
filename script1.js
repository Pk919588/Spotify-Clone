console.log("Welcome to Spotify");

//Initialize the Variables
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
// let sonsItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Motivation",filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Happy",filePath:"song/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"I See the Light",filePath:"song/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"Rise Up",filePath:"song/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Let It Go",filePath:"song/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"Brave ",filePath:"song/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"Fight Song",filePath:"song/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"I See the Light",filePath:"song/8.mp3", coverPath:"covers/8.jpg"},
    
]
//  songItem.forEach((Element)=>{
//      console.log(element,i);
//      Element.getElementsByTagName(img)[0].src=sons[i].coverPathPath;
//      element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
//  })
//let audioElement=new Audio('1.mp3');
//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=0;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;


})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    Element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');


    })
}) 
    
    




