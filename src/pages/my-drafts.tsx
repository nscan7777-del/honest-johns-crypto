import React, { useEffect, useState } from 'react';

export default function MyDrafts() {
  const [draft, setDraft] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem('tokenDraft');
    if (stored) {
      setDraft(JSON.parse(stored));
    }
  }, []);

  if (!draft) {
    return (
      <div style={{ padding: '2rem', color: 'white' }}>
        <h2>No saved drafts found</h2>
        <p>Go to the token builder and save a draft to see it here.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      <h2>My Saved Draft</h2>
      <pre
        style={{
          background: '#222',
          color: '#0f0',
          padding: '1rem',
          borderRadius: '8px',
        }}
      >
        {JSON.stringify(draft, null, 2)}
      </pre>
    </div>
  );
}
