const Input = ({ label, id, error, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={id}
          className="text-xs font-semibold text-slate-400 uppercase tracking-wider"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={`bg-slate-800 border ${
          error
            ? 'border-rose-500 focus:ring-rose-500'
            : 'border-slate-700 focus:border-violet-500 focus:ring-violet-500'
        } text-slate-200 placeholder-slate-500 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-slate-900 transition-all duration-200 ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-rose-400">{error}</p>}
    </div>
  )
}

export default Input
