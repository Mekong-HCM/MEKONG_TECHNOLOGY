import { useState, useEffect, type ReactNode, type FormEvent } from 'react';

const ACCESS_KEY = 'kinexus_auth';
const PASSCODE = 'kinexus2026';

export function LoginGate({ children }: { children: ReactNode }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [input, setInput] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (sessionStorage.getItem(ACCESS_KEY) === '1') {
            setAuthenticated(true);
        }
        setLoading(false);
    }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (input === PASSCODE) {
            sessionStorage.setItem(ACCESS_KEY, '1');
            setAuthenticated(true);
        } else {
            setError('Mật khẩu không đúng');
            setInput('');
        }
    };

    if (loading) return null;
    if (authenticated) return <>{children}</>;

    return (
        <div className="fixed inset-0 z-[9999] bg-dark-950 flex items-center justify-center">
            <div className="w-full max-w-md mx-4">
                <div className="rounded-2xl p-8 text-center"
                    style={{
                        background: 'rgba(15,20,50,0.95)',
                        border: '1px solid rgba(0,229,255,0.15)',
                        boxShadow: '0 0 60px rgba(0,229,255,0.08), 0 25px 50px rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(20px)',
                    }}
                >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(0,229,255,0.1)', border: '2px solid rgba(0,229,255,0.3)' }}
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                    </div>

                    <h1 className="text-2xl font-bold text-white mb-2">KINEXUS Technology Hub</h1>
                    <p className="text-sm text-gray-400 mb-8">Nhập mật khẩu để xem bài trình bày</p>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="password"
                            value={input}
                            onChange={e => { setInput(e.target.value); setError(''); }}
                            placeholder="Nhập mật khẩu..."
                            autoFocus
                            className="w-full px-4 py-3 rounded-xl text-white text-center text-lg tracking-widest outline-none transition-all duration-300 focus:ring-2 focus:ring-cyan-400/50"
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                            }}
                        />
                        {error && (
                            <p className="text-red-400 text-sm mt-3 animate-pulse">{error}</p>
                        )}
                        <button
                            type="submit"
                            className="w-full mt-6 py-3 rounded-xl font-bold text-dark-950 text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                            style={{
                                background: 'linear-gradient(135deg, #00E5FF, #00B8D4)',
                                boxShadow: '0 4px 20px rgba(0,229,255,0.3)',
                            }}
                        >
                            Truy cập
                        </button>
                    </form>

                    <p className="text-xs text-gray-600 mt-6">Tài liệu nội bộ — Cần mật khẩu để xem</p>
                </div>
            </div>
        </div>
    );
}
