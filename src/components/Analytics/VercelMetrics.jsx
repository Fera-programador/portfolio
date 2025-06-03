import { SpeedInsights } from '@vercel/speed-insights/react';

const VercelMetrics = () => {
  // Only render on client side
  if (typeof window === 'undefined') return null;

  // Check if running in production based on the hostname
  const isProduction = window.location.hostname !== 'localhost';

  // Disable in development
  if (!isProduction) return null;

  return (
    <>
      <SpeedInsights 
        sampleRate={0.3} // 30% of users
      />
    </>
  );
};

export default VercelMetrics
