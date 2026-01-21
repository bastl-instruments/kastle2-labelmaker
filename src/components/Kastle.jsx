import React from 'react';
import styles from './Kastle.module.scss';
import classNames from 'classnames';

import kastleBg from '../assets/kastle2-bg.svg';
import kastleHw from '../assets/kastle2-hw.svg';

import defaultLabels from '../labels';

const fontWidths = {
  'default': 0.75,
  'heading': 1.3,
  'emoji': 0.3,
  'name-emoji': 0.3,
};

const debug_labels = false;

export default function Kastle({ labels, setLabels, setFocusedLabelId, ref }) {
  return (
    <div ref={ref} className={styles.kastle}>
      <img
        className={styles.kastleBg}
        src={kastleBg}
        alt="Kastle 2 Bg"
        draggable="false"
      />
      <img
        className={styles.kastleHw}
        src={kastleHw}
        alt="Kastle 2 Hw"
        draggable="false"
      />
      {(debug_labels ? defaultLabels : labels).map(label => {
        const typeName = label.type || 'default';
        const fontName = label.font || 'default';
        const textAlign = label.align || 'center';
        const fontWidth = fontWidths[fontName];
        return (
          <div
            key={label.id}
            className={classNames(
              styles.label,
              styles[label.color],
              styles[`font-${fontName}`],
              styles[`align-${textAlign}`],
              styles[`type-${typeName}`],
              label.readonly ? styles.readonly : null)}
            style={{
              left: `${label.x}%`,
              top: `${label.y}%`
            }}
          >
            <input
              type="text"
              readOnly={label.readonly || false}
              value={label.value}
              name={`label-${label.id}`}
              style={{
                width: `${label.value.length * fontWidth + 1}em`
              }}
              onFocus={() => setFocusedLabelId(label.id)}
              onBlur={() => setFocusedLabelId(null)}
              onChange={(e) => {
                const newLabels = labels.map(l => {
                  if (l.id === label.id) {
                    return { ...l, value: e.target.value };
                  }
                  return l;
                });
                setLabels(newLabels);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}