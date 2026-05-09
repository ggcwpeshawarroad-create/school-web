'use client';

import { useState, useEffect } from 'react';
import { Save, Loader2, School, MapPin, Phone, Mail, Globe, Users, TrendingUp, Save as SaveIcon } from 'lucide-react';

export default function SettingsAdminPage() {
  const [settings, setSettings] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => { fetchSettings(); }, []);

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/settings');
      const data = await res.json();
      setSettings(data);
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');
    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      if (res.ok) { setMessage('Settings updated successfully!'); setTimeout(() => setMessage(''), 3000); }
    } catch (err) { console.error(err); } finally { setSaving(false); }
  };

  if (loading || !settings) return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh' }}><Loader2 className="animate-spin" size={40} color="#1a3a6e" /></div>;

  return (
    <div style={{ maxWidth: '900px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#1a3a6e', marginBottom: '8px' }}>School Configuration</h1>
        <p style={{ color: '#718096' }}>Update general school information, contact details, and site-wide metrics.</p>
      </div>

      {message && (
        <div style={{ background: '#ecfdf5', color: '#059669', padding: '16px', borderRadius: '16px', marginBottom: '24px', fontWeight: 600, border: '1px solid #d1fae5' }}>
          {message}
        </div>
      )}

      <form onSubmit={handleSave} style={{ display: 'grid', gap: '30px' }}>
        {/* Basic Info */}
        <div style={{ background: '#fff', borderRadius: '30px', padding: '40px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1a3a6e', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <School size={20} color="#e8a020" /> Identity & Branding
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div style={{ gridColumn: 'span 1' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>School Name</label>
              <input type="text" value={settings.schoolName} onChange={e => setSettings({...settings, schoolName: e.target.value})} style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e2e8f0' }} />
            </div>
            <div style={{ gridColumn: 'span 1' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>Established Year</label>
              <input type="text" value={settings.established} onChange={e => setSettings({...settings, established: e.target.value})} style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e2e8f0' }} />
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>Tagline / Motto</label>
              <input type="text" value={settings.tagline} onChange={e => setSettings({...settings, tagline: e.target.value})} style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e2e8f0' }} />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div style={{ background: '#fff', borderRadius: '30px', padding: '40px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1a3a6e', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <MapPin size={20} color="#e8a020" /> Contact & Connectivity
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
             <div style={{ gridColumn: 'span 2' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>Physical Address</label>
              <input type="text" value={settings.address} onChange={e => setSettings({...settings, address: e.target.value})} style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e2e8f0' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>Phone Number</label>
              <input type="text" value={settings.phone} onChange={e => setSettings({...settings, phone: e.target.value})} style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e2e8f0' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>Office Email</label>
              <input type="email" value={settings.email} onChange={e => setSettings({...settings, email: e.target.value})} style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e2e8f0' }} />
            </div>
          </div>
        </div>

        {/* Stats Metrics */}
        <div style={{ background: '#fff', borderRadius: '30px', padding: '40px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1a3a6e', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <TrendingUp size={20} color="#e8a020" /> Key Performance Indicators (Visible on Home)
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>Total Students</label>
              <input type="number" value={settings.totalStudents} onChange={e => setSettings({...settings, totalStudents: parseInt(e.target.value)})} style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e2e8f0' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>Total Teachers</label>
              <input type="number" value={settings.totalTeachers} onChange={e => setSettings({...settings, totalTeachers: parseInt(e.target.value)})} style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e2e8f0' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>Pass Rate (%)</label>
              <input type="number" value={settings.passRate} onChange={e => setSettings({...settings, passRate: parseInt(e.target.value)})} style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e2e8f0' }} />
            </div>
          </div>
        </div>

        <button disabled={saving} type="submit" style={{ background: '#1a3a6e', color: '#fff', padding: '18px', borderRadius: '16px', fontWeight: 700, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', width: '250px' }}>
          {saving ? <Loader2 className="animate-spin" size={22} /> : <SaveIcon size={22} />} Update School Profile
        </button>
      </form>
    </div>
  );
}
