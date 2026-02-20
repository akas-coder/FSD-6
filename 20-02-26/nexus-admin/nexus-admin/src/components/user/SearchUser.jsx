import { useState } from 'react'
import { Search, X } from 'lucide-react'
import Input from '../ui/Input'
import Button from '../ui/Button'

const SearchUser = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  const handleClear = () => {
    setQuery('')
    onSearch('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <div className="relative flex-1">
        <Search
          size={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
        />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by User ID (e.g. USR-001)"
          className="w-full bg-slate-800 border border-slate-700 focus:border-violet-500 text-slate-200 placeholder-slate-500 rounded-lg pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-violet-500/40 transition-all duration-200"
        />
      </div>
      <Button type="submit" variant="primary">
        <Search size={14} />
        Search
      </Button>
      {query && (
        <Button type="button" variant="secondary" onClick={handleClear}>
          <X size={14} />
          Clear
        </Button>
      )}
    </form>
  )
}

export default SearchUser
