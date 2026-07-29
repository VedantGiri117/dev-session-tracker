export default function SessionList({ sessions, onDelete }) {
  if (sessions.length === 0) {
    return (
      <div className="text-center py-12 text-slate-500 border border-dashed border-slate-800 rounded-xl">
        No coding sessions logged yet. Start working!
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {sessions.map((session) => (
        <div
          key={session._id}
          className="bg-slate-800 p-4 rounded-xl border border-slate-700/60 flex items-center justify-between gap-4"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white text-lg">{session.title}</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/50">
                {session.category}
              </span>
            </div>
            {session.description && (
              <p className="text-sm text-slate-400">{session.description}</p>
            )}
            <p className="text-xs text-slate-500">
              ⏱️ {session.durationMinutes} minutes
            </p>
          </div>

          <button
            onClick={() => onDelete(session._id)}
            className="text-slate-500 hover:text-red-400 transition p-2"
            title="Delete Session"
          >
            🗑️
          </button>
        </div>
      ))}
    </div>
  );
}