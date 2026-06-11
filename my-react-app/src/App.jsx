import { useState } from 'react'
import Button from './components/Button'
import Card from './components/Card'
import './App.css'

const profiles = [
  {
    name: '김탄탄',
    description: '바이브코딩 마스터.',
    favorite: '김치와 영화 감상',
  },
  {
    name: '이초보',
    description: '이번 주에 HTML을 처음 배웠어요.',
    favorite: '카페에서 책 읽기',
  },
  {
    name: '박열정',
    description: '매일 한 시간씩 코딩 연습 중입니다.',
    favorite: '자연 속 산책',
  },
]

function randomRating() {
  return Math.floor(Math.random() * 5) + 1 // 1~5 사이 랜덤 숫자
}

function App() {
  const [ratings, setRatings] = useState([5, 3, 4])

  function shuffleRatings() {
    setRatings(profiles.map(() => randomRating()))
  }

  return (
    <div className="app">
      <h1>안녕하세요, React 시작합니다!</h1>
      <Button onClick={shuffleRatings} />
      <div className="card-list">
        {profiles.map((profile, i) => (
          <Card
            key={profile.name}
            name={profile.name}
            description={profile.description}
            favorite={profile.favorite}
            rating={ratings[i]}
          />
        ))}
      </div>
    </div>
  )
}

export default App
