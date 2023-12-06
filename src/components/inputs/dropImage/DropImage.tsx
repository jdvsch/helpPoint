import { DragDrop, Paragraph, Image, ImageDiv, Button } from './styles'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { language } from './language'

import React from 'react'
import { useDropzone } from 'react-dropzone'
import { MdDeleteForever } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { setFeedbackModal } from '../../../redux/slices/authState'
import DeleteConfirmation from '../../modal/deleteConfirmation/DeleteConfirmation'

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
  const { authState } = useAppSelector(state => state)
  const dispatch = useAppDispatch()
  const idiom = language[authState.globalStatus.language as keyof typeof language]
  const [imageFiles, setImageFiles] = React.useState<File[]>([])
  const [deleteConfirmation, setDeleteConfirmation] = React.useState(false)

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

  const fileAtScreen = imageFiles?.map((file, index) => (
    <Image key={index} src={file.preview} alt="" />
  ))

  React.useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => { imageFiles.forEach((file) => { URL.revokeObjectURL(file.preview) }) }
  }, [])

  React.useEffect(() => {
    (acceptedFiles.length === 0 && fileRejections.length !== 0) &&
    dispatch(setFeedbackModal({
      initialState: true,
      type: 'warning',
      message: idiom.warning
    }))
  }, [acceptedFiles, fileRejections])

  const getNewImage = () => {
    setDeleteConfirmation(true)
    // setImageFiles([])
  }

  return (
    <>
    {imageFiles.length === 0
      ? <>
      <DragDrop {...getRootProps()}>
        <input {...getInputProps()} />
        <span style={{ textAlign: 'center' }}> <Paragraph>{idiom.DnD1}</Paragraph>{idiom.DnD2}</span>
        <FaCloudUploadAlt/>
      </DragDrop> </>
      : <>
      {deleteConfirmation && <DeleteConfirmation />}
      <ImageDiv>
        { fileAtScreen }
        <Button onClick={getNewImage}>
          <MdDeleteForever />
        </Button>
      </ImageDiv>
      </>
    }
    </>
  )
}
