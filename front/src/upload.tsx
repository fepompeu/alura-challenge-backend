import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import Stack from '@mui/material/Stack'

const Input = styled('input')({
  display: 'none',
})

export default function UploadButton() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      justifyContent="center"
    >
      <label htmlFor="contained-button-file">
        <Input accept=".csv" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          <FileUploadIcon />
          Upload
        </Button>
      </label>
    </Stack>
  )
}
