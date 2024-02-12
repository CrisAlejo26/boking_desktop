
const TitleBar = () => {
    const handleMinimize = () => {
        window.electron.minimize();
      };
    
      const handleMaximize = () => {
        window.electron.maximize();
      };
    
      const handleClose = () => {
        window.electron.close();
      };

  return (
    <div className="title-bar">
      <button onClick={handleMinimize}>Minimizar</button>
      <button onClick={handleMaximize}>Maximizar</button>
      <button onClick={handleClose}>Cerrar</button>
    </div>
  );
};

export default TitleBar;
