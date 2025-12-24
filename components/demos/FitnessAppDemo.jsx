import MobileAppFrame from './MobileAppFrame'

export default function FitnessAppDemo() {
  return (
    <MobileAppFrame title="Fitness Tracker">
      <div className="bg-gray-900 text-white min-h-full">
        {/* Header */}
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 pb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm opacity-80">Good Morning</p>
              <h1 className="text-2xl font-bold">John Doe</h1>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xl">👤</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="px-4 -mt-6 mb-6">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-800 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-purple-400">2,450</p>
              <p className="text-xs text-gray-400 mt-1">Steps</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-pink-400">1.2</p>
              <p className="text-xs text-gray-400 mt-1">km</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-blue-400">320</p>
              <p className="text-xs text-gray-400 mt-1">Cal</p>
            </div>
          </div>
        </div>

        {/* Today's Workout */}
        <div className="px-4 mb-6">
          <h2 className="text-xl font-bold mb-4">Today's Workout</h2>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">Cardio Blast</h3>
                <p className="text-sm opacity-80">30 minutes</p>
              </div>
              <button className="bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold">
                Start
              </button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">Warm-up (5 min)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">Running (20 min)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">Cool-down (5 min)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="px-4">
          <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
          <div className="space-y-3">
            {[
              { name: 'Morning Run', time: '7:00 AM', duration: '25 min' },
              { name: 'Yoga Session', time: 'Yesterday', duration: '30 min' },
              { name: 'Gym Workout', time: '2 days ago', duration: '45 min' },
            ].map((activity, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{activity.name}</h3>
                    <p className="text-sm text-gray-400">{activity.time}</p>
                  </div>
                  <span className="text-purple-400 font-semibold">{activity.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MobileAppFrame>
  )
}

