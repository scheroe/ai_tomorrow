const WP_API_URL = 'https://ai-tomorrow.local/wp-json';

export const fetchPageContent = async (pageSlug: string) => {
  const response = await fetch(`${WP_API_URL}/wp/v2/pages?slug=${pageSlug}`);
  if (!response.ok) {
    throw new Error('Failed to fetch page content');
  }
  const pages = await response.json();
  return pages.length > 0 ? pages[0] : null;
};
