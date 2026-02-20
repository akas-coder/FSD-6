const statusColors = {
  Active: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  Inactive: 'bg-slate-600/30 text-slate-400 border-slate-600/30',
  Pending: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
}

const roleColors = {
  Admin: 'bg-violet-500/15 text-violet-400',
  Editor: 'bg-blue-500/15 text-blue-400',
  Viewer: 'bg-slate-700 text-slate-400',
}

const UserCard = ({ user }) => {
  const initials = user.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 hover:border-slate-600 transition-colors duration-200">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-white text-sm truncate">{user.name}</p>
          <p className="text-xs text-slate-400 truncate">{user.email}</p>
          <p className="text-xs text-slate-500 mt-0.5 font-mono">{user.id}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-3">
        <span
          className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${roleColors[user.role]}`}
        >
          {user.role}
        </span>
        <span
          className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${statusColors[user.status]}`}
        >
          {user.status}
        </span>
      </div>
      <p className="text-xs text-slate-600 mt-2">Joined: {user.joined}</p>
    </div>
  )
}

export default UserCard
