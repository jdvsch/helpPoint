import { MainDiv } from './styles'

import React from 'react'

import { useDropzone } from 'react-dropzone'

interface File {
  lastModified: number
  name: string
  path: string
  preview: string
  size: number
  type: string
  webkitRelativePath: string
}

export default function DropFiles () {
  const [selectedFiles, setSelectedFiles] = React.useState([])
  console.log(selectedFiles)

  const onDrop = React.useCallback((acceptedFiles: File) => {
    // Do something with the files
    setSelectedFiles(acceptedFiles.map((file: Blob | MediaSource) => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })))
  }, [])

  const fileAtScreen = selectedFiles?.map((file, index) => (
      <div key={index}>
          <img src={file.preview} style={{ width: '200px' }} alt="" />
      </div>
  ))
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div>
        <MainDiv {...getRootProps()}>
          <input {...getInputProps()} />
          {
            isDragActive
              ? <p>Drop the files here ...</p>
              : <p>Drag & drop some files here, or click to select files</p>
          }
        </MainDiv>
        {fileAtScreen}
    </div>
  )
}
