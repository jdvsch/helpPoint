import { DragDrop, Paragraph, Image, thumbsContainer, thumb, thumbInner, img } from './styles'
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

export default function DropImage1 () {
  const [files, setFiles] = React.useState<File[]>([])

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
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      )
    }
  })

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ))

  React.useEffect(() => {
    console.log(acceptedFiles)
    console.log(fileRejections)
    console.log(files)
  })

  const thumbs = files.map((file) => (
    <div
      style={{
        display: 'inline-flex',
        borderRadius: 2,
        border: '1px solid #eaeaea',
        marginBottom: 8,
        marginRight: 8,
        width: 100,
        height: 100,
        padding: 4,
        boxSizing: 'border-box'
      }}
      key={file.name}
    >
      <div
        style={{
          display: 'flex',
          minWidth: 0,
          overflow: 'hidden'
        }}
      >
        <img
          src={file.preview}
          style={{
            display: 'block',
            width: 'auto',
            height: '100%'
          }}
          alt=""
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview)
          }}
        />
      </div>
    </div>
  ))

  React.useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => { files.forEach((file) => { URL.revokeObjectURL(file.preview) }) }
  }, [])

  return (
    <>
      <DragDrop {...getRootProps()}>
        <input {...getInputProps()} />
        <Paragraph>DnD or click here</Paragraph>
        <Paragraph>Only one image will be accepted</Paragraph>
      </DragDrop>
      <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
      <aside
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 16
        }}
      >
        {thumbs}
      </aside>
    </>
  )
}
