'use client';

import { AptabaseProvider as AptabaseProviderBase } from '@aptabase/react';

interface AptabaseProviderProps {
  children: React.ReactNode;
}

export function AptabaseProvider({ children }: AptabaseProviderProps) {
  // Replace 'A-US-1836540591' with your actual App Key from Aptabase
  const appKey = 'A-US-1836540591';
  
  return (
    <AptabaseProviderBase appKey={appKey}>
      {children}
    </AptabaseProviderBase>
  );
} 