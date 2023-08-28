import { DragDrop, Paragraph, Image, Button } from './styles'

import React from 'react'
import { useDropzone } from 'react-dropzone'
import { BiCameraOff } from 'react-icons/bi'

interface File {
  lastModified: number
  name: string
  path: string
  preview: string
  size: number
  type: string
  webkitRelativePath: string
}

export default function DropImage () {
  const [imageFiles, setImageFiles] = React.useState<File[]>([])

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps
  } = useDropzone({
    multiple: false,
    accept: {
      'image/jpeg': [],
      'image/png': []
    },
    onDrop: (acceptedFiles: any[]) => {
      setImageFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      )
    }
  })

  const acceptedFileItems = acceptedFiles.length
  const fileRejectionItems = fileRejections.length

  const fileAtScreen = imageFiles?.map((file, index) => (
    <Image key={index} src={file.preview} alt="" />
  ))

  React.useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => { imageFiles.forEach((file) => { URL.revokeObjectURL(file.preview) }) }
  }, [])

  const getNewImage = () => {
    setImageFiles([])
  }

  return (
    <>
    {imageFiles.length === 0
      ? <>
      <DragDrop {...getRootProps()}>
        <input {...getInputProps()} />
        <Paragraph>DnD or click here</Paragraph>
        <Paragraph>Only one image will be accepted</Paragraph>
      </DragDrop>
      {(acceptedFileItems === 0 && fileRejectionItems !== 0) &&
        <Paragraph>Just one image (jpeg or png) can be upload</Paragraph>
      }
    </>
      : <>
      { fileAtScreen }
      <Button onClick={getNewImage}>
        <BiCameraOff />
      </Button>
      </>
    }
    </>
  )
}
