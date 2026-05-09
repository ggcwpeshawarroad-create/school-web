'use client';

import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  iconName: string;
}

export default function FeatureCard({ title, description, iconName }: FeatureCardProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (Icons as any)[iconName] as LucideIcon || Icons.Star;

  return (
    <div 
      className="card-hover"
      style={{ 
        background: '#fff', 
        padding: '32px', 
        borderRadius: '20px', 
        border: '1px solid #e2e8f0', 
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div 
        style={{ 
          width: '60px', 
          height: '60px', 
          borderRadius: '16px', 
          background: 'rgba(26, 58, 110, 0.05)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          color: '#1a3a6e',
          marginBottom: '24px'
        }}
      >
        <Icon size={28} />
      </div>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: '#1a3a6e' }}>{title}</h3>
      <p style={{ color: '#718096', fontSize: '0.95rem', lineHeight: 1.6 }}>{description}</p>
      
      {/* Subtle background decoration */}
      <div 
        style={{ 
          position: 'absolute', 
          bottom: '-20px', 
          right: '-20px', 
          opacity: 0.03, 
          transform: 'rotate(-15deg)' 
        }}
      >
        <Icon size={120} />
      </div>
    </div>
  );
}
