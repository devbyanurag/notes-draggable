import React, { useState, useRef } from 'react';
import styles from './Notes.module.css'

interface Position {
  x: number;
  y: number;
}

const Notes: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 200, y: 200 });
  const isDragging = useRef(false);
  const lastMousePosition = useRef<Position>({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    isDragging.current = true;
    const clientX = e.type === 'mousedown' ? (e as React.MouseEvent).clientX : (e as React.TouchEvent).touches[0].clientX;
    const clientY = e.type === 'mousedown' ? (e as React.MouseEvent).clientY : (e as React.TouchEvent).touches[0].clientY;
    lastMousePosition.current = {
      x: clientX,
      y: clientY,
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging.current) {
      const deltaX = e.clientX - lastMousePosition.current.x;
      const deltaY = e.clientY - lastMousePosition.current.y;

      setPosition((prevPosition) => ({
        x: prevPosition.x + deltaX,
        y: prevPosition.y + deltaY,
      }));

      lastMousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging.current) {
      const touch = e.touches[0];
      const deltaX = touch.clientX - lastMousePosition.current.x;
      const deltaY = touch.clientY - lastMousePosition.current.y;

      setPosition((prevPosition) => ({
        x: prevPosition.x + deltaX,
        y: prevPosition.y + deltaY,
      }));

      lastMousePosition.current = {
        x: touch.clientX,
        y: touch.clientY,
      };
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleMouseUp);
  };

  return (
    <div className={styles.container}>
      
        <div
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          className={styles.notesHeader}
          style={{
            position: 'absolute',
            left: `${position.x}px`,
            top: `${position.y}px`,
            cursor: 'pointer',
            width: '200px',
            height: '200px',
            background: 'lightblue',
          }}
        >
           <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CjxwYXRoIGQ9Ik0gMTAgMiBMIDkgMyBMIDQgMyBMIDQgNSBMIDUgNSBMIDUgMjAgQyA1IDIwLjUyMjIyMiA1LjE5MTMyODkgMjEuMDU0NjEgNS41NjgzNTk0IDIxLjQzMTY0MSBDIDUuOTQ1Mzg5OSAyMS44MDg2NzEgNi40Nzc3Nzc4IDIyIDcgMjIgTCAxNyAyMiBDIDE3LjUyMjIyMiAyMiAxOC4wNTQ2MSAyMS44MDg2NzEgMTguNDMxNjQxIDIxLjQzMTY0MSBDIDE4LjgwODY3MSAyMS4wNTQ2MSAxOSAyMC41MjIyMjIgMTkgMjAgTCAxOSA1IEwgMjAgNSBMIDIwIDMgTCAxNSAzIEwgMTQgMiBMIDEwIDIgeiBNIDcgNSBMIDE3IDUgTCAxNyAyMCBMIDcgMjAgTCA3IDUgeiBNIDkgNyBMIDkgMTggTCAxMSAxOCBMIDExIDcgTCA5IDcgeiBNIDEzIDcgTCAxMyAxOCBMIDE1IDE4IEwgMTUgNyBMIDEzIDcgeiI+PC9wYXRoPgo8L3N2Zz4=" />
        </div>
       
    </div>

  );
};

export default Notes;
