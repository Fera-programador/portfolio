// src/components/AnalyticsWrapper.jsx
import { Analytics } from "@vercel/analytics/react";

const AnalyticsWrapper = () => {
  return <Analytics mode={import.meta.env.NODE_ENV === "production" ? "production" : "development"} />;
};

export default AnalyticsWrapper
