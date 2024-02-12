// electron-window.d.ts

// Extiende la interfaz Window global para incluir tu propiedad electron
declare global {
    interface Window {
        electron: {
        minimize: () => void;
        maximize: () => void;
        close: () => void;
        };
    }
    }

  // Esto asegura que el archivo se trate como un módulo.
export {};  