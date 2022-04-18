import Button from '@mui/material/Button'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import Stack from '@mui/material/Stack'

const onChange = (e) => {
  // let url = "https://<server-url>/api/upload";
  // let file = e.target.files[0];
  // uploadFile(url, file);
  console.log(e.target)
  console.log('teste')
}

export default function UploadButton() {
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
          onChange={onChange}
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
