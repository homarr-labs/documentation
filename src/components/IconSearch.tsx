import { useState } from 'react';

export const IconSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `https://dashboardicons.com/icons?q=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for icons on dashboardicons.com..."
        className="w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-blue-500"
      />
    </form>
  );
}; 