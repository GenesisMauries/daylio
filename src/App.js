import { AuthContextProvider} from './context/AuthContext';
import { TheRoutes } from './routes/routes';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Container, CssBaseline } from '@mui/material'
import './App.css';

function App() {
  return (
    <Container>
    <AuthContextProvider>
      <CssBaseline/>
    <TheRoutes/>
    </AuthContextProvider>
    </Container>
  );
}

export default App;
