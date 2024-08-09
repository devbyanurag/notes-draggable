import styles from './ControlNotes.module.css'
import { notesColors } from '../../utils/variables'

interface controlNotesInterface{
    handleAddNote: () => void;
    updateNoteColor: (colorIndex: number) => void;
}
const ControlNotes = ({handleAddNote,updateNoteColor}:controlNotesInterface) => {
    return (
        <div className={styles.container}>
            <div className={styles.buttonCircle} 
            onClick={handleAddNote}
            style={{ backgroundColor: '#6B6B6B' }}>
            <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoMTAuNjY2NjcsMTAuNjY2NjcpIj48cGF0aCBkPSJNMTEsMnY5aC05djJoOXY5aDJ2LTloOXYtMmgtOXYtOXoiPjwvcGF0aD48L2c+PC9nPgo8L3N2Zz4="/>
            </div>
            <div className={styles.buttonCircle} 
            onClick={()=>updateNoteColor(0)}
            style={{ backgroundColor: notesColors[0].body }}>

            </div>
            <div className={styles.buttonCircle} 
            onClick={()=>updateNoteColor(1)}
            style={{ backgroundColor: notesColors[1].body }}>

            </div>
            <div className={styles.buttonCircle} 
            onClick={()=>updateNoteColor(2)}
            style={{ backgroundColor: notesColors[2].body }}>

            </div>
            <div className={styles.buttonCircle} 
            onClick={()=>updateNoteColor(3)}
            style={{ backgroundColor: notesColors[3].body }}>

            </div>

        </div>
    )
}

export default ControlNotes