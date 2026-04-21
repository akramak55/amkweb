import { site } from "@/lib/site";

type JsonLdProps = { data: Record<string, unknown> };

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
    areaServed: ["FR", "CH", "MA", "IT", "BE", "LU"],
    sameAs: [site.socials.instagram, site.socials.linkedin],
    image: `${site.url}/opengraph-image`,
    priceRange: "€€€€",
  };
}

export function articleSchema(article: {
  title: string;
  excerpt: string;
  slug: string;
  dateISO: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: { "@type": "Organization", name: article.author },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/favicon.svg` },
    },
    datePublished: article.dateISO,
    mainEntityOfPage: `${site.url}/journal/${article.slug}`,
  };
}

export function eventSchema(event: {
  title: string;
  summary: string;
  slug: string;
  location: string;
  year: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.summary,
    startDate: `${event.year}-01-01`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.location,
      address: event.location,
    },
    organizer: { "@type": "Organization", name: site.name, url: site.url },
    url: `${site.url}/events/${event.slug}`,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
