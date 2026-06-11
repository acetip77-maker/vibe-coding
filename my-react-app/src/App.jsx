import Button from './components/Button'
import Card from './components/Card'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>안녕하세요, React 시작합니다!</h1>
      <Button />
      <Card
        name="홍길동"
        intro="웹 개발을 배우고 있는 코딩 입문자입니다."
        favorite="김치와 영화 감상"
      />
    </div>
  )
}

export default App
