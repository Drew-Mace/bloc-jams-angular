 (function() {
     function SongPlayer(Fixtures) {
          var SongPlayer = {};
         
         var currentAlbum = Fixtures.getAlbum();
         
 /**
 * @desc Buzz object audio file
 * @type {Object}
 */         
     var currentBuzzObject = null;
         
 /**
 * @function setSong
 * @desc Stops currently playing song and loads new audio file as currentBuzzObject
 * @param {Object} song
 */         
var setSong = function(song) {
    if (currentBuzzObject) {
        currentBuzzObject.stop();
        SongPlayer.currentSong.playing = null;
    }
 
    currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
    });
 
    SongPlayer.currentSong = song;
 };   

/** 
*@desc play currentBuzzObject
*@type {Object} 
*/
var playSong = function(song){
    currentBuzzObject.play();
    stopSong();
    
};

var stopSong = function(song){
    currentBuzzObject.stop();
    son
}
/**
* @desc Get index of song
* @type {object}
*/
   var getSongIndex = function(song) {
     return currentAlbum.songs.indexOf(song);
 };

         SongPlayer.currentSong = null;  

/**
* @function Song play
* @desc Plays song
* @para {object} song
*/     
         SongPlayer.play = function(song) {
             song = song || SongPlayer.currentSong;
         if (SongPlayer.currentSong !== song) {
             setSong(song);
             playSong(song);
                 
       } else if (SongPlayer.currentSong === song) {
         if (currentBuzzObject.isPaused()) {
             playSong(song);
         }
     } 
  };

     
/**
*@desc pause currently playing song
*@type {Object}
*/
         
 SongPlayer.pause = function(song) {
     song = song || SongPlayer.currentSong;
     currentBuzzObject.pause();
     stopSong();
 };         

/* 
* @desc return to previous song
* @type {Object} song
*/
         SongPlayer.previous = function() {
              var currentSongIndex = getSongIndex(SongPlayer.currentSong);
              currentSongIndex--;
              
         if (currentSongIndex < 0) {
            currentBuzzObject.stop();
                 SongPlayer.currentSong.playing = null;
                } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
              }
          };
         
       SongPlayer.next = function() {
         var currentSongIndex = getSongIndex(SongPlayer.currentSong);
          currentSongIndex++;
           
         if (currentSongIndex > currentAlbum.songs.length-1) {
        
        stopSong(SongPlayer.currentSong);
             } else {
               var song = currentAlbum.songs[currentSongIndex];
               setSong(song);
               playSong(song);
                 
              }
          };
         
          return SongPlayer;
     }
 
     angular
         .module('blocJams')
 })();