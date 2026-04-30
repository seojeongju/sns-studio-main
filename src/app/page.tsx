import React from 'react';

import { 
  LayoutDashboard, 
  Send, 
  Calendar, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  Plus,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  MoreHorizontal
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-transparent">
      {/* Sidebar */}
      <aside className="w-64 glass border-r border-white/5 p-6 flex flex-col gap-8">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Send className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">BrightBean</span>
        </div>

        <nav className="flex flex-col gap-2">
          {[
            { icon: LayoutDashboard, label: 'Dashboard', active: true },
            { icon: Calendar, label: 'Scheduler' },
            { icon: Send, label: 'Publisher' },
            { icon: MessageSquare, label: 'Unified Inbox' },
            { icon: BarChart3, label: 'Analytics' },
          ].map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                item.active 
                  ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20' 
                  : 'text-white/50 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-white/50 hover:bg-white/5 hover:text-white rounded-xl transition-all">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gradient mb-1">Welcome back, Admin</h1>
            <p className="text-white/50">Here&apos;s what&apos;s happening across your social channels.</p>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-semibold transition-all shadow-lg shadow-indigo-600/20 flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Create Post
          </button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Total Reach', value: '1.2M', change: '+12.5%', color: 'text-emerald-400' },
            { label: 'Engagements', value: '45.2K', change: '+8.2%', color: 'text-emerald-400' },
            { label: 'Active Posts', value: '124', change: '-2.4%', color: 'text-rose-400' },
            { label: 'Connected', value: '12', sub: 'Platforms' },
          ].map((stat, i) => (
            <div key={i} className="glass p-6 rounded-2xl border border-white/5">
              <p className="text-sm text-white/40 mb-1">{stat.label}</p>
              <div className="flex items-end gap-3">
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                {stat.change && (
                  <span className={`text-xs font-medium mb-1 ${stat.color}`}>
                    {stat.change}
                  </span>
                )}
                {stat.sub && <span className="text-xs text-white/30 mb-1">{stat.sub}</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Posts */}
          <div className="lg:col-span-2 glass rounded-3xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Upcoming Posts</h2>
              <button className="text-indigo-400 text-sm font-medium hover:underline">View Calendar</button>
            </div>
            <div className="space-y-4">
              {[
                { title: 'New Product Launch Teaser', platform: 'Instagram', time: 'Tomorrow, 10:00 AM' },
                { title: 'Weekly Tech Insights #42', platform: 'LinkedIn', time: 'Friday, 02:30 PM' },
                { title: 'Customer Success Story', platform: 'Facebook', time: 'May 1, 09:00 AM' },
              ].map((post, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      {post.platform === 'Instagram' && <Instagram className="w-6 h-6 text-pink-400" />}
                      {post.platform === 'LinkedIn' && <Linkedin className="w-6 h-6 text-blue-400" />}
                      {post.platform === 'Facebook' && <Facebook className="w-6 h-6 text-indigo-400" />}
                    </div>
                    <div>
                      <h4 className="font-semibold group-hover:text-indigo-400 transition-colors">{post.title}</h4>
                      <p className="text-xs text-white/40">{post.time}</p>
                    </div>
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-white/30" />
                </div>
              ))}
            </div>
          </div>

          {/* Social Platforms */}
          <div className="glass rounded-3xl p-8">
            <h2 className="text-xl font-bold mb-6">Platforms</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Facebook', icon: Facebook, color: 'text-indigo-400', active: true },
                { name: 'Instagram', icon: Instagram, color: 'text-pink-400', active: true },
                { name: 'YouTube', icon: Youtube, color: 'text-rose-500', active: true },
                { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-400', active: false },
              ].map((p) => (
                <div key={p.name} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center gap-2 group hover:bg-white/10 transition-all">
                  <p.icon className={`w-8 h-8 ${p.color}`} />
                  <span className="text-xs font-semibold">{p.name}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${p.active ? 'bg-emerald-500/10 text-emerald-400' : 'bg-white/10 text-white/30'}`}>
                    {p.active ? 'Active' : 'Offline'}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 rounded-xl border border-dashed border-white/10 text-white/40 text-sm hover:border-indigo-500/50 hover:text-indigo-400 transition-all">
              + Connect New Platform
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
