import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function AdminPortal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      // Step 1: Database Whitelist Check trialtrial
      const { data: adminRecord, error: dbError } = await supabase
        .from('admin_only')
        .select('email, password_check')
        .eq('email', email.toLowerCase().trim())
        .single();

      if (dbError || !adminRecord) throw new Error("Access Denied: Not an authorddized Admin.");
      if (adminRecord.password_check !== password) throw new Error("Invalid Password.");

      // Step 2: Supabase Auth
      const { error: authError } = await supabase.auth.signInWithPassword({
        email: email.toLowerCase().trim(),
        password: password,
      });

      if (authError) throw new Error(authError.message);

    } catch (err) {
      setErrorMsg(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#EEF9F1] flex items-center justify-center p-4">
      <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 w-full max-w-md border border-emerald-50">
        <div className="text-center mb-8">
          <span className="text-4xl">🌿</span>
          <h1 className="text-3xl font-black text-emerald-950 mt-2">GreenAtlas</h1>
        </div>

        <form onSubmit={handleSignIn} className="space-y-6">
          <input
            type="email"
            placeholder="Admin Email"
            className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-full outline-none focus:ring-2 focus:ring-emerald-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-full outline-none focus:ring-2 focus:ring-emerald-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400"
            >
              {showPassword ? "👁️" : "🙈"}
            </button>
          </div>
          {errorMsg && <p className="text-red-500 text-xs text-center font-bold">{errorMsg}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-800 text-white py-4 rounded-full font-black hover:bg-emerald-900 transition-all shadow-xl"
          >
            {loading ? 'Verifying...' : 'Unlock Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
}