import styled from 'styled-components'

export const MusicListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`
export const TrackInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
`
export const MusicTrackImage = styled.img`
  height: 90px;
  width: 140px;
  margin-right: 20px;
`
export const NameGenreContainer = styled.div`
  font: 500 18px 'Roboto';
  color: #fff;
`
export const Name = styled.p`
  color: #fff;
  font: 500 18px/30px Roboto;
`
export const Genre = styled.p`
  color: #3b82f6;
  font: 500 18px/30px Roboto;
`
export const DurationDeleteContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Duration = styled.p`
  font: bold 20px Roboto;
  color: #fff;
  margin-right: 50px;
`
export const DeleteButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  color: #fff;
`
