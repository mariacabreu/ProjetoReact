import './App.css'
import './components/Header'
import './components/AdicionarPaciente'
import './components/Footer'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <Header />
    <AdicionarPaciente />
    <Footer />
  )
}
