import styles from './TabBar.module.css';
import { notesColors } from '../../utils/variables';
import { noteType } from '../../utils/types';

type TabbarType = {
    notesList: noteType[];
    handleFocusNote: (id: string) => void;
    selectedNoteId: string | null;
    handleDelete: (id: string) => void;
}
const TabBar = ({ notesList, handleFocusNote,selectedNoteId,handleDelete }: TabbarType) => {

    return (
        <div className={styles.scrollWrapper}>
            <div className={styles.container}>

                {
                    notesList.map((data: noteType) => {
                        return <div className={`${styles.tabWrapper} ${selectedNoteId===data.id && styles.activeTabWrapper}`}
                        key={data.id}
                            onClick={() => handleFocusNote(data.id)} // Pass the ref here

                            style={{ backgroundColor: notesColors[data.colorId].body }}>
                            <p>{data.bodyText !== '' ? data.bodyText.slice(0, 10) : 'new note'}</p>
                            <img
                            onClick={()=>{handleDelete(data.id)}}
                             alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CjxwYXRoIGQ9Ik0gMTAgMiBMIDkgMyBMIDQgMyBMIDQgNSBMIDUgNSBMIDUgMjAgQyA1IDIwLjUyMjIyMiA1LjE5MTMyODkgMjEuMDU0NjEgNS41NjgzNTk0IDIxLjQzMTY0MSBDIDUuOTQ1Mzg5OSAyMS44MDg2NzEgNi40Nzc3Nzc4IDIyIDcgMjIgTCAxNyAyMiBDIDE3LjUyMjIyMiAyMiAxOC4wNTQ2MSAyMS44MDg2NzEgMTguNDMxNjQxIDIxLjQzMTY0MSBDIDE4LjgwODY3MSAyMS4wNTQ2MSAxOSAyMC41MjIyMjIgMTkgMjAgTCAxOSA1IEwgMjAgNSBMIDIwIDMgTCAxNSAzIEwgMTQgMiBMIDEwIDIgeiBNIDcgNSBMIDE3IDUgTCAxNyAyMCBMIDcgMjAgTCA3IDUgeiBNIDkgNyBMIDkgMTggTCAxMSAxOCBMIDExIDcgTCA5IDcgeiBNIDEzIDcgTCAxMyAxOCBMIDE1IDE4IEwgMTUgNyBMIDEzIDcgeiI+PC9wYXRoPgo8L3N2Zz4=" />

                        </div>
                    })
                }


            </div>
        </div>
    );
};

export default TabBar;
