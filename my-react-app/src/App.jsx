import Button from './components/Button'
import Card from './components/Card'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>안녕하세요, React 시작합니다!</h1>
      <Button />
      <div className="card-list">
        <Card
          name="김탄탄"
          description="바이브코딩 마스터."
          favorite="김치와 영화 감상"
          rating={5}
        />
        <Card
          name="이초보"
          description="이번 주에 HTML을 처음 배웠어요."
          favorite="카페에서 책 읽기"
          rating={3}
        />
        <Card
          name="박열정"
          description="매일 한 시간씩 코딩 연습 중입니다."
          favorite="자연 속 산책"
          rating={4}
        />
      </div>
    </div>
  )
}

export default App
