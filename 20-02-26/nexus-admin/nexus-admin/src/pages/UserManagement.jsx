import { useState } from 'react'
import { Users, UserCheck, ShieldCheck, AlertCircle, UserPlus } from 'lucide-react'
import UserTable from '../components/user/UserTable'
import UserForm from '../components/user/UserForm'
import SearchUser from '../components/user/SearchUser'
import UserCard from '../components/user/UserCard'
import Modal from '../components/ui/Modal'
import Button from '../components/ui/Button'

const TABS = [
  { id: 'view', label: 'View All' },
  { id: 'add', label: 'Add User' },
  { id: 'search', label: 'Search' },
]

const Toast = ({ toast }) => {
  if (!toast) return null
  return (
    <div
      className={`fixed top-4 right-4 z-[100] px-4 py-3 rounded-xl shadow-2xl text-sm font-semibold transition-all duration-300 ${
        toast.type === 'danger' ? 'bg-rose-600 text-white' : 'bg-emerald-600 text-white'
      }`}
    >
      {toast.message}
    </div>
  )
}

const StatCard = ({ label, value, color, icon: Icon }) => (
  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center gap-3 hover:border-slate-700 transition-colors duration-200">
    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
      <Icon size={18} color="white" />
    </div>
    <div>
      <p className="text-xl font-bold text-white">{value}</p>
      <p className="text-xs text-slate-400">{label}</p>
    </div>
  </div>
)

const UserManagement = ({ users, addUser, updateUser, deleteUser, searchUserById }) => {
  const [activeTab, setActiveTab] = useState('view')
  const [editingUser, setEditingUser] = useState(null)
  const [searchResults, setSearchResults] = useState(null)
  const [toast, setToast] = useState(null)

  const showToast = (message, type = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }

  const handleAdd = (data) => {
    addUser(data)
    showToast('User added successfully!')
  }

  const handleUpdate = (data) => {
    updateUser(editingUser.id, data)
    setEditingUser(null)
    showToast('User updated successfully!')
  }

  const handleDelete = (id) => {
    deleteUser(id)
    showToast('User deleted.', 'danger')
  }

  const handleSearch = (query) => {
    if (!query) {
      setSearchResults(null)
      return
    }
    setSearchResults(searchUserById(query))
  }

  const stats = [
    { label: 'Total Users', value: users.length, color: 'from-violet-600 to-indigo-600', icon: Users },
    { label: 'Active', value: users.filter((u) => u.status === 'Active').length, color: 'from-emerald-600 to-teal-600', icon: UserCheck },
    { label: 'Admins', value: users.filter((u) => u.role === 'Admin').length, color: 'from-amber-500 to-orange-600', icon: ShieldCheck },
    { label: 'Pending', value: users.filter((u) => u.status === 'Pending').length, color: 'from-rose-600 to-pink-600', icon: AlertCircle },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-5">
      <Toast toast={toast} />

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      {/* Main Panel */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-slate-800 px-4 pt-4 gap-1">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-t-lg transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-slate-800 text-white border-b-2 border-violet-500'
                  : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/50'
              }`}
            >
              {tab.label}
              {tab.id === 'view' && (
                <span className="bg-violet-600/20 text-violet-400 text-xs px-1.5 py-0.5 rounded-full">
                  {users.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-5">
          {activeTab === 'view' && (
            <UserTable users={users} onEdit={setEditingUser} onDelete={handleDelete} />
          )}

          {activeTab === 'add' && (
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-violet-600/20 rounded-xl flex items-center justify-center">
                  <UserPlus size={17} className="text-violet-400" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">Create New User</p>
                  <p className="text-xs text-slate-500">Fill in the details below.</p>
                </div>
              </div>
              <UserForm onSubmit={handleAdd} />
            </div>
          )}

          {activeTab === 'search' && (
            <div className="space-y-5">
              <SearchUser onSearch={handleSearch} />
              {searchResults !== null && (
                <div>
                  <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider font-semibold">
                    {searchResults.length} result(s) found
                  </p>
                  {searchResults.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {searchResults.map((user) => (
                        <UserCard key={user.id} user={user} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-slate-500 text-sm">
                      No users match that ID.
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      <Modal
        isOpen={!!editingUser}
        onClose={() => setEditingUser(null)}
        title="Edit User"
      >
        {editingUser && (
          <UserForm
            initialData={editingUser}
            onSubmit={handleUpdate}
            onCancel={() => setEditingUser(null)}
          />
        )}
      </Modal>
    </div>
  )
}

export default UserManagement
