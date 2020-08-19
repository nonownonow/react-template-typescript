import React from 'react'
import { Job, job } from '../templates/mobile/db/job'
import { ReactComponent as Logo } from '../assets/img/logo.svg'

function App() {
  const myJob = new Job(job[0])
  myJob.fetchZone().then(() => {
    console.log(myJob)
    const time = myJob.elapsed
    console.log(time / 1000 / 60)
  })
  return (
    <div>
      <header className="App-header">
        <Logo className="App-logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React good
        </a>
      </header>
      <style jsx>{`
        .App {
          text-align: center;
        }

        .App-logo {
          height: 40vmin;
          pointer-events: none;
        }

        @media (prefers-reduced-motion: no-preference) {
          .App-logo {
            animation: App-logo-spin infinite 20s linear;
          }
        }

        .App-header {
          background-color: #282c34;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .App-link {
          color: #61dafb;
        }

        @keyframes App-logo-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>{' '}
    </div>
  )
}

export default App
