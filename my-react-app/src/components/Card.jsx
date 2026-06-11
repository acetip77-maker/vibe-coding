function Card({ name, intro, favorite }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{intro}</p>
      <p className="favorite">❤️ 좋아하는 것: {favorite}</p>
    </div>
  )
}

export default Card
