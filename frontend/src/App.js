import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import ProblemsTable from './components/ProblemsTable';
import Nav from './components/Nav';

function App() {
  return (
    <ChakraProvider>
      <Nav/>
      <ProblemsTable/>
    </ChakraProvider>
  );
}

export default App;