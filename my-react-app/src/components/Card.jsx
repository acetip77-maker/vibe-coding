function Card({ name, description, favorite, rating }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <div className="rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className={star <= rating ? 'star filled' : 'star'}>
            ★
          </span>
        ))}
        <span className="rating-number">{rating}.0</span>
      </div>
      <p>{description}</p>
      <p className="favorite">❤️ 좋아하는 것: {favorite}</p>
    </div>
  )
}

export default Card
