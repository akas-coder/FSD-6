import { useState, useEffect } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'

const ROLES = ['Admin', 'Editor', 'Viewer']
const STATUSES = ['Active', 'Inactive', 'Pending']
const EMPTY_FORM = { name: '', email: '', role: 'Viewer', status: 'Active' }

const UserForm = ({ onSubmit, initialData = null, onCancel }) => {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name,
        email: initialData.email,
        role: initialData.role,
        status: initialData.status,
      })
    } else {
      setForm(EMPTY_FORM)
    }
    setErrors({})
  }, [initialData])

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Invalid email address'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors)
      return
    }
    onSubmit(form)
    if (!initialData) setForm(EMPTY_FORM)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        label="Full Name"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="e.g. John Doe"
        error={errors.name}
      />
      <Input
        label="Email Address"
        id="email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="john@company.io"
        error={errors.email}
      />

      <div className="grid grid-cols-2 gap-4">
        {/* Role */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Role
          </label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500 focus:ring-offset-1 focus:ring-offset-slate-900 transition-all"
          >
            {ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {/* Status */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Status
          </label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500 focus:ring-offset-1 focus:ring-offset-slate-900 transition-all"
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <Button type="submit" variant="primary" className="flex-1">
          {initialData ? 'Update User' : 'Add User'}
        </Button>
        {onCancel && (
          <Button
            type="button"
            variant="secondary"
            onClick={onCancel}
            className="flex-1"
          >
            Cancel
          </Button>
        )}
      </div>
    </form>
  )
}

export default UserForm
