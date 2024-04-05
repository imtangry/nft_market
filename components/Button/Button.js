function Button({ children, btnText = '' }) {
  return (
    <button className="rounded-full px-4 h-8 bg-sky-500 hover:bg-sky-400">{children || btnText}</button>
  )
}

export default Button