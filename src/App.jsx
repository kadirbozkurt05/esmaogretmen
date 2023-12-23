import Navbar from './components/generic/Navbar'
import TeacherBox from './components/main/TeacherBox'
import Footer from './components/generic/Footer'
import Subscribe from './components/main/Subscribe'


console.log(import.meta.env);

function App() {
  return (
    <>
    <Navbar />
    <TeacherBox />
    <Subscribe />
    <Footer />
    </>
  )
}

export default App
