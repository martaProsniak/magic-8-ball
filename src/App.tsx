import "./App.css";
import Header from "./components/header/Header";
import Ball from "./components/ball/Ball";
import Footer from "./components/footer/Footer";
import InstallPrompt from './components/installPrompt/InstallPrompt'
import { useState, useEffect } from "react";

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>();
  const [clicks, setClicks] = useState<number>(
    () => Number(localStorage.getItem("clicks")) ?? 0
  );
  const [promptDismissed, setPromptDismissed] = useState<boolean>(
    () => !!localStorage.getItem("promptDismissed")
  );
  const [canShowInstallPrompt, setCanShowInstallPrompt] = useState(false);

  const increaseClicks = () => {
    setClicks(clicks + 1);
  };

  useEffect(() => {
       localStorage.setItem("clicks", clicks.toString());
       setCanShowInstallPrompt(deferredPrompt && !promptDismissed && clicks > 3)
  }, [clicks])

  const dismissPrompt = () => {
    localStorage.setItem("promptDismissed", "true");
    setPromptDismissed(false);
  };

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js")
      .catch(function (err) {
        console.log(err);
      });
  }

  window.addEventListener("beforeinstallprompt", function (event) {
    event.preventDefault();
    setDeferredPrompt(event);
    return false;
  });

  return (
    <div className="App">
      <InstallPrompt deferredPrompt={deferredPrompt} dismissPrompt={dismissPrompt} canShow={canShowInstallPrompt}/>
      <Header />
      <Ball increaseClicks={increaseClicks} />
      <Footer />
    </div>
  );
}

export default App;
