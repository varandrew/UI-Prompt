import React, { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, Activity, Settings, Bell, Search, Home, PieChart, User, LogOut } from 'lucide-react';

export default function GlassmorphismDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { title: 'Total Revenue', value: '$54,230', change: '+12%', icon: DollarSign, color: 'text-emerald-400' },
    { title: 'Active Users', value: '2,430', change: '+5.2%', icon: Users, color: 'text-blue-400' },
    { title: 'New Sales', value: '345', change: '+18%', icon: TrendingUp, color: 'text-purple-400' },
    { title: 'Bounce Rate', value: '12.5%', change: '-2.1%', icon: Activity, color: 'text-pink-400' }
  ];

  const activities = [
    { user: 'Alice Cooper', action: 'Purchased Premium Plan', time: '2 mins ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice' },
    { user: 'Bob Wilson', action: 'Commented on Project X', time: '15 mins ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob' },
    { user: 'Charlie Kim', action: 'New registration', time: '1 hour ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie' },
    { user: 'Diana Prince', action: 'Uploaded 3 files', time: '2 hours ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Diana' }
  ];

  const menuItems = [
    { name: 'Overview', icon: Home },
    { name: 'Analytics', icon: BarChart3 },
    { name: 'Finance', icon: PieChart },
    { name: 'Settings', icon: Settings }
  ];

  return (
    <div className={`min-h-screen w-full bg-slate-900 text-white font-sans selection:bg-pink-500 selection:text-white overflow-hidden transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      {/* Animated Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/30 blur-[120px] animate-pulse"></div>
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-pink-600/30 blur-[100px] animate-bounce" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[35%] h-[35%] rounded-full bg-blue-600/30 blur-[120px] animate-pulse" style={{ animationDuration: '6s' }}></div>
      </div>

      <div className="relative z-10 flex h-screen p-4 gap-4 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-20 lg:w-64 hidden md:flex flex-col rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300">
          <div className="p-6 flex items-center justify-center lg:justify-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="hidden lg:block text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              GlassUI
            </span>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                  activeTab === item.name
                    ? 'bg-white/10 text-white shadow-lg border border-white/5'
                    : 'text-white/60 hover:bg-white/5 hover:text-white'
                }`}
              >
                <item.icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${activeTab === item.name ? 'text-pink-400' : ''}`} />
                <span className="hidden lg:block font-medium">{item.name}</span>
                {activeTab === item.name && (
                  <div className="hidden lg:block ml-auto w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_8px_rgba(244,114,182,0.8)]"></div>
                )}
              </button>
            ))}
          </nav>

          <div className="p-4 mt-auto">
            <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-white/60 hover:bg-red-500/10 hover:text-red-400 transition-all border border-transparent hover:border-red-500/20">
              <LogOut className="w-5 h-5" />
              <span className="hidden lg:block font-medium">Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col gap-6 overflow-hidden">
          {/* Header */}
          <header className="h-20 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-between px-6 shadow-lg">
            <div className="flex items-center gap-4 text-white/50">
              <div className="relative group">
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 transition-colors group-focus-within:text-pink-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-black/20 border border-white/5 rounded-full py-2 pl-10 pr-4 w-40 lg:w-64 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:bg-black/30 transition-all text-sm text-white placeholder-white/30"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-full hover:bg-white/10 transition-colors">
                <Bell className="w-5 h-5 text-white/80" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-pink-500 border border-black"></span>
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-semibold text-white">Thomas Anderson</p>
                  <p className="text-xs text-white/50">Admin</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 p-[2px]">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                    alt="User"
                    className="w-full h-full rounded-full bg-black/50"
                  />
                </div>
              </div>
            </div>
          </header>

          {/* Scrollable Dashboard Content */}
          <div className="flex-1 overflow-y-auto pr-2 pb-2 space-y-6 custom-scrollbar">

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                    <stat.icon className="w-24 h-24" />
                  </div>
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${stat.color}`}>
                        <stat.icon className="w-6 h-6" />
                      </div>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full bg-white/5 border border-white/5 ${stat.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                        {stat.change}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-white/60 text-sm font-medium mb-1">{stat.title}</h3>
                      <p className="text-3xl font-bold text-white tracking-tight">{stat.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Grid: Charts & Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-96">

              {/* Chart Section */}
              <div className="lg:col-span-2 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-6 flex flex-col shadow-lg">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-lg font-semibold text-white">Revenue Analytics</h3>
                  <select className="bg-black/20 border border-white/10 rounded-lg text-xs px-3 py-1.5 text-white/80 focus:outline-none">
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>This Year</option>
                  </select>
                </div>

                {/* Custom CSS Chart Visualization */}
                <div className="flex-1 flex items-end justify-between gap-2 sm:gap-4 px-2">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((height, i) => (
                    <div key={i} className="group relative flex-1 flex flex-col justify-end h-full">
                      <div className="w-full relative rounded-t-lg bg-gradient-to-t from-white/5 to-white/20 transition-all duration-300 hover:from-pink-500/20 hover:to-purple-500/40" style={{ height: `${height}%` }}>
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/30 group-hover:bg-pink-400 transition-colors"></div>

                        {/* Tooltip */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10 z-20">
                          ${height}k
                        </div>
                      </div>
                      <div className="h-1 w-full mt-2 rounded-full bg-white/5 group-hover:bg-pink-500/50 transition-colors"></div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-xs text-white/30 font-medium px-2">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                  <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="lg:col-span-1 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-6 flex flex-col shadow-lg">
                <h3 className="text-lg font-semibold text-white mb-6">Recent Activity</h3>
                <div className="flex-1 overflow-y-auto custom-scrollbar space-y-6">
                  {activities.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="relative">
                        <img src={item.avatar} alt={item.user} className="w-10 h-10 rounded-full bg-white/10 border border-white/10" />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-slate-900 flex items-center justify-center">
                          <div className={`w-2.5 h-2.5 rounded-full ${i % 2 === 0 ? 'bg-emerald-400' : 'bg-amber-400'}`}></div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white group-hover:text-pink-400 transition-colors truncate">
                          {item.user}
                        </p>
                        <p className="text-xs text-white/50 truncate">
                          {item.action}
                        </p>
                      </div>
                      <span className="text-xs text-white/30 whitespace-nowrap">{item.time}</span>
                    </div>
                  ))}

                  {/* View More Button */}
                  <button className="w-full mt-auto py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-xs font-medium text-white/70 transition-all">
                    View All Activity
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Section: Quick Actions & Profile Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="md:col-span-2 rounded-3xl bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-md border border-white/10 p-8 flex items-center justify-between relative overflow-hidden group">
                  <div className="relative z-10 max-w-lg">
                    <h2 className="text-2xl font-bold text-white mb-2">Upgrade to Pro</h2>
                    <p className="text-white/60 text-sm mb-6">Unlock advanced analytics, unlimited reports and premium support. Join 10,000+ satisfied users.</p>
                    <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all active:scale-95">
                      Upgrade Now
                    </button>
                  </div>
                  <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-pink-500/10 to-transparent pointer-events-none"></div>
                  <Activity className="absolute -right-12 -bottom-12 w-64 h-64 text-white/5 group-hover:rotate-12 transition-transform duration-700" />
               </div>

               <div className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-6 flex flex-col justify-center items-center text-center">
                  <div className="w-20 h-20 rounded-full border-4 border-white/10 mb-4 p-1">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" className="w-full h-full rounded-full" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Thomas Anderson</h3>
                  <p className="text-xs text-white/50 mb-6">Product Designer</p>
                  <div className="flex w-full gap-2">
                    <button className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium border border-white/5 transition-colors">Profile</button>
                    <button className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium border border-white/5 transition-colors">Edit</button>
                  </div>
               </div>
            </div>

          </div>
        </main>
      </div>

      {/* Global Styles for Scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
