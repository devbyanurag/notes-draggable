import React, { useState, useRef, useEffect } from 'react';
import styles from './Notes.module.css';
import { notesColors } from '../../utils/variables';
import { noteType } from '../../utils/types';
import useAutosizeTextArea from '../../utils/useAutosizeTextArea';

interface Position {
  x: number;
  y: number;
}

interface NotesInterface {
  noteData: noteType;
  onUpdateNote: (id: string, updatedText: string) => void;
  handleFocusNote: (id: string, ref: React.RefObject<HTMLTextAreaElement>) => void;
  handleDelete: (id: string) => void;

}

const Notes = ({ noteData, onUpdateNote, handleFocusNote,handleDelete }: NotesInterface) => {
  const [position, setPosition] = useState<Position>({ x: noteData.position.x, y: noteData.position.y });
  const isDragging = useRef(false);
  const lastMousePosition = useRef<Position>({ x: 0, y: 0 });

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useAutosizeTextArea(textAreaRef.current, noteData.bodyText);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onUpdateNote(noteData.id, e.target.value);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

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
    <div
      className={styles.container}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        background: notesColors[noteData.colorId].header,
        zIndex: noteData.zIndex,
      }}
    >
      <div
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        className={styles.notesHeader}
        onClick={() => handleFocusNote(noteData.id, textAreaRef)} // Pass the ref here

      >
        <img
        onClick={()=>{handleDelete(noteData.id)}}
        alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CjxwYXRoIGQ9Ik0gMTAgMiBMIDkgMyBMIDQgMyBMIDQgNSBMIDUgNSBMIDUgMjAgQyA1IDIwLjUyMjIyMiA1LjE5MTMyODkgMjEuMDU0NjEgNS41NjgzNTk0IDIxLjQzMTY0MSBDIDUuOTQ1Mzg5OSAyMS44MDg2NzEgNi40Nzc3Nzc4IDIyIDcgMjIgTCAxNyAyMiBDIDE3LjUyMjIyMiAyMiAxOC4wNTQ2MSAyMS44MDg2NzEgMTguNDMxNjQxIDIxLjQzMTY0MSBDIDE4LjgwODY3MSAyMS4wNTQ2MSAxOSAyMC41MjIyMjIgMTkgMjAgTCAxOSA1IEwgMjAgNSBMIDIwIDMgTCAxNSAzIEwgMTQgMiBMIDEwIDIgeiBNIDcgNSBMIDE3IDUgTCAxNyAyMCBMIDcgMjAgTCA3IDUgeiBNIDkgNyBMIDkgMTggTCAxMSAxOCBMIDExIDcgTCA5IDcgeiBNIDEzIDcgTCAxMyAxOCBMIDE1IDE4IEwgMTUgNyBMIDEzIDcgeiI+PC9wYXRoPgo8L3N2Zz4=" />
      </div>
      <div
        onClick={() => handleFocusNote(noteData.id, textAreaRef)} // Pass the ref here
        style={{ backgroundColor: notesColors[noteData.colorId].body }} className={styles.notesBody}>
        <textarea
          ref={textAreaRef}
          rows={1}
          value={noteData.bodyText}
          onChange={handleTextChange}
          className={styles.notesText}
        />
      </div>
    </div>
  );
};

export default Notes;
