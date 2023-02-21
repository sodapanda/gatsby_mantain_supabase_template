import React from 'react';
import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Layout } from '../components/Layout/Layout';
import Auth from '../components/auth.js';
import Account from '../components/account.js';
import { Session } from '@supabase/supabase-js';

export default function HomePage() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return (
    <Layout>
      <div className="container" style={{ padding: '50px 0 100px 0' }}>
        {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
      </div>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </Layout>
  );
}
