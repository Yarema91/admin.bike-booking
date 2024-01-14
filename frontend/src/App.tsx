import { Form } from './components/Form/Form';
import { List } from './components/List/List';
import { Toaster } from "react-hot-toast"
import { Statistics } from './components/Statistics/Statistics';

function App() {
  return (
    <>
      <header className="container">admin.bike-booking.com</header>
      <div className="wrapper">
        <main className="main">
          <List />
        </main>
        <aside className="sidebar">
          <Form />
          <Statistics />
        </aside>
      </div>
      <footer className="container">
        <span>Developer:</span> Yarema Ostrovskiy
      </footer>

      <Toaster />
    </>
  )
}

export default App
