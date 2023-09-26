import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
`
export const ArtistBg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 450px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 100px;
`
export const ArtistName = styled.h1`
  font: bold 42px Roboto;
  color: #fff;
`
export const ArtistInfo = styled.p`
  font: 400 32px Roboto;
  color: #fff;
`
export const PlayListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px;
`
export const PlayListHeading = styled.h1`
  font: bold 32px Roboto;
  color: #fff;
`
export const SearchInput = styled.input`
  height: 30px;
  width: 18%;
  padding-left: 15px;
  color: #cbd5e1;
  border: 1px solid #fff;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`
export const MusicList = styled.ul`
  padding: 0;
  margin-left: 50px;
  margin-right: 50px;
`
export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NoSongsText = styled.p`
  font: bold 32px Roboto;
  color: #fff;
`
