import Button from '@mui/material/Button'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import Stack from '@mui/material/Stack'
import { useState } from 'react'
import axios from 'axios'

export default function UploadButton() {
  const [file, setFile] = useState({}) as any

  const handleSubmit = (file) => {
    if (file) {
      const formData = new FormData()
      formData.append('file', file)

      axios({
        url: `http://localhost:8080/transactions/upload`,
        method: 'POST',
        data: formData,
      })
    }
  }

  const handleFileUpdate = (event) => {
    const input = event.target.files[0]
    setFile(input)
    handleSubmit(input)
  }
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      justifyContent="center"
    >
      <label htmlFor="contained-button-file">
        <input
          accept=".csv"
          id="contained-button-file"
          multiple
          type="file"
          onChange={handleFileUpdate}
          style={{ display: 'none' }}
        />
        <Button variant="contained" component="span">
          <FileUploadIcon />
          Upload
        </Button>
      </label>
    </Stack>
  )
}
