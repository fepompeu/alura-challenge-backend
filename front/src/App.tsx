import { Container, Typography } from '@mui/material'
import UploadButton from './upload'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h2" component="h2">
          Transaction Import
        </Typography>
      </header>
      <Container maxWidth="sm">
        <UploadButton />
      </Container>
    </div>
  )
}

export default App
