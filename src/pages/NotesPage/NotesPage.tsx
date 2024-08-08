import React from 'react'
import Notes from '../../component/Notes/Notes'
import styles from './NotesPage.module.css'
import TabBar from '../../component/TabBar/TabBar'
import ControlNotes from '../../component/ControlNotes/ControlNotes'

const NotesPage = () => {
  return (
    <div className={styles.container}>
      <TabBar/>
      <ControlNotes/>
        <Notes/>
    </div>
  )
}

export default NotesPage