export default function AnalyticsDemo() {
  return (
    <div className="w-full bg-gray-50 rounded-lg shadow-2xl overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600 text-sm mt-1">Real-time data insights</p>
          </div>
          <div className="flex items-center space-x-4">
            <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
            <button className="bg-gold text-black px-4 py-2 rounded-lg font-semibold">
              Export
            </button>
          </div>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Users', value: '12,543', change: '+12%', colorClass: 'text-blue-600' },
          { label: 'Revenue', value: '$45,231', change: '+8%', colorClass: 'text-green-600' },
          { label: 'Orders', value: '3,421', change: '+15%', colorClass: 'text-purple-600' },
          { label: 'Conversion', value: '3.2%', change: '+2%', colorClass: 'text-orange-600' },
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
            <p className={`text-sm font-semibold ${stat.colorClass}`}>
              {stat.change} from last month
            </p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3>
          <div className="h-64 flex items-end justify-between space-x-2">
            {[65, 80, 45, 90, 70, 85, 95, 75, 88, 92, 78, 85].map((height, index) => (
              <div
                key={index}
                className="flex-1 bg-gradient-to-t from-gold to-gold/50 rounded-t"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
          <div className="h-64 flex items-center justify-center">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 rounded-full border-8 border-blue-500"></div>
              <div className="absolute inset-0 rounded-full border-8 border-green-500 border-t-0 border-r-0"></div>
              <div className="absolute inset-0 rounded-full border-8 border-purple-500 border-t-0 border-l-0"></div>
              <div className="absolute inset-0 rounded-full border-8 border-orange-500 border-b-0"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">42%</p>
                  <p className="text-sm text-gray-600">Organic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="p-6">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Top Pages</h3>
          </div>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Page</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Views</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Bounce Rate</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Avg. Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { page: '/home', views: '12,543', bounce: '32%', time: '2:34' },
                { page: '/products', views: '8,421', bounce: '28%', time: '3:12' },
                { page: '/about', views: '5,231', bounce: '45%', time: '1:45' },
                { page: '/contact', views: '3,124', bounce: '38%', time: '2:10' },
              ].map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{row.page}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{row.views}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{row.bounce}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

