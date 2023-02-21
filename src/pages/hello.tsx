import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { Link } from 'gatsby';

export default function Hello() {
  return (
    <Layout>
      <div>Good</div>
      <Link to="/">Back to Home</Link>
    </Layout>
  );
}
