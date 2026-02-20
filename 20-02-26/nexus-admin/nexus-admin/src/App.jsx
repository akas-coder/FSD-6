import { useState } from 'react'
import { LayoutDashboard } from 'lucide-react'
import DashboardLayout from './components/layout/DashboardLayout'
import UserManagement from './pages/UserManagement'
import Button from './components/ui/Button'
import { useUsers } from './hooks/useUsers'

const DashboardOverview = ({ onNavigate }) => (
  <div className="max-w-6xl mx-auto">
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-16 text-center">
      <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <LayoutDashboard size={26} className="text-slate-600" />
      </div>
      <p className="text-slate-300 font-semibold text-lg">Dashboard Overview</p>
      <p className="text-slate-500 text-sm mt-2">
        Navigate to User Management to manage your users.
      </p>
      <Button
        variant="primary"
        className="mt-6"
        onClick={() => onNavigate('users')}
      >
        Go to User Management
      </Button>
    </div>
  </div>
)

function App() {
  const { users, addUser, updateUser, deleteUser, searchUserById } = useUsers()
  const [activePage, setActivePage] = useState('users')
  const [activeTab, setActiveTab] = useState('view')

  return (
    <DashboardLayout
      activePage={activePage}
      setActivePage={setActivePage}
      activeTab={activePage === 'users' ? activeTab : 'dashboard'}
    >
      {activePage === 'users' ? (
        <UserManagement
          users={users}
          addUser={addUser}
          updateUser={updateUser}
          deleteUser={deleteUser}
          searchUserById={searchUserById}
        />
      ) : (
        <DashboardOverview onNavigate={setActivePage} />
      )}
    </DashboardLayout>
  )
}

export default App
