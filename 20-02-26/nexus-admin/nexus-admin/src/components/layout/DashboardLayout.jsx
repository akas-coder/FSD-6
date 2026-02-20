import Sidebar from './Sidebar'
import Header from './Header'

const DashboardLayout = ({ children, activePage, setActivePage, activeTab }) => {
  return (
    <div className="flex h-screen bg-slate-950 overflow-hidden">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header activeTab={activeTab} />
        <main className="flex-1 overflow-y-auto p-5 bg-slate-950">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
