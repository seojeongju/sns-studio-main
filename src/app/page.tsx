"use client";

import React, { useState } from 'react';
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
  const [activeTab, setActiveTab] = useState('대시보드');

  const renderDashboard = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold text-gradient mb-2 tracking-tight">대시보드 개요</h1>
          <p className="text-white/50 text-lg">좋은 아침입니다, 관리자님. 오늘의 소셜 미디어 성과입니다.</p>
        </div>
        <button className="btn-primary flex items-center gap-3">
          <div className="bg-white/20 p-1 rounded-lg">
            <Plus className="w-5 h-5" />
          </div>
          새 포스트 작성
        </button>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: '총 도달수', value: '1.2M', change: '+12.5%', icon: Globe, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
          { label: '참여도', value: '45.2K', change: '+8.2%', icon: Users, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
          { label: '활성 포스트', value: '124', change: '-2.4%', icon: Activity, color: 'text-rose-400', bg: 'bg-rose-500/10' },
          { label: '성장률', value: '18.4%', change: '+4.1%', icon: TrendingUp, color: 'text-amber-400', bg: 'bg-amber-500/10' },
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
              <h2 className="text-2xl font-bold mb-1">예정된 콘텐츠</h2>
              <p className="text-white/40 text-sm">향후 7일간 예약된 포스트</p>
            </div>
            <button className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-indigo-400 text-sm font-semibold transition-all">
              캘린더 보기
            </button>
          </div>
          
          <div className="space-y-4">
            {[
              { title: '신제품 출시 티저', platform: 'Instagram', time: '내일, 오전 10:00', status: '준비됨' },
              { title: '주간 테크 인사이트 #42', platform: 'LinkedIn', time: '금요일, 오후 02:30', status: '초안' },
              { title: '고객 성공 사례', platform: 'Facebook', time: '5월 1일, 오전 09:00', status: '준비됨' },
              { title: '비하인드 씬 브이로그', platform: 'Youtube', time: '5월 3일, 오후 06:00', status: '예약됨' },
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
                        post.status === '준비됨' ? 'bg-emerald-500/20 text-emerald-400' : 
                        post.status === '초안' ? 'bg-amber-500/20 text-amber-400' : 'bg-indigo-500/20 text-indigo-400'
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
          <h2 className="text-2xl font-bold mb-2">연결된 계정</h2>
          <p className="text-white/40 text-sm mb-8">연결된 소셜 미디어 계정을 관리하세요</p>
          
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
                    <p className="text-[10px] text-white/30 font-medium">{p.followers} 팔로워</p>
                  </div>
                </div>
                <div className={`w-2 h-2 rounded-full ${p.active ? 'bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]' : 'bg-white/10'}`} />
              </div>
            ))}
          </div>
          
          <button className="w-full mt-8 py-4 rounded-2xl border-2 border-dashed border-white/5 text-white/30 text-sm font-bold hover:border-indigo-500/30 hover:bg-indigo-500/5 hover:text-indigo-400 transition-all">
            + 새로운 플랫폼 연결
          </button>
        </div>
      </div>
    </div>
  );

  const renderPlaceholder = (title: string, description: string, Icon: any) => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col h-full">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold text-gradient mb-2 tracking-tight">{title}</h1>
        <p className="text-white/50 text-lg">{description}</p>
      </header>
      <div className="glass rounded-[2.5rem] flex-1 min-h-[400px] flex flex-col items-center justify-center p-10 text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="w-24 h-24 mb-6 rounded-3xl bg-white/5 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
          <Icon className="w-12 h-12 text-white/20 group-hover:text-indigo-400 transition-colors duration-500" />
        </div>
        <h2 className="text-2xl font-bold mb-3">{title} 모듈</h2>
        <p className="text-white/40 max-w-md">이 페이지는 현재 개발 중입니다. 곧 멋진 기능들로 업데이트될 예정입니다. 조금만 기다려주세요!</p>
        <button 
          onClick={() => setActiveTab('대시보드')}
          className="mt-8 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold transition-colors"
        >
          대시보드로 돌아가기
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case '대시보드': return renderDashboard();
      case '예약 관리': return renderPlaceholder('예약 관리', '향후 포스팅 일정을 캘린더 형태로 관리하세요.', Calendar);
      case '발행하기': return renderPlaceholder('발행하기', '여러 소셜 플랫폼에 동시 포스팅을 작성하고 예약하세요.', Send);
      case '통합 수신함': return renderPlaceholder('통합 수신함', '모든 채널의 댓글과 메시지를 한 곳에서 관리하세요.', MessageSquare);
      case '통계 분석': return renderPlaceholder('통계 분석', '상세한 채널별 성장 지표와 성과를 분석하세요.', BarChart3);
      case '설정': return renderPlaceholder('설정', '계정, 플랫폼 연동, 알림 등 서비스 환경을 설정하세요.', Settings);
      default: return renderDashboard();
    }
  };

  const navItems = [
    { icon: LayoutDashboard, label: '대시보드' },
    { icon: Calendar, label: '예약 관리' },
    { icon: Send, label: '발행하기' },
    { icon: MessageSquare, label: '통합 수신함' },
    { icon: BarChart3, label: '통계 분석' },
  ];

  return (
    <div className="flex min-h-screen bg-transparent selection:bg-indigo-500/30">
      {/* Sidebar */}
      <aside className="w-72 glass border-r border-white/5 p-8 flex flex-col gap-10 sticky top-0 h-screen">
        <div className="flex items-center gap-4 px-2">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20 animate-float">
            <Send className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-gradient cursor-pointer" onClick={() => setActiveTab('대시보드')}>BrightBean</span>
        </div>

        <nav className="flex flex-col gap-3">
          {navItems.map((item) => {
            const isActive = activeTab === item.label;
            return (
              <button
                key={item.label}
                onClick={() => setActiveTab(item.label)}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group ${
                  isActive 
                    ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shadow-inner' 
                    : 'text-white/40 hover:bg-white/5 hover:text-white'
                }`}
              >
                <item.icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                <span className="font-semibold">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-auto pt-10 border-t border-white/5">
          <button 
            onClick={() => setActiveTab('설정')}
            className={`flex items-center gap-4 px-5 py-4 w-full rounded-2xl transition-all group ${
              activeTab === '설정'
                ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shadow-inner'
                : 'text-white/40 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Settings className={`w-5 h-5 transition-transform duration-500 ${activeTab === '설정' ? 'rotate-45' : 'group-hover:rotate-45'}`} />
            <span className="font-semibold">설정</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 max-w-7xl mx-auto w-full">
        {renderContent()}
      </main>
    </div>
  );
}


