import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { fetchPageContent } from '../services/wordpressService';

interface SubpageOverlayProps {
  page: string;
  onClose: () => void;
}

const SubpageOverlay: React.FC<SubpageOverlayProps> = ({ page, onClose }) => {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const pageContent = await fetchPageContent(page);
        setContent(pageContent);
      } catch (err) {
        setError('An error occurred while fetching content.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (page) {
      fetchData();
    }
  }, [page]);

  return (
    <div className="fixed inset-0 bg-white bg-opacity-75 z-10 p-4">
      <button onClick={onClose}>Close</button>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {content && <div>{parse(content.content.rendered)}</div>}
      {!loading && !content && !error && <p>No content available for {page}</p>}
    </div>
  );
};

export default SubpageOverlay;
