import { createContext, useEffect, useState } from "react";

export const MobileMenuContext = createContext();

const MobileMenuContextComponent = ({ children }) => {

  const [LeftMenuOpen, setLeftMenuOpen] = useState(false);
  const [RightMenuOpen, setRightMenuOpen] = useState(false);
  const [BodyScroll, setBodyScroll] = useState(false);

  useEffect(() => {
    document.body.style.overflow = BodyScroll ? "hidden" : "auto";
  }, [BodyScroll]);

  const handleLeftMenuOpen = () => {
    setLeftMenuOpen(!LeftMenuOpen);
    setBodyScroll(!LeftMenuOpen);
  };

  const handleRightMenuOpen = () => {
    setRightMenuOpen(!RightMenuOpen);
    setBodyScroll(!RightMenuOpen);
  };

  const data = {
    LeftMenuOpen,
    RightMenuOpen,
    handleLeftMenuOpen,
    handleRightMenuOpen,
  };

  return (
    <MobileMenuContext.Provider value={data}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export default MobileMenuContextComponent;