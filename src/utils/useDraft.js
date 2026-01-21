
export default function useDraft(filename = 'download.json', {labels = [], description = ''}, onLoad = null) {

  const saveDraft = async () => {
    const simplifiedLabels = labels.map(label => ({
      id: label.id,
      value: label.value
    }));
    const doc = {
      labels: simplifiedLabels,
      description: description
    }
    const blob = new Blob([JSON.stringify(doc)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  const loadDraft = async () => {
    if (!onLoad) return;
    
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = async (event) => {
      const file = event.target.files[0];
      if (file) {
        try {
          const text = await file.text();
          const doc = JSON.parse(text);
          onLoad(doc);
        } catch (error) {
          console.error('Error loading draft:', error);
          alert('Error loading draft file. Please check the file format.');
        }
      }
    };
    input.click();
  };

  return [saveDraft, loadDraft];
}
