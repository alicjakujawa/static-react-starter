import styles from './style.sass';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Static react starter</h1>
        <p className={styles.content}>Finally super basic boilerplate</p>
      </div>
    )
  }
}
