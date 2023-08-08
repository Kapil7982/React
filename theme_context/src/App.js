
import './App.css';
import Layout from './components/Layout';
import ThemeContextProvider from './components/ThemeContextProvider';

function App() {
  return (
    <div className="App">
       <ThemeContextProvider>
        <Layout>
        
        </Layout>
       </ThemeContextProvider>
    </div>
  );
}

export default App;
