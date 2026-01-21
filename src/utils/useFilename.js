export default function useFilename(labels) {
  const sanitizeForFilename = (text) => {
    return text
      // Convert to ASCII (remove accents/diacritics)
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      // Replace invalid filesystem characters with hyphens
      .replace(/[<>:"/\\|?*]/g, '-')
      // Remove any remaining non-printable characters by filtering char codes
      .split('').filter(char => char.charCodeAt(0) > 31).join('')
      // Replace multiple whitespace with single hyphen
      .replace(/\s+/g, '-')
      // Replace multiple hyphens with single hyphen
      .replace(/-+/g, '-')
      // Remove leading/trailing hyphens
      .replace(/^-+|-+$/g, '')
      // Convert to lowercase
      .toLowerCase()
      // Keep only alphanumeric, hyphens, and underscores
      .replace(/[^a-z0-9\-_]/g, '');
  };

  const generateFilename = (extension = 'json') => {
    const labelIds = ['name-first-line', 'name-second-line'];
    const labelValues = labelIds
      .map(id => labels.find(label => label.id === id)?.value?.trim())
      .filter(value => value)
      .map(value => sanitizeForFilename(value))
      .filter(value => value); // Filter out empty strings after sanitization
    
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timestamp = `${year}${month}${day}-${hours}${minutes}${seconds}`;
    
    const filenameParts = ['kastle2', ...labelValues, timestamp];
    return `${filenameParts.join('-')}.${extension}`;
  };

  return generateFilename;
}