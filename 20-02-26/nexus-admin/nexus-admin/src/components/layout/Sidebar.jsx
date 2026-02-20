import { LayoutDashboard, Users, Star } from 'lucide-react'

const navItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    id: 'users',
    label: 'User Management',
    icon: Users,
  },
]

const Sidebar = ({ activePage, setActivePage }) => {
  return (
    <aside className="w-52 bg-slate-900 border-r border-slate-800 flex flex-col flex-shrink-0">
      {/* Logo */}
      <div className="h-14 flex items-center gap-2.5 px-4 border-b border-slate-800">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center">
          <Star size={13} color="white" fill="white" />
        </div>
        <div>
          <p className="font-bold text-white text-sm leading-none">Nexus</p>
          <p className="text-xs text-slate-500">Admin Panel</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1">
        <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest px-3 py-2">
          Navigation
        </p>
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = activePage === id
          return (
            <button
              key={id}
              onClick={() => setActivePage(id)}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-violet-600/20 text-violet-300 border border-violet-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-transparent'
              }`}
            >
              <Icon size={16} className={isActive ? 'text-violet-400' : ''} />
              {label}
            </button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-800 rounded-xl p-3">
          <p className="text-xs font-semibold text-slate-300">v2.4.0</p>
          <p className="text-xs text-slate-500 mt-0.5">Nexus Admin Suite</p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
