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
  MoreHorizontal,
  TrendingUp,
  Users,
  Activity,
  Globe
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-transparent selection:bg-indigo-500/30">
      {/* Sidebar */}
      <aside className="w-72 glass border-r border-white/5 p-8 flex flex-col gap-10 sticky top-0 h-screen">
        <div className="flex items-center gap-4 px-2">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20 animate-float">
            <Send className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-gradient">BrightBean</span>
        </div>

        <nav className="flex flex-col gap-3">
          {[
            { icon: LayoutDashboard, label: 'Dashboard', active: true },
            { icon: Calendar, label: 'Scheduler' },
            { icon: Send, label: 'Publisher' },
            { icon: MessageSquare, label: 'Unified Inbox' },
            { icon: BarChart3, label: 'Analytics' },
          ].map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group ${
                item.active 
                  ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shadow-inner' 
                  : 'text-white/40 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon className={`w-5 h-5 transition-transform duration-300 ${item.active ? 'scale-110' : 'group-hover:scale-110'}`} />
              <span className="font-semibold">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-10 border-t border-white/5">
          <button className="flex items-center gap-4 px-5 py-4 w-full text-white/40 hover:bg-white/5 hover:text-white rounded-2xl transition-all group">
            <Settings className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
            <span className="font-semibold">Settings</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 max-w-7xl mx-auto w-full">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-extrabold text-gradient mb-2 tracking-tight">Dashboard Overview</h1>
            <p className="text-white/50 text-lg">Good morning, Admin. Here's your social performance today.</p>
          </div>
          <button className="btn-primary flex items-center gap-3">
            <div className="bg-white/20 p-1 rounded-lg">
              <Plus className="w-5 h-5" />
            </div>
            Create New Post
          </button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Reach', value: '1.2M', change: '+12.5%', icon: Globe, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
            { label: 'Engagements', value: '45.2K', change: '+8.2%', icon: Users, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
            { label: 'Active Posts', value: '124', change: '-2.4%', icon: Activity, color: 'text-rose-400', bg: 'bg-rose-500/10' },
            { label: 'Growth Rate', value: '18.4%', change: '+4.1%', icon: TrendingUp, color: 'text-amber-400', bg: 'bg-amber-500/10' },
          ].map((stat, i) => (
            <div key={i} className="glass p-7 rounded-3xl group hover:translate-y-[-4px] transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl ${stat.bg}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-sm text-white/40 font-medium mb-1">{stat.label}</p>
              <h3 className="text-3xl font-bold tracking-tight">{stat.value}</h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Recent Posts */}
          <div className="lg:col-span-2 glass rounded-[2.5rem] p-10 overflow-hidden relative">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-1">Upcoming Content</h2>
                <p className="text-white/40 text-sm">Scheduled posts for the next 7 days</p>
              </div>
              <button className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-indigo-400 text-sm font-semibold transition-all">
                View Calendar
              </button>
            </div>
            
            <div className="space-y-4">
              {[
                { title: 'New Product Launch Teaser', platform: 'Instagram', time: 'Tomorrow, 10:00 AM', status: 'Ready' },
                { title: 'Weekly Tech Insights #42', platform: 'LinkedIn', time: 'Friday, 02:30 PM', status: 'Draft' },
                { title: 'Customer Success Story', platform: 'Facebook', time: 'May 1, 09:00 AM', status: 'Ready' },
                { title: 'Behind the Scenes Vlog', platform: 'Youtube', time: 'May 3, 06:00 PM', status: 'Scheduled' },
              ].map((post, i) => (
                <div key={i} className="flex items-center justify-between p-5 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all cursor-pointer group">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {post.platform === 'Instagram' && <Instagram className="w-7 h-7 text-pink-400" />}
                      {post.platform === 'LinkedIn' && <Linkedin className="w-7 h-7 text-blue-400" />}
                      {post.platform === 'Facebook' && <Facebook className="w-7 h-7 text-indigo-400" />}
                      {post.platform === 'Youtube' && <Youtube className="w-7 h-7 text-rose-500" />}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold group-hover:text-indigo-400 transition-colors mb-1">{post.title}</h4>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-white/30">{post.time}</span>
                        <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md ${
                          post.status === 'Ready' ? 'bg-emerald-500/20 text-emerald-400' : 
                          post.status === 'Draft' ? 'bg-amber-500/20 text-amber-400' : 'bg-indigo-500/20 text-indigo-400'
                        }`}>
                          {post.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                    <MoreHorizontal className="w-5 h-5 text-white/30" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Social Platforms */}
          <div className="glass rounded-[2.5rem] p-10 flex flex-col">
            <h2 className="text-2xl font-bold mb-2">Connected</h2>
            <p className="text-white/40 text-sm mb-8">Manage your linked accounts</p>
            
            <div className="grid grid-cols-1 gap-4 flex-1">
              {[
                { name: 'Facebook', icon: Facebook, color: 'text-indigo-400', active: true, followers: '12.4K' },
                { name: 'Instagram', icon: Instagram, color: 'text-pink-400', active: true, followers: '8.2K' },
                { name: 'YouTube', icon: Youtube, color: 'text-rose-500', active: true, followers: '45.1K' },
                { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-400', active: false, followers: '0' },
              ].map((p) => (
                <div key={p.name} className="p-5 rounded-3xl bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:bg-white/[0.05] transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform ${p.active ? '' : 'grayscale opacity-50'}`}>
                      <p.icon className={`w-6 h-6 ${p.color}`} />
                    </div>
                    <div>
                      <p className="font-bold">{p.name}</p>
                      <p className="text-[10px] text-white/30 font-medium">{p.followers} followers</p>
                    </div>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${p.active ? 'bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]' : 'bg-white/10'}`} />
                </div>
              ))}
            </div>
            
            <button className="w-full mt-8 py-4 rounded-2xl border-2 border-dashed border-white/5 text-white/30 text-sm font-bold hover:border-indigo-500/30 hover:bg-indigo-500/5 hover:text-indigo-400 transition-all">
              + Connect New Platform
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

