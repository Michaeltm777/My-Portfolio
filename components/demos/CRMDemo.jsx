export default function CRMDemo() {
  return (
    <div className="w-full bg-gray-50 rounded-lg shadow-2xl overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">CRM Dashboard</h1>
            <p className="text-gray-600 text-sm mt-1">Manage your customer relationships</p>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="search"
              placeholder="Search contacts..."
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-64"
            />
            <button className="bg-gold text-black px-4 py-2 rounded-lg font-semibold">
              + New Contact
            </button>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 bg-white border-b border-gray-200">
        {[
          { label: 'Total Contacts', value: '1,234', icon: '👥' },
          { label: 'Deals', value: '89', icon: '💼' },
          { label: 'Revenue', value: '$125K', icon: '💰' },
          { label: 'Tasks', value: '24', icon: '✅' },
        ].map((stat, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="text-4xl">{stat.icon}</div>
            <div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contacts List */}
        <div className="md:col-span-2 bg-white rounded-lg shadow-sm">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Contacts</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {[
              { name: 'John Smith', company: 'Tech Corp', email: 'john@techcorp.com', status: 'Hot Lead' },
              { name: 'Sarah Johnson', company: 'Design Co', email: 'sarah@designco.com', status: 'Qualified' },
              { name: 'Mike Wilson', company: 'Startup Inc', email: 'mike@startup.com', status: 'New' },
              { name: 'Emily Davis', company: 'Global Ltd', email: 'emily@global.com', status: 'Hot Lead' },
            ].map((contact, index) => (
              <div key={index} className="p-4 hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {contact.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                      <p className="text-sm text-gray-600">{contact.company}</p>
                      <p className="text-xs text-gray-500">{contact.email}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    contact.status === 'Hot Lead' ? 'bg-red-100 text-red-700' :
                    contact.status === 'Qualified' ? 'bg-green-100 text-green-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {contact.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sales Pipeline */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Sales Pipeline</h2>
          </div>
          <div className="p-4 space-y-4">
            {[
              { stage: 'Prospecting', count: 12, color: 'blue' },
              { stage: 'Qualification', count: 8, color: 'yellow' },
              { stage: 'Proposal', count: 5, color: 'orange' },
              { stage: 'Negotiation', count: 3, color: 'purple' },
              { stage: 'Closed Won', count: 15, color: 'green' },
            ].map((stage, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700">{stage.stage}</span>
                  <span className="text-sm text-gray-600">{stage.count}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`bg-${stage.color}-500 h-2 rounded-full`}
                    style={{ width: `${(stage.count / 20) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

