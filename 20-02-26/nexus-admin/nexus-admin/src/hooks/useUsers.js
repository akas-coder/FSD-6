import { useState, useCallback } from 'react'

const DUMMY_USERS = [
  {
    id: 'USR-001',
    name: 'Arjun Mehta',
    email: 'arjun@nexus.io',
    role: 'Admin',
    status: 'Active',
    joined: '2024-01-15',
  },
  {
    id: 'USR-002',
    name: 'Sofia Reyes',
    email: 'sofia@nexus.io',
    role: 'Editor',
    status: 'Active',
    joined: '2024-02-20',
  },
  {
    id: 'USR-003',
    name: 'Kai Nakamura',
    email: 'kai@nexus.io',
    role: 'Viewer',
    status: 'Inactive',
    joined: '2024-03-10',
  },
  {
    id: 'USR-004',
    name: 'Priya Sharma',
    email: 'priya@nexus.io',
    role: 'Editor',
    status: 'Active',
    joined: '2024-04-05',
  },
  {
    id: 'USR-005',
    name: 'Marcus Webb',
    email: 'marcus@nexus.io',
    role: 'Viewer',
    status: 'Pending',
    joined: '2024-05-18',
  },
]

export function useUsers() {
  const [users, setUsers] = useState(DUMMY_USERS)

  const addUser = useCallback((userData) => {
    const newUser = {
      ...userData,
      id: `USR-${String(Date.now()).slice(-4)}`,
      joined: new Date().toISOString().split('T')[0],
    }
    setUsers((prev) => [newUser, ...prev])
    return newUser
  }, [])

  const updateUser = useCallback((id, updatedData) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, ...updatedData } : u))
    )
  }, [])

  const deleteUser = useCallback((id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id))
  }, [])

  const searchUserById = useCallback(
    (query) => {
      if (!query.trim()) return []
      return users.filter((u) =>
        u.id.toLowerCase().includes(query.toLowerCase())
      )
    },
    [users]
  )

  return { users, addUser, updateUser, deleteUser, searchUserById }
}
