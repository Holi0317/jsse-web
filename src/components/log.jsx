import firebase from 'firebase/app'
import * as React from 'react'
const database = firebase.database()

const ref = database.ref('log')

export class Log extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      logs: []
    }
  }

  componentWillMount() {
    ref.on('child_added', data => {
      this.setState(state => {
        const logs = state.logs.slice()
        logs.push(data.val())
        return {
          logs
        }
      })
    })
  }

  render() {
    const {logs} = this.state
    return (
      <ul>
        {logs.map(log => (
          <li key={log}>{log}</li>
        ))}
      </ul>

    )
  }
}