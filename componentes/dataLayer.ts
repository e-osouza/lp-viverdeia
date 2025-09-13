// lib/dataLayer.ts
declare global {
    interface Window {
      dataLayer: Record<string, any>[];
    }
  }
  
  export function dlPush(event: Record<string, any>) {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(event);
      console.log("[GTM]", event); // útil para debug
    }
  }  