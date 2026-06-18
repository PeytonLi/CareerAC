import Link from "next/link";
import Image from "next/image";
import CareerAcLogo from "@/components/careerac-logo";

export default function HomePage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#FAFAFA] dark:bg-zinc-950 overflow-x-hidden">
      {/* Liquid Glass Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-overlay dark:bg-blue-900/30"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-400/20 blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-overlay dark:bg-indigo-900/30"></div>
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-cyan-400/20 blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-overlay dark:bg-cyan-900/20"></div>

      {/* Floating Glass Header */}
      <header className="fixed top-0 z-50 w-full px-3 py-3 sm:px-8 sm:py-5 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/50 bg-white/70 px-4 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-900/70 dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] sm:rounded-full sm:px-6 sm:py-3.5">
          <div className="flex items-center gap-4 lg:gap-8">
            <Link href="/" className="flex items-center">
              <CareerAcLogo width={168} height={34} className="h-6 sm:h-7" priority />
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#how-it-works" className="text-[13px] font-semibold text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">How it Works</Link>
              <Link href="#features" className="text-[13px] font-semibold text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">Features</Link>
              <Link href="#community" className="text-[13px] font-semibold text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">Community</Link>
            </nav>
          </div>
          <div className="flex shrink-0 items-center gap-1 sm:gap-4">
            <Link 
              href="/auth/signin" 
              className="rounded-full px-3 py-2 text-[14px] font-semibold text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white sm:px-4"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-[14px] font-bold text-white hover:bg-blue-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <main className="relative z-10 flex-1 px-4 pt-20 sm:px-8 sm:pt-24 lg:px-12">
        <div className="relative mx-auto max-w-5xl py-16 text-center sm:py-32 lg:py-40">
          
          <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-zinc-900 dark:text-white sm:mb-8 sm:text-6xl lg:text-7xl">
            Your Transfer Path, <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">
              Perfectly Clear
            </span>
          </h1>
          
          <p className="mx-auto mb-10 max-w-2xl text-base font-medium leading-relaxed text-zinc-600 dark:text-zinc-400 sm:mb-12 sm:text-xl">
            Chat with an intelligent AI to build a seamless semester-by-semester transfer plan. 
            When life gets in the way, get smart recovery suggestions and stay perfectly on track.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/auth/signup"
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-blue-600 px-6 py-4 text-[16px] font-bold text-white transition-all duration-300 ease-in-out sm:w-auto sm:px-10 sm:py-5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-100 group-hover:opacity-90 transition-opacity"></div>
              <span className="relative flex items-center gap-2">
                Start Your Journey
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="/playbooks"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/50 bg-white/50 px-6 py-4 text-[16px] font-bold text-zinc-700 backdrop-blur-md transition-all duration-300 hover:bg-white/80 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:bg-zinc-900/80 sm:w-auto sm:px-10 sm:py-5"
            >
              Browse Playbooks
            </Link>
          </div>

          {/* Computer Science Demo Section */}
          <div className="group relative mx-auto mt-14 max-w-5xl sm:mt-20">
            {/* Subtle App Frame */}
            <div className="relative rounded-[1.5rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row ring-1 ring-zinc-200/50 dark:ring-zinc-800/50">
              {/* Sidebar / Context */}
              <div className="flex w-full flex-col gap-4 border-b border-zinc-100 bg-zinc-50/50 p-4 dark:border-zinc-900 dark:bg-zinc-900/30 sm:gap-6 sm:p-6 md:w-72 md:border-b-0 md:border-r">
                <div>
                  <div className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Current School</div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 font-bold text-[10px]">OCC</div>
                    <div className="text-xs font-bold text-zinc-900 dark:text-white">Orange Coast College</div>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">Target Goal</div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold text-[10px]">CAL</div>
                    <div className="text-xs font-bold text-zinc-900 dark:text-white">UC Berkeley</div>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">Target Major</div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm">
                    <div className="text-xs font-bold text-zinc-900 dark:text-white">Computer Science (B.A.)</div>
                  </div>
                </div>
                
                <div className="mt-auto p-5 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-700 shadow-lg shadow-blue-500/20 hidden md:block">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse"></div>
                    <div className="text-[9px] font-bold text-white/70 uppercase tracking-wider">Transfer Readiness</div>
                  </div>
                  <div className="text-[24px] font-black text-white leading-none mb-3">84%</div>
                  <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-[84%] bg-white rounded-full transition-all duration-1000 group-hover:w-[84%]"></div>
                  </div>
                </div>
              </div>

              {/* Plan View */}
              <div className="flex flex-1 flex-col p-4 sm:p-6 md:p-8">
                <div className="mb-6 flex flex-col gap-3 border-b border-zinc-100 pb-4 text-left dark:border-zinc-900 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
                   <div>
                     <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Academic Roadmap</h3>
                     <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Personalized for Fall 2024 Start</p>
                   </div>
                   <div className="flex items-center gap-2">
                     <span className="px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider border border-emerald-100 dark:border-emerald-900">Verified Path</span>
                   </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
                  {/* Semester 1 */}
                  <div className="group/sem">
                    <div className="flex items-center justify-between mb-3 px-1">
                       <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Semester 01</span>
                       <span className="text-[10px] font-bold text-zinc-400">14.0 Units</span>
                    </div>
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 transition-colors group-hover/sem:border-emerald-500/30 group-hover/sem:bg-emerald-500/[0.02]">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400">CS A150</span>
                          <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">C++ Programming</span>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shadow-sm shadow-emerald-500/20">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 transition-colors group-hover/sem:border-emerald-500/30 group-hover/sem:bg-emerald-500/[0.02]">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400">MATH A180</span>
                          <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">Calculus 1</span>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shadow-sm shadow-emerald-500/20">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Semester 2 */}
                  <div className="group/sem">
                    <div className="flex items-center justify-between mb-3 px-1">
                       <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Semester 02</span>
                       <span className="text-[10px] font-bold text-zinc-400">16.0 Units</span>
                    </div>
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-zinc-950 border border-blue-200 dark:border-blue-900 shadow-sm ring-1 ring-blue-500/10 transition-all group-hover/sem:ring-blue-500/20">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400">CS A250</span>
                          <span className="text-xs font-bold text-zinc-900 dark:text-white">Data Structures</span>
                        </div>
                        <div className="w-5 h-5 rounded-full border-2 border-blue-500/30 flex items-center justify-center relative">
                          <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-ping"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-zinc-950 border border-blue-200 dark:border-blue-900 shadow-sm ring-1 ring-blue-500/10 transition-all group-hover/sem:ring-blue-500/20">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400">MATH A185</span>
                          <span className="text-xs font-bold text-zinc-900 dark:text-white">Calculus 2</span>
                        </div>
                        <div className="w-5 h-5 rounded-full border-2 border-blue-500/30 flex items-center justify-center relative">
                          <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-ping [animation-delay:0.3s]"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                       <div className="w-7 h-7 rounded-full border-2 border-white dark:border-zinc-900 bg-blue-500 flex items-center justify-center text-[9px] text-white font-black">A</div>
                       <div className="w-7 h-7 rounded-full border-2 border-white dark:border-zinc-900 bg-indigo-500 flex items-center justify-center text-[9px] text-white font-black">B</div>
                       <div className="w-7 h-7 rounded-full border-2 border-white dark:border-zinc-900 bg-purple-500 flex items-center justify-center text-[9px] text-white font-black">C</div>
                    </div>
                    <div className="text-[11px] font-bold text-zinc-600 dark:text-zinc-400">
                      Join <span className="text-zinc-900 dark:text-white">1,200+ students</span> planning today.
                    </div>
                  </div>
                  <button className="text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline">View Full Plan →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative z-10 bg-white/30 px-4 py-16 dark:bg-zinc-900/30 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
              Transfer planning, simplified
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
              Three simple steps to build your perfect transfer roadmap
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {/* Step 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/60 dark:border-zinc-800/60 shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                  Tell us your goals
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Share your current school, target university, and your dream major. Our AI understands your unique situation.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/60 dark:border-zinc-800/60 shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                  Get your roadmap
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Receive a personalized semester-by-semester plan that shows exactly which courses to take and when.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/60 dark:border-zinc-800/60 shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center text-xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                  Stay on track
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Get smart recovery suggestions if life happens. Never lose your transfer path again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
                Advanced Features
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
                Intelligence built into every step
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600/10 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">Articulation Engine</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">Deep database of transfer agreements between community colleges and top universities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600/10 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">Recovery Mode</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">Failed a class? Changed your major? One click to recalculate your entire path and stay on schedule.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-600/10 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">AI Planning Chat</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">Natural conversation to adjust your load, request specific semesters off, or explore different career paths.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[100px]"></div>
              <div className="relative bg-white dark:bg-zinc-900 rounded-[2.5rem] p-2 border border-white/50 dark:border-zinc-800/50 shadow-2xl">
                 <div className="bg-zinc-50 dark:bg-zinc-950 rounded-[2rem] overflow-hidden border border-zinc-100 dark:border-zinc-800">
                    <div className="p-8">
                       <div className="flex items-center justify-between mb-8">
                         <div className="h-6 w-32 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
                         <div className="h-8 w-8 rounded-full bg-blue-600"></div>
                       </div>
                       <div className="space-y-4">
                          <div className="h-32 w-full bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
                            <div className="h-4 w-1/3 bg-blue-100 dark:bg-blue-900/30 rounded mb-4"></div>
                            <div className="space-y-2">
                               <div className="h-3 w-full bg-zinc-100 dark:bg-zinc-800 rounded"></div>
                               <div className="h-3 w-4/5 bg-zinc-100 dark:bg-zinc-800 rounded"></div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                             <div className="h-20 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800"></div>
                             <div className="h-20 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800"></div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Playbooks Preview Section */}
      <section id="community" className="relative z-10 bg-white/30 px-4 py-16 dark:bg-zinc-900/30 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-4">
              Community Insight
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
              Learn from those who succeeded
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
              Real transfer stories and verified paths from community college to elite universities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { school: "UC Berkeley", major: "Computer Science", year: "2024", path: "OCC → Berkeley" },
               { school: "Stanford", major: "Economics", year: "2023", path: "De Anza → Stanford" },
               { school: "UCLA", major: "Psychology", year: "2024", path: "SMC → UCLA" }
             ].map((pb, i) => (
               <div key={i} className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl rounded-3xl p-6 border border-white/50 dark:border-zinc-800/50 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider">{pb.path}</span>
                    <span className="text-xs font-bold text-zinc-400">{pb.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">{pb.school}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">{pb.major}</p>
                  <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
                    <span className="text-xs font-semibold text-zinc-400">Verified Path</span>
                    <Link href="/playbooks" className="text-blue-600 text-xs font-bold hover:underline">Read Story →</Link>
                  </div>
               </div>
             ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/playbooks" className="text-zinc-900 dark:text-white font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              View all 200+ playbooks
            </Link>
          </div>
        </div>
      </section>

      {/* Time Saved Stats / CTA */}
      <section className="relative z-10 bg-white px-4 py-16 dark:bg-zinc-950 sm:px-8 sm:py-24 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-5 shadow-2xl ring-1 ring-zinc-700/30 dark:bg-zinc-900/50 sm:p-8 lg:rounded-[2.5rem] lg:p-16">
            {/* Professional Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
                Stop stressing. <br className="sm:hidden" /> Start transferring.
              </h3>
              <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-14 font-medium leading-relaxed">
                Students spend <span className="text-white font-bold">20+ hours</span> researching requirements. 
                CareerAC automates the entire roadmap in <span className="text-blue-400 font-bold">under 5 minutes</span>.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
                <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 transition-colors hover:bg-white/[0.08]">
                  <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter">20+</div>
                  <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Hours Saved</div>
                </div>
                <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 transition-colors hover:bg-white/[0.08]">
                  <div className="text-4xl lg:text-5xl font-black text-blue-500 mb-2 tracking-tighter">5m</div>
                  <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">To Full Plan</div>
                </div>
                <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 transition-colors hover:bg-white/[0.08]">
                  <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter">100%</div>
                  <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Accuracy</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/auth/signup" 
                  className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4.5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-all duration-300 shadow-xl shadow-blue-600/20 active:scale-95"
                >
                  Get Started for Free
                </Link>
                <Link 
                  href="#how-it-works" 
                  className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4.5 bg-transparent text-white border border-white/20 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  How it works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="relative z-10 px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
              The Team
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
              Meet the founders
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-20">
            <div className="flex flex-col items-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-500 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative z-10 h-32 w-32 overflow-hidden rounded-full border-4 border-white grayscale shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0 dark:border-zinc-800 sm:h-40 sm:w-40">
                  <Image
                    src="/founders/big.jpg"
                    alt="Big"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="mt-6 text-xl font-bold text-zinc-900 dark:text-white">Big</span>
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Co-founder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-200 bg-white/50 px-4 py-12 dark:border-zinc-800 dark:bg-zinc-950/50 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="max-w-xs">
              <Link href="/" className="flex items-center mb-4">
                <CareerAcLogo width={140} height={28} className="h-6" />
              </Link>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Building the premium transfer experience for students everywhere. AI-powered roadmaps to your dream university.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><Link href="#how-it-works" className="text-sm text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400">How it Works</Link></li>
                  <li><Link href="#features" className="text-sm text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400">Features</Link></li>
                  <li><Link href="/playbooks" className="text-sm text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400">Playbooks</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">Support</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-sm text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400">Help Center</Link></li>
                  <li><Link href="/" className="text-sm text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400">Privacy Policy</Link></li>
                  <li><Link href="/" className="text-sm text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400">Terms of Service</Link></li>
                </ul>
              </div>
              <div className="hidden sm:block">
                <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-sm text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400">About Us</Link></li>
                  <li><Link href="/" className="text-sm text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400">Careers</Link></li>
                  <li><Link href="/" className="text-sm text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400">Blog</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-zinc-400">&copy; 2026 CareerAC. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://twitter.com/careerac" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="https://linkedin.com/company/careerac" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.493-1.1-1.1s.493-1.1 1.1-1.1 1.1.493 1.1 1.1-.493 1.1-1.1 1.1zm9 6.891h-2v-3.032c0-.866-.543-.968-.833-.968s-.833.102-.833.968v3.032h-2v-6h2v.949c.313-.611 1.025-.949 1.833-.949s2.167.925 2.167 3.032v3.019z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

