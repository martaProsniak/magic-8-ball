import { useRef } from "react";
import "./InstallPrompt.css";

interface InstallPromptProps {
  deferredPrompt: any;
  dismissPrompt: () => void;
}

const InstallPrompt = ({
  deferredPrompt,
  dismissPrompt,
}: InstallPromptProps) => {
  const installPromptRef = useRef<HTMLDivElement>(null);
  console.log(deferredPrompt);

  if (deferredPrompt) {
    installPromptRef.current?.classList.add("installPrompt--visible");
  }

  const hidePrompt = () => {
    installPromptRef.current?.classList.remove("installPrompt--visible");
    installPromptRef.current?.classList.add("installPrompt--hidden");
  };

  const handleInstall = async () => {
    const userChoice = await deferredPrompt.prompt();
    console.log(userChoice);
    if (userChoice.outcome === "accepted") {
          hidePrompt();
    }
  };

  const handleNotNow = () => {
    hidePrompt();
  }

  return deferredPrompt ? (
    <div className="installPrompt" ref={installPromptRef}>
      <p>Install App!</p>
      <div>
        <button onClick={handleInstall}>Install</button>
        <button onClick={handleNotNow}>Not now</button>
        <button>Dismiss</button>
      </div>
    </div>
  ) : null;
};

export default InstallPrompt;
