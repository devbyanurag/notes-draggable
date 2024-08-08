import React from 'react';
import styles from './TabBar.module.css';
import { notesColors } from '../../utils/variables';

const TabBar = () => {

    return (
        <div className={styles.scrollWrapper}>
            <div className={styles.container}>
            <div className={styles.tabWrapper} style={{ backgroundColor: notesColors.pink.body }}>
                    <p>csa</p>
                    <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CjxwYXRoIGQ9Ik0gMTAgMiBMIDkgMyBMIDQgMyBMIDQgNSBMIDUgNSBMIDUgMjAgQyA1IDIwLjUyMjIyMiA1LjE5MTMyODkgMjEuMDU0NjEgNS41NjgzNTk0IDIxLjQzMTY0MSBDIDUuOTQ1Mzg5OSAyMS44MDg2NzEgNi40Nzc3Nzc4IDIyIDcgMjIgTCAxNyAyMiBDIDE3LjUyMjIyMiAyMiAxOC4wNTQ2MSAyMS44MDg2NzEgMTguNDMxNjQxIDIxLjQzMTY0MSBDIDE4LjgwODY3MSAyMS4wNTQ2MSAxOSAyMC41MjIyMjIgMTkgMjAgTCAxOSA1IEwgMjAgNSBMIDIwIDMgTCAxNSAzIEwgMTQgMiBMIDEwIDIgeiBNIDcgNSBMIDE3IDUgTCAxNyAyMCBMIDcgMjAgTCA3IDUgeiBNIDkgNyBMIDkgMTggTCAxMSAxOCBMIDExIDcgTCA5IDcgeiBNIDEzIDcgTCAxMyAxOCBMIDE1IDE4IEwgMTUgNyBMIDEzIDcgeiI+PC9wYXRoPgo8L3N2Zz4=" />

                </div>
                
            </div>
        </div>
    );
};

export default TabBar;
