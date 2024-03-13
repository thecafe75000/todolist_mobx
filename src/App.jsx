import Header from '@/Header'
import List from '@/List'
import Footer from '@/Footer'
import './App.css'

function App() {
  return (
    <div className='todo-container'>
      <div className='todo-wrap'>
        <Header/>
        <List />
        <Footer />
      </div>
    </div>
  )
}

export default App;
