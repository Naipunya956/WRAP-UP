import type { ReactNode } from 'react';

export type BackgroundTexture =
  | 'gingham'
  | 'burgundy-grid'
  | 'dusty-pink'
  | 'cream-paper'
  | 'espresso-linen'
  | 'ledger';

interface GinghamBackgroundProps {
  variant?: BackgroundTexture;
  children: ReactNode;
  className?: string;
}

const VARIANT_CLASSES: Record<BackgroundTexture, string> = {
  gingham: 'bg-gingham text-[#3E2624]',
  'burgundy-grid': 'bg-burgundy-grid text-[#FFFDF9]',
  'dusty-pink': 'bg-dusty-paper text-[#3E2624]',
  'cream-paper': 'bg-cream-paper text-[#3E2624]',
  'espresso-linen': 'bg-espresso-linen text-[#FFFDF9]',
  ledger: 'bg-ledger-paper text-[#3E2624]',
};

export function GinghamBackground({
  variant = 'gingham',
  children,
  className = '',
}: GinghamBackgroundProps) {
  return (
    <div className={`relative ${VARIANT_CLASSES[variant]} ${className}`}>
      {children}
    </div>
  );
}
