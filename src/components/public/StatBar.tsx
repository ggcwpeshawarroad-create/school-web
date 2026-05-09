export default function StatBar() {
  const stats = [
    { label: 'Years of Excellence', value: '25+', color: '#1a3a6e' },
    { label: 'Happy Students', value: '1200+', color: '#e8a020' },
    { label: 'Quality Teachers', value: '65+', color: '#1a3a6e' },
    { label: 'Secondary Success', value: '98%', color: '#e8a020' },
  ];

  return (
    <div style={{ background: '#fff', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', padding: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', border: '1px solid #e2e8f0', marginTop: '-60px', position: 'relative', zIndex: 20 }}>
      {stats.map((stat, i) => (
        <div key={i} style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: stat.color, marginBottom: '4px', letterSpacing: '-0.02em' }}>{stat.value}</div>
          <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#718096', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
