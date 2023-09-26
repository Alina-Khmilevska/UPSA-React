import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <h1>React App</h1>
      </main>
      <Footer className="mt-auto" />
    </div>
  )
}
