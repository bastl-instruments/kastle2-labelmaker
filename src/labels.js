const labels = [
    {
        id: 'connector-sync',
        type: 'text',
        color: 'white',
        value: 'SYNC',
        setting: 'default',
        kastle2: { x: 29, y: 4.6 },
    },
    {
        id: 'connector-usb',
        type: 'text',
        color: 'white',
        value: 'USB',
        setting: 'default',
        kastle2: { x: 50, y: 4.6 },
    },
    {
        id: 'connector-audio',
        type: 'text',
        color: 'white',
        value: 'AUDIO',
        setting: 'default',
        kastle2: { x: 71, y: 4.6 },
    },
    {
        id: 'name-first-line',
        type: 'text',
        font: 'heading',
        color: 'white',
        value: 'MAGIC',
        align: 'left',
        setting: 'default',
        kastle2: { x: 51.8, y: 14.7 },
    },

    {
        id: 'name-second-line',
        type: 'text',
        font: 'heading',
        color: 'white',
        value: 'BALL',
        align: 'left',
        setting: 'default',
        kastle2: { x: 51.8, y: 18.9 },
    },
    {
        id: 'name-title',
        type: 'text',
        font: 'title',
        color: 'white',
        value: 'MAGIC BALL',
        setting: 'default',
        citadel: { x: 50, y: 3.8 }
    },
    {
        id: 'name-subtitle',
        type: 'text',
        color: 'white',
        value: 'Hybrid Future Prediction Machine',
        setting: 'default',
        citadel: { x: 50, y: 6.3 }
    },
    {
        id: 'name-emoji',
        font: 'name-emoji',
        value: '🔮',
        setting: 'default',
        kastle2: { x: 71, y: 14 },
        citadel: { x: 68.5, y: 47.7 }
    },
    {
        id: 'name-emoji-left',
        font: 'name-emoji',
        value: '🔮',
        setting: 'default',
        citadel: { x: 31.5, y: 47.7 }
    },
    {
        id: 'patch-sync',
        type: 'text',
        color: 'white',
        value: 'SYNC',
        setting: 'default',
        kastle2: { x: 32.2, y: 25.6 }
    },

    {
        id: 'patch-sync-in',
        type: 'text',
        color: 'white',
        value: 'IN',
        setting: 'default',
        align: 'right',
        kastle2: { x: 31.5, y: 29.7 }
    },


    {
        id: 'patch-sync-out',
        type: 'text',
        color: 'white',
        value: 'OUT',
        setting: 'default',
        align: 'left',
        kastle2: { x: 32.9, y: 29.7 }
    },
    {
        id: 'patch-sync-in-l',
        type: 'text',
        color: 'white',
        value: 'L',
        setting: 'default',
        readonly: true,
        align: 'right',
        kastle2: { x: 28.5, y: 33.6 }
    },
    {
        id: 'patch-sync-in-r',
        type: 'text',
        color: 'white',
        value: 'R',
        setting: 'default',
        readonly: true,
        align: 'right',
        kastle2: { x: 28.5, y: 37.8 }
    },
    {
        id: 'patch-sync-out-l',
        type: 'text',
        color: 'white-inverse',
        value: 'L',
        setting: 'default',
        readonly: true,
        align: 'left',
        kastle2: { x: 35.9, y: 33.6 }
    },
    {
        id: 'patch-sync-out-r',
        type: 'text',
        color: 'white-inverse',
        value: 'R',
        setting: 'default',
        readonly: true,
        align: 'left',
        kastle2: { x: 35.9, y: 37.8 }
    },




    {
        id: 'patch-audio',
        type: 'text',
        color: 'white',
        value: 'AUDIO',
        setting: 'default',
        kastle2: { x: 67.8, y: 25.6 }
    },

    {
        id: 'patch-audio-in',
        type: 'text',
        color: 'white',
        value: 'IN',
        setting: 'default',
        align: 'right',
        kastle2: { x: 67, y: 29.7 }
    },


    {
        id: 'patch-audio-out',
        type: 'text',
        color: 'white',
        value: 'OUT',
        setting: 'default',
        align: 'left',
        kastle2: { x: 68.4, y: 29.7 }
    },
    {
        id: 'patch-audio-in-l',
        type: 'text',
        color: 'white',
        value: 'L',
        setting: 'default',
        readonly: true,
        align: 'right',
        kastle2: { x: 63.8, y: 33.6 }
    },
    {
        id: 'patch-audio-in-r',
        type: 'text',
        color: 'white',
        value: 'R',
        setting: 'default',
        readonly: true,
        align: 'right',
        kastle2: { x: 63.8, y: 37.8 }
    },
    {
        id: 'patch-audio-out-l',
        type: 'text',
        color: 'white-inverse',
        value: 'L',
        setting: 'default',
        readonly: true,
        align: 'left',
        kastle2: { x: 71.4, y: 33.6 }
    },
    {
        id: 'patch-audio-out-r',
        type: 'text',
        color: 'white-inverse',
        value: 'R',
        setting: 'default',
        readonly: true,
        align: 'left',
        kastle2: { x: 71.4, y: 37.8 }
    },


    {
        id: 'pot-1-normal',
        type: 'text',
        color: 'white',
        value: 'Pitch Mod',
        setting: 'default',
        kastle2: { x: 10.6, y: 22 },
        citadel: { x: 13.2, y: 52.95, font: 'heading' }
    },
    {
        id: 'pot-1-shift',
        type: 'text',
        color: 'silver-inverse',
        value: 'Input',
        setting: 'default',
        kastle2: { x: 10.6, y: 26.2 },
        citadel: { x: 13.05, y: 55 }
    },
    {
        id: 'pot-1-mode',
        font: 'emoji',
        value: '♫',
        setting: 'default',
        kastle2: { x: 4.3, y: 14.5 },
        citadel: { x: 3.8, y: 47.5 }
    },
    {
        id: 'pot-2-normal',
        type: 'text',
        color: 'white',
        value: 'Timbre Mod',
        setting: 'default',
        kastle2: { x: 10.6, y: 56.4 },
        citadel: { x: 13.05, y: 71.8, font: 'heading' }
    },
    {
        id: 'pot-2-shift',
        type: 'text',
        color: 'silver-inverse',
        value: 'FX',
        setting: 'default',
        kastle2: { x: 10.6, y: 60.6 },
        citadel: { x: 13.05, y: 74 }
    },
    {
        id: 'pot-2-mode',
        font: 'emoji',
        value: '♫',
        setting: 'default',
        kastle2: { x: 4.3, y: 49 },
        citadel: { x: 3.8, y: 66.6 }
    },
    {
        id: 'pot-3-normal',
        type: 'text',
        color: 'white',
        value: 'Lfo Mod',
        setting: 'default',
        kastle2: { x: 10.6, y: 90.8 },
        citadel: { x: 13.05, y: 90.3, font: 'heading' }
    },
    {
        id: 'pot-3-shift',
        type: 'text',
        color: 'silver-inverse',
        value: 'Rhythm',
        setting: 'default',
        kastle2: { x: 10.6, y: 95 },
        citadel: { x: 13.05, y: 92.5 }
    },
    {
        id: 'pot-3-mode',
        font: 'emoji',
        value: '♫',
        setting: 'default',
        kastle2: { x: 4.3, y: 83.7 },
        citadel: { x: 3.8, y: 85 }
    },

    {
        id: 'button-shift',
        type: 'text',
        color: 'silver-inverse',
        value: 'Shift',
        setting: 'default',
        kastle2: { x: 24.5, y: 91 },
        citadel: { x: 34, y: 92.5 }
    },
    {
        id: 'patch-pitch-1',
        type: 'text',
        color: 'white',
        value: '▶ PLAY',
        setting: 'default',
        kastle2: { x: 35.9, y: 50.8, align: 'left' },
        citadel: { x: 44.1, y: 37.3 },

    },
    {
        id: 'patch-pitch-2',
        type: 'text',
        color: 'white',
        value: 'Note',
        setting: 'default',
        kastle2: { x: 35.9, y: 55, align: 'left' },
        citadel: { x: 56.2, y: 37.3 }
    },
    {
        id: 'patch-timbre',
        type: 'text',
        color: 'white',
        value: 'Timbre',
        setting: 'default',
        citadel: { x: 68.5, y: 37.3 }
    },
    {
        id: 'patch-env-mod',
        type: 'text',
        color: 'white',
        value: 'ENV Mod',
        setting: 'default',
        citadel: { x: 81, y: 37.3 }
    },
    {
        id: 'patch-pattern',
        type: 'text',
        color: 'white',
        value: 'Pattern',
        setting: 'default',
        kastle2: { x: 43.8, y: 77.2 },
        citadel: { x: 50, y: 68.6 }
    }, {
        id: 'patch-g',
        type: 'text',
        color: 'white',
        value: 'G',
        setting: 'default',
        readonly: true,
        kastle2: { x: 40.8, y: 80.8 }
    },
    {
        id: 'patch-r',
        type: 'text',
        color: 'white',
        value: 'R',
        setting: 'default',
        readonly: true,
        kastle2: { x: 43.8, y: 80.8 }
    },
    {
        id: 'patch-c',
        type: 'text',
        color: 'white',
        value: 'C',
        setting: 'default',
        readonly: true,
        kastle2: { x: 46.8, y: 80.8 }
    },
    {
        id: 'patch-l-out',
        type: 'text',
        color: 'white-inverse',
        value: 'L OUT',
        setting: 'default',
        citadel: { x: 81, y: 27.3 }
    }, {
        id: 'patch-r-out',
        type: 'text',
        color: 'white-inverse',
        value: 'R OUT',
        setting: 'default',
        citadel: { x: 93.4, y: 27.3 }
    }, {
        id: 'patch-l-in',
        type: 'text',
        color: 'white',
        value: 'L IN',
        setting: 'default',
        citadel: { x: 81, y: 17.13 }
    }, {
        id: 'patch-r-in',
        type: 'text',
        color: 'white',
        value: 'R IN',
        setting: 'default',
        citadel: { x: 93.4, y: 17.13 }
    },

    {
        id: 'switch-cv',
        type: 'text',
        color: 'white',
        value: 'CV',
        setting: 'default',
        citadel: { x: 39, y: 78.3, font: 'heading' }
    },
    {
        id: 'switch-gate',
        type: 'text',
        color: 'white',
        value: 'GATE',
        setting: 'default',
        citadel: { x: 61, y: 78.3, font: 'heading' }
    },
    {
        id: 'switch-cv-rnd',
        type: 'text',
        color: 'white',
        value: 'RND',
        setting: 'default',
        citadel: { x: 39, y: 70.5 }
    }, {
        id: 'switch-cv-inv',
        type: 'text',
        color: 'white',
        value: 'INV',
        setting: 'default',
        citadel: { x: 39, y: 76.3 }
    },
    {
        id: 'switch-gate-rnd',
        type: 'text',
        color: 'white',
        value: 'RND',
        setting: 'default',
        citadel: { x: 61, y: 70.5 }
    }, {
        id: 'switch-gate-inv',
        type: 'text',
        color: 'white',
        value: 'INV',
        setting: 'default',
        citadel: { x: 61, y: 76.3 }
    },
    {
        id: 'patch-gate',
        type: 'text',
        color: 'inverse',
        value: 'GATE',
        setting: 'default',
        kastle2: { x: 43.8, y: 94.1 },
        citadel: { x: 44, y: 27.3 }
    },

    {
        id: 'patch-pulse',
        type: 'text',
        color: 'inverse',
        value: 'PULSE',
        setting: 'default',
        citadel: { x: 56.2, y: 27.3 }
    }, {
        id: 'patch-tri',
        type: 'text',
        color: 'inverse',
        value: 'TRI',
        setting: 'default',
        citadel: { x: 68.5, y: 27.3 }
    },

    {
        id: 'patch-env',
        type: 'text',
        color: 'inverse',
        value: 'ENV',
        setting: 'default',
        kastle2: { x: 56, y: 80.5 },
        citadel: { x: 19.1, y: 27.3 }
    },
    {
        id: 'patch-cv',
        type: 'text',
        color: 'inverse',
        value: 'CV',
        setting: 'default',
        kastle2: { x: 56, y: 94.1 },
        citadel: { x: 31.4, y: 27.3 }
    },
    {
        id: 'switch-power',
        type: 'text',
        color: 'white',
        value: 'Power',
        setting: 'default',
        kastle2: { x: 50, y: 25.6 }
    },
    {
        id: 'pot-4-normal',
        type: 'text',
        color: 'white',
        value: 'ENV',
        setting: 'default',
        kastle2: { x: 50, y: 49 },
        citadel: { x: 50, y: 64.1, font: 'heading' }
    },
    {
        id: 'pot-4-shift',
        type: 'text',
        color: 'silver-inverse',
        value: 'MOD',
        setting: 'default',
        kastle2: { x: 50, y: 53.3 },
        citadel: { x: 50, y: 66.4 }
    },
    {
        id: 'patch-midi-in',
        type: 'text',
        color: 'white',
        value: 'MIDI IN',
        setting: 'default',
        readonly: true,
        citadel: { x: 7, y: 37.3 }
    }, {
        id: 'patch-trig',
        type: 'text',
        color: 'white',
        value: 'TRIG',
        setting: 'default',
        kastle2: { x: 50, y: 68 },
        citadel: { x: 19.1, y: 37.3 }
    },
    {
        id: 'patch-mode',
        type: 'text',
        color: 'white',
        value: 'MODE',
        setting: 'default',
        kastle2: { x: 67.7, y: 46.9 },
        citadel: { x: 31.4, y: 37.3 }
    },
    {
        id: 'patch-lfo-reset',
        type: 'text',
        color: 'white',
        value: 'RESET',
        setting: 'default',
        kastle2: { x: 67.7, y: 59.3 },
        citadel: { x: 56.1, y: 17.13 }
    },
    {
        id: 'patch-lfo-mod',
        type: 'text',
        color: 'white',
        value: 'MOD',
        setting: 'default',
        citadel: { x: 68.5, y: 17.13 }
    },
    {
        id: 'button-mode',
        type: 'text',
        color: 'white',
        value: 'MODE',
        setting: 'default',
        kastle2: { x: 67.7, y: 95 },
        citadel: { x: 66, y: 92.5, font: 'heading' }
    },
    {
        id: 'patch-lfo',
        type: 'text',
        color: 'white-inverse',
        value: 'LFO',
        setting: 'default',
        kastle2: { x: 77.55, y: 70.1 }
    },
    {
        id: 'button-tap',
        type: 'text',
        color: 'silver-inverse',
        value: 'TAP',
        setting: 'default',
        kastle2: { x: 77.55, y: 95 },
        citadel: { x: 76, y: 92.5 }
    },
    {
        id: 'pot-5-normal',
        type: 'text',
        color: 'white',
        value: 'Pitch',
        setting: 'default',
        kastle2: { x: 89.2, y: 22 },
        citadel: { x: 87, y: 52.95, font: 'heading' }
    },
    {
        id: 'pot-5-shift',
        type: 'text',
        color: 'silver-inverse',
        value: 'Volume',
        setting: 'default',
        kastle2: { x: 89.2, y: 26.2 },
        citadel: { x: 87, y: 55 }
    },
    {
        id: 'pot-5-mode',
        font: 'emoji',
        value: '♫',
        setting: 'default',
        kastle2: { x: 95.7, y: 14.5 },
        citadel: { x: 96.2, y: 47.5 }
    },

    {
        id: 'pot-6-normal',
        type: 'text',
        color: 'white',
        value: 'Timbre',
        setting: 'default',
        kastle2: { x: 89.2, y: 56.4 },
        citadel: { x: 87, y: 71.8, font: 'heading' }
    },
    {
        id: 'pot-6-shift',
        type: 'text',
        color: 'silver-inverse',
        value: 'Ratio',
        setting: 'default',
        kastle2: { x: 89.2, y: 60.6 },
        citadel: { x: 87, y: 74 }
    },
    {
        id: 'pot-6-mode',
        font: 'emoji',
        value: '♫',
        setting: 'default',
        kastle2: { x: 95.7, y: 49 },
        citadel: { x: 96.2, y: 66.6 }
    },
    {
        id: 'pot-7-up-sync',
        type: 'text',
        color: 'white',
        value: 'SYNC',
        setting: 'default',
        align: 'right',
        kastle2: { x: 89.2, y: 75.4 },
        citadel: { x: 87, y: 79.6 }
    },
    {
        id: 'pot-7-up-free',
        type: 'text',
        color: 'white',
        value: 'FREE',
        setting: 'default',
        align: 'left',
        kastle2: { x: 89.2, y: 75.4 },
        citadel: { x: 87, y: 79.6 }
    },
    {
        id: 'pot-7-normal',
        type: 'text',
        color: 'white',
        value: 'LFO',
        setting: 'default',
        kastle2: { x: 89.2, y: 90.8 },
        citadel: { x: 87, y: 90.3, font: 'heading' }
    },
    {
        id: 'pot-7-shift',
        type: 'text',
        color: 'silver-inverse',
        value: 'Tempo',
        setting: 'default',
        kastle2: { x: 89.2, y: 95 },
        citadel: { x: 87, y: 92.5 }
    },
    {
        id: 'pot-7-mode',
        font: 'emoji',
        value: '♫',
        setting: 'default',
        kastle2: { x: 95.7, y: 83.7 },
        citadel: { x: 96.2, y: 85 }
    },
    {
        id: 'tempo-emoji',
        font: 'name-emoji',
        value: '▲',
        setting: 'default',
        kastle2: { x: 77.8, y: 83.7 },
        citadel: { x: 50, y: 79.7 }
    },

    {
        id: 'patch-pattern-reset',
        type: 'text',
        value: 'RESET',
        setting: 'default',
        citadel: { x: 19.1, y: 17.13 }
    }, {
        id: 'patch-pattern-c-in',
        type: 'text',
        value: 'C IN',
        setting: 'default',
        citadel: { x: 31.4, y: 17.13 }
    }, {
        id: 'patch-pattern-g-in',
        type: 'text',
        value: 'G IN',
        setting: 'default',
        citadel: { x: 44, y: 17.13 }
    },
    {
        id: 'patch-clk-in',
        type: 'text',
        value: 'IN',
        setting: 'default',
        citadel: { x: 7, y: 17.13 }
    }, {
        id: 'patch-clk-out',
        type: 'text',
        color: 'inverse',
        value: 'OUT',
        setting: 'default',
        citadel: { x: 7, y: 27.3 }
    },
];

export default labels;