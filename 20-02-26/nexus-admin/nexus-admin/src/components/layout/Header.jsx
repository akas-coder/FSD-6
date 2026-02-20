import { User } from 'lucide-react'

const tabTitles = {
  add: 'Add New User',
  view: 'All Users',
  search: 'Search Users',
  dashboard: 'Overview',
}

const Header = ({ activeTab }) => {
  return (
    <header className="h-14 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 flex items-center justify-between px-6 flex-shrink-0">
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold leading-none">
          Nexus Admin
        </p>
        <h1 className="text-sm font-bold text-white mt-0.5 leading-tight">
          {tabTitles[activeTab] || 'Dashboard'}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <p className="text-xs font-semibold text-slate-200">Super Admin</p>
          <p className="text-xs text-slate-500">admin@nexus.io</p>
        </div>
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center">
          <User size={15} color="white" />
        </div>
      </div>
    </header>
  )
}

export default Header
