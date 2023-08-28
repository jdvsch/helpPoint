import styled from 'styled-components'

export const DragDrop = styled.div`
height: 200px;
width: 200px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
`

export const Image = styled.img`
height: 200px;
width: 200px;
border-radius: 50%;
`
export const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
}

export const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
}

export const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
}

export const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
}
