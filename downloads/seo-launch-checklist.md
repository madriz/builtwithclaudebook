# Pre-Launch SEO Checklist

Complete each item before launching a data-driven platform. These are not optimizations. They are infrastructure. Missing any one of them means search engines either can't find your content, can't understand it, or will actively penalize it.

---

## Crawlability

- [ ] **XML Sitemap generated and submitted**
  Tells search engines which pages exist and when they were last updated. Without it, discovery depends entirely on link crawling.

- [ ] **robots.txt configured**
  Controls what search engines can and cannot crawl. Misconfigured robots.txt can block your entire site from indexing.

- [ ] **No orphan pages**
  Every page is reachable through at least one internal link. Pages with no links are pages search engines may never find.

---

## Indexing

- [ ] **Canonical URLs set on every page**
  Tells search engines which version of a page is the "real" one. Without this, duplicate content (www vs. non-www, trailing slashes, query parameters) splits your ranking authority.

- [ ] **hreflang tags configured** _(if multilingual)_
  Tells search engines which language a page targets. Without this, the wrong language version may rank in the wrong country.

- [ ] **No accidental noindex tags**
  Check that staging or development meta tags haven't carried over to production. One `noindex` in the wrong place hides an entire page.

---

## Verification & Monitoring

- [ ] **Google Search Console verified**
  Your direct line to how Google sees your site. Shows indexing errors, search queries, and manual actions. Set this up before launch, not after.

- [ ] **404 monitoring in place**
  Track pages that return 404. Broken links lose both users and ranking authority. You need to know about them before your users tell you.

---

## Performance

- [ ] **Page speed under 3 seconds on mobile**
  Core Web Vitals are a ranking factor. Slow pages rank lower and convert worse. Test with real mobile conditions, not your fast office connection.

- [ ] **Images optimized**
  Use WebP or AVIF where supported. Set explicit width and height to prevent layout shift. Lazy-load images below the fold.

- [ ] **No render-blocking resources**
  JavaScript and CSS that block initial render delay the largest contentful paint. Defer or async what you can.

---

## Structured Data

- [ ] **Schema markup implemented**
  Structured data (JSON-LD) tells search engines what your content means, not just what it says. Use the appropriate schema type for your content: Product, Article, FAQ, LocalBusiness, etc.

- [ ] **Schema validated**
  Run your pages through Google's Rich Results Test. Invalid schema is worse than no schema.

---

## Content Fundamentals

- [ ] **Unique title tag on every page** _(under 60 characters)_
  The title tag is the single highest-impact on-page SEO element. Make each one specific and distinct.

- [ ] **Meta description on every page** _(under 155 characters)_
  Not a ranking factor, but controls what appears in search results. A good meta description improves click-through rate.

- [ ] **H1 tag on every page, used once**
  One H1 per page. It should describe what the page is about. This is structure, not styling.

- [ ] **Internal linking strategy defined**
  Important pages should be linked from many other pages. New content should link to existing content. This is how authority flows through your site.

---

## Pre-Launch Final Check

- [ ] All items above completed
- [ ] Site tested on mobile device (not just responsive mode)
- [ ] Google Search Console showing no errors
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] robots.txt accessible at `/robots.txt`
