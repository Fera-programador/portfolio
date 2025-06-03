import { Analytics, SpeedInsights } from '@vercel/analytics/react';

const VercelMetrics = () => {
  // Check if running in production based on the hostname
    const isProduction = typeof window !== 'undefined' && window.location.hostname !== 'localhost';
  
    // Disable in development
    if (!isProduction) return null;

  return (
    <>
      <Analytics 
        debug={false}
        beforeSend={(event) => {
          // Filter sensitive URLs
          const sensitivePaths = ['/admin', '/dashboard'];
          if (sensitivePaths.some(path => event.url.includes(path))) {
            return null;
          }
          return event;
        }}
      />
      <SpeedInsights 
        sampleRate={0.3} // 30% of users
      />
    </>
  );
};

export default VercelMetrics
