function Card({ text, onFlip }) {
  return (
    <div className="card" onClick={onFlip}>
      <h2>{text}</h2>
    </div>
  )
}

export default Card