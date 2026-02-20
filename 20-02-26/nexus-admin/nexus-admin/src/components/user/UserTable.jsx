import { Pencil, Trash2, Users } from 'lucide-react'
import Button from '../ui/Button'

const statusColors = {
  Active: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
  Inactive: 'bg-slate-600/30 text-slate-400 border border-slate-600/30',
  Pending: 'bg-amber-500/15 text-amber-400 border border-amber-500/30',
}

const roleColors = {
  Admin: 'bg-violet-500/15 text-violet-400',
  Editor: 'bg-blue-500/15 text-blue-400',
  Viewer: 'bg-slate-700 text-slate-400',
}

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-20 text-center">
    <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-4">
      <Users size={28} className="text-slate-600" />
    </div>
    <p className="text-slate-400 font-medium">No users found</p>
    <p className="text-slate-600 text-sm mt-1">
      Try a different search term or add a new user.
    </p>
  </div>
)

const UserTable = ({ users, onEdit, onDelete }) => {
  if (!users.length) return <EmptyState />

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-700/50">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-800/80 border-b border-slate-700">
            <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              User
            </th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden md:table-cell">
              ID
            </th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">
              Role
            </th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Status
            </th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden lg:table-cell">
              Joined
            </th>
            <th className="text-right px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {users.map((user) => {
            const initials = user.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2)

            return (
              <tr
                key={user.id}
                className="hover:bg-slate-800/40 transition-colors duration-150 group"
              >
                {/* User */}
                <td className="px-4 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                      {initials}
                    </div>
                    <div>
                      <p className="font-medium text-white leading-tight">
                        {user.name}
                      </p>
                      <p className="text-xs text-slate-500">{user.email}</p>
                    </div>
                  </div>
                </td>

                {/* ID */}
                <td className="px-4 py-3.5 hidden md:table-cell">
                  <span className="font-mono text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded">
                    {user.id}
                  </span>
                </td>

                {/* Role */}
                <td className="px-4 py-3.5 hidden sm:table-cell">
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${roleColors[user.role]}`}
                  >
                    {user.role}
                  </span>
                </td>

                {/* Status */}
                <td className="px-4 py-3.5">
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColors[user.status]}`}
                  >
                    {user.status}
                  </span>
                </td>

                {/* Joined */}
                <td className="px-4 py-3.5 hidden lg:table-cell text-slate-500 text-xs">
                  {user.joined}
                </td>

                {/* Actions */}
                <td className="px-4 py-3.5 text-right">
                  <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onEdit(user)}
                    >
                      <Pencil size={13} />
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => onDelete(user.id)}
                    >
                      <Trash2 size={13} />
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
