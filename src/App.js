import './App.css';
import HomeBanner from './components/banners/HomeBanner';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-inter">
      <Header />
      <main className="flex-1 px-16">
        <HomeBanner />
      </main>
      <Footer className="mt-auto" />
    </div>
  )
}
