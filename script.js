let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

let track = document.createElement('audio');

let All_song = [
   {
     name: "Juice WRLD - Lucid Dream",
     path: "music/song1.mp3",
     img: "img/img6.jpg",
     singer: "1"
   },
   {
     name: "Lil Uzi Vert - XO Tour Llif3",
     path: "music/song2.mp3",
     img: "img/img6.jpg",
     singer: "2"
   },
   {
     name: "Trippie Redd - Shake It Up",
     path: "music/song3.mp3",
     img: "img/img6.jpg",
     singer: "3"
   },
   {
     name: "XXXTENTACION - HOPE",
     path: "music/song4.mp3",
     img: "img/img6.jpg",
     singer: "4"
   },
   {
     name: "Soda Luv - Thousands of Hands",
     path: "music/song5.mp3",
     img: "img/img6.jpg",
     singer: "5"
   },
   {
    name: "BlocBoy JB - Look Alive (feat. Drake)",
    path: "music/song6.mp3",
    img: "img/img6.jpg",
    singer: "6"
  },
  {
    name: "Travis Scott - Butterfly Effect",
    path: "music/song7.mp3",
    img: "img/img6.jpg",
    singer: "7"
  },
  {
    name: "Viktor Cojj - Poslednijj gerojj",
    path: "music/song8.mp3",
    img: "img/img6.jpg",
    singer: "8"
  },
  {
    name: "Queen - Killer Queen",
    path: "music/song9.mp3",
    img: "img/img6.jpg",
    singer: "9"
  },
  {
    name: "ACDC - Back In lack",
    path: "music/song10.mp3",
    img: "img/img6.jpg",
    singer: "10"
  },
  {
    name: "NLE Choppa - Camelot",
    path: "music/song11.mp3",
    img: "img/img6.jpg",
    singer: "11"
  },
  {
    name: "Pop Smoke - Dior",
    path: "music/song12.mp3",
    img: "img/img6.jpg",
    singer: "12"
  },
  {
    name: "Playboi Carti - Magnolia",
    path: "music/song13.mp3",
    img: "img/img6.jpg",
    singer: "13"
  },
  {
    name: "Migos, Drake - Walk It Talk It",
    path: "music/song14.mp3",
    img: "img/img6.jpg",
    singer: "14"
  },
  {
    name: "Mayot, Feduk - Sea",
    path: "music/song15.mp3",
    img: "img/img6.jpg",
    singer: "15"
  },
  {
    name: "LSP - Malenkijj princ",
    path: "music/song16.mp3",
    img: "img/img6.jpg",
    singer: "16"
  },
  {
    name: "Joji - Yeah right",
    path: "music/song17.mp3",
    img: "img/img6.jpg",
    singer: "17"
  },
  {
    name: "GONEFludd - SAKHARNYJJ CHELOVEK",
    path: "music/song18.mp3",
    img: "img/img6.jpg",
    singer: "18"
  },
  {
    name: "Blueface - Daddy (feat. Rich The Kid)",
    path: "music/song19.mp3",
    img: "img/img6.jpg",
    singer: "19"
  },
  {
    name: "ASAP Rocky - Fuck Sleep",
    path: "music/song20.mp3",
    img: "img/img6.jpg",
    singer: "20"
  },
  {
    name: "21",
    path: "music/song21.mp3",
    img: "img/img6.jpg",
    singer: "21"
  },
  {
    name: "22",
    path: "music/song22.mp3",
    img: "img/img6.jpg",
    singer: "22"
  },
  {
    name: "23",
    path: "music/song23.mp3",
    img: "img/img6.jpg",
    singer: "23"
  },
  {
    name: "24",
    path: "music/song24.mp3",
    img: "img/img6.jpg",
    singer: "24"
  },
  {
    name: "25",
    path: "music/song25mp3",
    img: "img/img6.jpg",
    singer: "25"
  },
  {
    name: "26",
    path: "music/song26.mp3",
    img: "img/img6.jpg",
    singer: "26"
  },
  {
    name: "27",
    path: "music/song27.mp3",
    img: "img/img6.jpg",
    singer: "27"
  },
  {
    name: "28",
    path: "music/song28.mp3",
    img: "img/img6.jpg",
    singer: "28"
  },
  {
    name: "29",
    path: "music/song29.mp3",
    img: "img/img6.jpg",
    singer: "29"
  },
  {
    name: "30",
    path: "music/song30.mp3",
    img: "img/img6.jpg",
    singer: "30"
  },
  {
    name: "31",
    path: "music/song31.mp3",
    img: "img/img6.jpg",
    singer: "31"
  },
  {
    name: "32",
    path: "music/song32.mp3",
    img: "img/img6.jpg",
    singer: "32"
  },
  {
    name: "33",
    path: "music/song33.mp3",
    img: "img/img6.jpg",
    singer: "33"
  },
  {
    name: "34",
    path: "music/song34.mp3",
    img: "img/img6.jpg",
    singer: "34"
  },
  {
    name: "35",
    path: "music/song35.mp3",
    img: "img/img6.jpg",
    singer: "35"
  },
  {
    name: "36",
    path: "music/song36.mp3",
    img: "img/img6.jpg",
    singer: "36"
  },
  {
    name: "37",
    path: "music/song37.mp3",
    img: "img/img6.jpg",
    singer: "37"
  },
  {
    name: "38",
    path: "music/song38.mp3",
    img: "img/img6.jpg",
    singer: "38"
  },
  {
    name: "39",
    path: "music/song39.mp3",
    img: "img/img6.jpg",
    singer: "39"
  },
  {
    name: "40",
    path: "music/song40.mp3",
    img: "img/img6.jpg",
    singer: "40"
  },
  {
    name: "41",
    path: "music/song41.mp3",
    img: "img/img6.jpg",
    singer: "41"
  },
  {
    name: "42",
    path: "music/song42.mp3",
    img: "img/img6.jpg",
    singer: "42"
  },
  {
    name: "43",
    path: "music/song43.mp3",
    img: "img/img6.jpg",
    singer: "43"
  },
  {
    name: "44",
    path: "music/song44.mp3",
    img: "img/img6.jpg",
    singer: "44"
  },
  {
    name: "45",
    path: "music/song45.mp3",
    img: "img/img6.jpg",
    singer: "45"
  },
  {
    name: "46",
    path: "music/song46.mp3",
    img: "img/img6.jpg",
    singer: "46"
  },
  {
    name: "47",
    path: "music/song47.mp3",
    img: "img/img6.jpg",
    singer: "47"
  },
  {
    name: "48",
    path: "music/song48.mp3",
    img: "img/img6.jpg",
    singer: "48"
  },
  {
    name: "49",
    path: "music/song49.mp3",
    img: "img/img6.jpg",
    singer: "49"
  },
  {
    name: "50",
    path: "music/song50.mp3",
    img: "img/img6.jpg",
    singer: "50"
  },
];

function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);

function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}

 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }

 function reset_slider(){
 	slider.value = 0;
 }

function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}

function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}

function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#FF8A65";
	}
}


function range_slider(){
	let position = 0;
        
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }