import MobileAppFrame from './MobileAppFrame'

export default function TaskAppDemo() {
  return (
    <MobileAppFrame title="Task Manager">
      <div className="bg-gray-50 min-h-full">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 pb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">My Tasks</h1>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div className="flex space-x-4">
            <button className="bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold">Today</button>
            <button className="px-4 py-2 rounded-lg text-sm opacity-70">Upcoming</button>
            <button className="px-4 py-2 rounded-lg text-sm opacity-70">Completed</button>
          </div>
        </div>

        {/* Tasks List */}
        <div className="p-4 space-y-3">
          {[
            { title: 'Design new logo', time: '9:00 AM', completed: false },
            { title: 'Team meeting', time: '2:00 PM', completed: false },
            { title: 'Review project proposal', time: '4:30 PM', completed: true },
            { title: 'Update website content', time: '6:00 PM', completed: false },
          ].map((task, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-4 shadow-sm ${
                task.completed ? 'opacity-60' : ''
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${
                  task.completed
                    ? 'bg-green-500 border-green-500'
                    : 'border-gray-300'
                }`}>
                  {task.completed && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold text-gray-900 ${
                    task.completed ? 'line-through' : ''
                  }`}>
                    {task.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{task.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Task Button */}
        <div className="fixed bottom-6 right-6">
          <button className="w-14 h-14 bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-blue-700 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </MobileAppFrame>
  )
}

