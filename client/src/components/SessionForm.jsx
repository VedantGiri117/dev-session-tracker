import { useState } from 'react';

export default function SessionForm({ onSessionAdded }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    durationMinutes: '',
    category: 'Coding',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.durationMinutes) return;

    onSessionAdded({
      ...formData,
      durationMinutes: Number(formData.durationMinutes),
    });

    setFormData({ title: '', description: '', durationMinutes: '', category: 'Coding' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800 p-6 rounded-xl space-y-4 border border-slate-700">
      <h2 className="text-xl font-bold text-white mb-2">Log New Session</h2>
      
      <div>
        <label className="block text-sm text-slate-400 mb-1">Title</label>
        <input
          type="text"
          required
          placeholder="e.g., Built JWT Auth Middleware"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-indigo-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-400 mb-1">Duration (mins)</label>
          <input
            type="number"
            required
            placeholder="45"
            value={formData.durationMinutes}
            onChange={(e) => setFormData({ ...formData, durationMinutes: e.target.value })}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-400 mb-1">Category</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-indigo-500"
          >
            <option value="Coding">Coding</option>
            <option value="Debugging">Debugging</option>
            <option value="Learning">Learning</option>
            <option value="Planning">Planning</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm text-slate-400 mb-1">Description (Optional)</label>
        <textarea
          rows="2"
          placeholder="What did you accomplish?"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-indigo-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 rounded-lg transition"
      >
        Save Session
      </button>
    </form>
  );
}