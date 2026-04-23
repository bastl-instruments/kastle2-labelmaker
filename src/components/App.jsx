import { useState } from 'react';
import styles from './App.module.scss';
import Kastle from './Kastle';
import Citadel from './Citadel';
import Button from './Button';

import defaultLabels from '../labels';
import useDownloadAsPng from '../utils/useDownloadAsPng';
import useDraft from '../utils/useDraft';
import useFilename from '../utils/useFilename';
import CharacterMap from './CharacterMap';

const devices = [{
  id: 'kastle2',
  name: 'Kastle 2',
  component: Kastle
}, {
  id: 'citadel',
  name: 'Citadel',
  component: Citadel
}];


function App() {
  const [labels, setLabels] = useState(defaultLabels);
  // const labels = defaultLabels;
  // const setLabels = () => { };
  const [description, setDescription] = useState('Your custom firmware description here');
  const [focusedLabelId, setFocusedLabelId] = useState(null);
  const generateFilename = useFilename(labels);
  const [ref, download] = useDownloadAsPng(generateFilename('png'));
  const [deviceId, setDeviceId] = useState(devices[0].id);

  // Loading draft will only update values of existing labels
  const [saveDraft, loadDraft] = useDraft(generateFilename('json'), { labels, description }, (doc) => {
    const updatedLabels = defaultLabels.map(defaultLabel => {
      const newLabel = doc.labels.find(label => label.id === defaultLabel.id);
      return newLabel
        ? { ...defaultLabel, value: newLabel.value }
        : defaultLabel;
    });
    setLabels(updatedLabels);
    setDescription(doc.description || '');
  });

  const DeviceComponent = devices.find(device => device.id === deviceId).component;

  const setValue = (id, newValue) => {
    setLabels(labels.map(label => label.id === id ? { ...label, value: newValue } : label));
  };

  return (
    <div className={styles.app}>
      <div className={styles.leftPanel}>
        <DeviceComponent
          ref={ref}
          labels={labels.filter(label => typeof label[deviceId] !== 'undefined').map(label => ({ ...label, ...label[deviceId] }))}
          setValue={setValue}
          setFocusedLabelId={setFocusedLabelId}
        />
      </div>
      <div className={styles.rightPanel}>
        <h1>
          <select
            className={styles.deviceSelector}
            onChange={(e) => setDeviceId(e.target.options[e.target.selectedIndex].value)}
          >
            {devices.map(device => (
              <option
                key={device.id}
                value={device.id}

              >
                {device.name}
              </option>
            ))}

          </select>
          {" "}
          Label Maker</h1>
        <div className={styles.buttonContainer}>
          <Button onClick={download}>Download as&nbsp;PNG</Button>
          <Button onClick={saveDraft}>Save draft</Button>
          <Button onClick={loadDraft}>Load draft</Button>
        </div>
        <h2>Description</h2>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className={styles.description} />
        <div className={styles.characterMapSection}>
          <h2>Character Map</h2>
          <p>Select a label and click on&nbsp;a&nbsp;character to&nbsp;insert&nbsp;it.</p>
          <CharacterMap labels={labels} setLabels={setLabels} focusedLabelId={focusedLabelId} />
        </div>

      </div>
    </div>
  )
}

export default App
