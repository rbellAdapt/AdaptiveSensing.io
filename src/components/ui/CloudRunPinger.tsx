"use client";

import { useEffect } from "react";

export default function CloudRunPinger() {
  useEffect(() => {
    // Ping the backend in the background to wake up the Cloud Run instance
    // This minimizes latency when the user eventually interacts with an API tool
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://adaptivesensing-api-107301792697.us-central1.run.app';
    
    // An options/get request to the root health endpoint
    fetch(`${apiUrl}/`, { method: "GET" }).catch(() => {});
  }, []);
  
  return null;
}
