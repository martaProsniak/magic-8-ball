import './App.css'
import Header from './components/header/Header'
import Ball from './components/ball/Ball'
import Footer from './components/footer/Footer'
import { useState, useEffect } from 'react';

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js')
      .then(function () {
        console.log('Service worker registered!');
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  useEffect(() => {
    console.log(deferredPrompt);
  }, [deferredPrompt])

  window.addEventListener('beforeinstallprompt', function (event) {
    console.log('beforeinstallprompt fired');
    event.preventDefault();
    setDeferredPrompt(event)
    return false;
  });

  return (
    <div className="App">
      <Header />
      <Ball />
      <Footer />
    </div>
  )
}

export default App
