function Button() {
  function handleClick() {
    alert('버튼이 눌렸어요!')
  }

  return (
    <button className="my-button" onClick={handleClick}>
      클릭하세요!
    </button>
  )
}

export default Button
