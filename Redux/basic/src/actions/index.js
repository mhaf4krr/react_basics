//Action Creator

export const selectSong = (song) => {
  //Return Action

  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
