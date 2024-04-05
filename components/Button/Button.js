function Button({ children, btnText = '', className = '' }) {
  return (
    <button className={['rounded-full px-4 h-8 dark:bg-sky-500 dark-hover:bg-sky-400 text-slate-50 bg-slate-500 hover:bg-slate-400', className].join(' ')}>{children || btnText}</button>
  )
}

export default Button