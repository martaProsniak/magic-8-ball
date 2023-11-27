import { useRef } from "react";
import "./InstallPrompt.css";

interface InstallPromptProps {
  deferredPrompt: any;
  dismissPrompt: () => void;
  canShow: boolean;
}

const InstallPrompt = ({
  deferredPrompt,
  dismissPrompt, canShow
}: InstallPromptProps) => {
  const installPromptRef = useRef<HTMLDivElement>(null);

  if (canShow) {
    setTimeout(() => {
      installPromptRef.current?.classList.add("installPrompt--visible");
    }, 500)
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

   const handleDismiss = () => {
    hidePrompt();
    dismissPrompt();
  }

  return canShow ? (
    <div className="installPrompt" ref={installPromptRef}>
      <p>Install App!</p>
      <div>
        <button onClick={handleInstall}>Install</button>
        <button onClick={handleNotNow}>Not now</button>
        <button onClick={handleDismiss}>Dismiss</button>
      </div>
    </div>
  ) : null;
};

export default InstallPrompt;
