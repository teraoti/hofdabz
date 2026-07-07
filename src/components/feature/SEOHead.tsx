import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogImageAlt?: string;
  ogUrl?: string;
  ogSiteName?: string;
  ogLocale?: string;
  twitterCard?: string;
  schemaJson?: Record<string, unknown>;
}

export default function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage,
  ogImageWidth,
  ogImageHeight,
  ogImageAlt,
  ogUrl,
  ogSiteName = 'Hauz of Dabs',
  ogLocale = 'en_GB',
  twitterCard = 'summary_large_image',
  schemaJson,
}: SEOHeadProps) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = title;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', ogType, true);
    if (ogUrl) setMeta('og:url', ogUrl, true);
    else if (canonical) setMeta('og:url', canonical, true);
    setMeta('og:site_name', ogSiteName, true);
    setMeta('og:locale', ogLocale, true);
    if (ogImage) {
      setMeta('og:image', ogImage, true);
      if (ogImageWidth) setMeta('og:image:width', String(ogImageWidth), true);
      if (ogImageHeight) setMeta('og:image:height', String(ogImageHeight), true);
      if (ogImageAlt) setMeta('og:image:alt', ogImageAlt, true);
    }

    setMeta('twitter:card', twitterCard);
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    if (ogImage) setMeta('twitter:image', ogImage);

    const lastMod = new Date().toISOString().split('T')[0];
    setMeta('last-modified', lastMod);

    let schemaScript: HTMLScriptElement | null = null;
    if (schemaJson) {
      schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.textContent = JSON.stringify(schemaJson);
      document.head.appendChild(schemaScript);
    }

    return () => {
      document.title = originalTitle;
      if (schemaScript) {
        document.head.removeChild(schemaScript);
      }
    };
  }, [title, description, keywords, canonical, ogType, ogImage, ogImageWidth, ogImageHeight, ogImageAlt, ogUrl, ogSiteName, ogLocale, twitterCard, schemaJson]);

  return null;
}