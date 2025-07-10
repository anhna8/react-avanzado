import './App.css'
import NewPost from './pages/New Post/NewPost'

function App() {

  return (
    <>
    <div className="app">
      <main className='app-main'>
        <div className='container'>
          <NewPost />
        </div>
      </main>
    </div>

    <footer className='app-footer'>
      <div className='container'>
      <p>© 2025 Blog de Cesar Guerra. Todos los derechos reservados.</p>
      </div>
    </footer>
    </>
  )
}

export default App
