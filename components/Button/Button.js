function Button({ children, btnText = '', className = '', onClick }) {
  return (
    <button onClick={onClick} className={['cursor-pinter rounded-xl px-8 h-12 dark:bg-sky-500 dark:hover:bg-sky-400 text-neutral-50 bg-neutral-800 hover:bg-neutral-700', className].join(' ')}>{children || btnText}</button>
  )
}

export default Button