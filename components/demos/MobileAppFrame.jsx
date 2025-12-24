export default function MobileAppFrame({ children, title = "App" }) {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="relative">
        {/* Phone Frame */}
        <div className="w-[375px] h-[812px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
          
          {/* Screen */}
          <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
            {/* Status Bar */}
            <div className="bg-gray-50 px-6 py-2 flex justify-between items-center text-xs text-gray-900">
              <span>9:41</span>
              <div className="flex space-x-1">
                <div className="w-4 h-2 border border-gray-900 rounded-sm">
                  <div className="w-3 h-full bg-gray-900 rounded-sm"></div>
                </div>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
            </div>
            
            {/* App Content */}
            <div className="h-[calc(100%-3rem)] overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

