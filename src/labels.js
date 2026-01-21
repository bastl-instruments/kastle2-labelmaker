const labels = [
    {
        id: 'connector-sync',
        type: 'text',
        color: 'white',
        value: 'SYNC',
        setting: 'default',
        x: 29,
        y: 4.6
    },
     {
        id: 'connector-usb',
        type: 'text',
        color: 'white',
        value: 'USB',
        setting: 'default',
        x: 50,
        y: 4.6
    },
     {
        id: 'connector-audio',
        type: 'text',
        color: 'white',
        value: 'AUDIO',
        setting: 'default',
        x: 71,
        y: 4.6
    },
      {
        id: 'name-first-line',
        type: 'text',
        font: 'heading',
        color: 'white',
        value: 'MAGIC',
        align: 'left',
        setting: 'default',
        x: 51.8,
        y: 14.7
    },
    
     {
        id: 'name-second-line',
        type: 'text',
        font: 'heading',
        color: 'white',
        value: 'BALL',
        align: 'left',
        setting: 'default',
        x: 51.8,
        y: 18.9
    },
     {
        id: 'name-emoji',
        font: 'name-emoji',
        value: '🔮',
        setting: 'default',
        x: 71,
        y: 14
    },
     {
        id: 'patch-sync',
        type: 'text',
        color: 'white',
        value: 'SYNC',
        setting: 'default',
        x: 32.2,
        y: 25.6
    },
     
     {
        id: 'patch-sync-in',
        type: 'text',
        color: 'white',
        value: 'IN',
        setting: 'default',
        align: 'right',
        x: 31.5,
        y: 29.7
    },

     
     {
        id: 'patch-sync-out',
        type: 'text',
        color: 'white',
        value: 'OUT',
        setting: 'default',
        align: 'left',
        x: 32.9,
        y: 29.7
    },
    {
        id: 'patch-sync-in-l',
        type: 'text',
        color: 'white',
        value: 'L',
        setting: 'default',
        readonly: true,
        align: 'right',
        x: 28.5,
        y: 33.6
    },
    {
        id: 'patch-sync-in-r',
        type: 'text',
        color: 'white',
        value: 'R',
        setting: 'default',
        readonly: true,
        align: 'right',
        x: 28.5,
        y: 37.8
    },
    {
        id: 'patch-sync-out-l',
        type: 'text',
        color: 'white-inverse',
        value: 'L',
        setting: 'default',
        readonly: true,
        align: 'left',
        x: 35.9,
        y: 33.6
    },
    {
        id: 'patch-sync-out-r',
        type: 'text',
        color: 'white-inverse',
        value: 'R',
        setting: 'default',
        readonly: true,
        align: 'left',
        x: 35.9,
        y: 37.8
    },




         {
        id: 'patch-audio',
        type: 'text',
        color: 'white',
        value: 'AUDIO',
        setting: 'default',
        x: 67.8,
        y: 25.6
    },
     
     {
        id: 'patch-audio-in',
        type: 'text',
        color: 'white',
        value: 'IN',
        setting: 'default',
        align: 'right',
        x: 67,
        y: 29.7
    },

     
     {
        id: 'patch-audio-out',
        type: 'text',
        color: 'white',
        value: 'OUT',
        setting: 'default',
        align: 'left',
        x: 68.4,
        y: 29.7
    },
    {
        id: 'patch-audio-in-l',
        type: 'text',
        color: 'white',
        value: 'L',
        setting: 'default',
        readonly: true,
        align: 'right',
        x: 63.8,
        y: 33.6
    },
    {
        id: 'patch-audio-in-r',
        type: 'text',
        color: 'white',
        value: 'R',
        setting: 'default',
        readonly: true,
        align: 'right',
        x: 63.8,
        y: 37.8
    },
    {
        id: 'patch-audio-out-l',
        type: 'text',
        color: 'white-inverse',
        value: 'L',
        setting: 'default',
        readonly: true,
        align: 'left',
        x: 71.4,
        y: 33.6
    },
    {
        id: 'patch-audio-out-r',
        type: 'text',
        color: 'white-inverse',
        value: 'R',
        setting: 'default',
        readonly: true,
        align: 'left',
        x: 71.4,
        y: 37.8
    },


    {
        id: 'pot-1-normal',
        type: 'text',
        color: 'white',
        value: 'Pitch Mod',
        setting: 'default',
        x: 10.6,
        y: 22
    },
    {
        id: 'pot-1-shift',
        type: 'text',
        color: 'silver-inverse',
        value: 'Input',
        setting: 'default',
        x: 10.6,
        y: 26.2
    }, 
     {
        id: 'pot-1-mode',
        font: 'emoji',
        value: '♫',
        setting: 'default',
        x: 4.3,
        y: 14.5
    },
    {
        id: 'pot-2-normal',
        type: 'text',
        color: 'white',
        value: 'Timbre Mod',
        setting: 'default',
        x: 10.6,
        y: 56.4
    },
    {
        id: 'pot-2-shift',
        type: 'text',
        color: 'silver-inverse',
        value: 'FX',
        setting: 'default',
        x: 10.6,
        y: 60.6
    },
     {
        id: 'pot-2-mode',
        font: 'emoji',
        value: '♫',
        setting: 'default',
        x: 4.3,
        y: 49
    },
    {
        id: 'pot-3-normal',
        type: 'text',
        color: 'white',
        value: 'Lfo Mod',
        setting: 'default',
        x: 10.6,
        y: 90.8
    },
    {
        id: 'pot-3-shift',
        type: 'text',
        color: 'silver-inverse',
        value: 'Rhythm',
        setting: 'default',
        x: 10.6,
        y: 95
    },
     {
        id: 'pot-3-mode',
        font: 'emoji',
        value: '♫',
        setting: 'default',
        x: 4.3,
        y: 83.7
    },
    
      {
        id: 'button-shift',
        type: 'text',
        color: 'inverse',
        value: 'Shift',
        setting: 'default',
        x: 24.5,
        y: 91
    },
    {
        id: 'patch-pitch-1',
        type: 'text',
        color: 'white',
        value: '▶',
        setting: 'default',
        x: 35.9,
        y: 50.8,
        align: 'left'
    },
    {
        id: 'patch-pitch-2',
        type: 'text',
        color: 'white',
        value: 'Note',
        setting: 'default',
        x: 35.9,
        y: 55,
        align: 'left'
    },
    {
        id: 'patch-pattern',
        type: 'text',
        color: 'white',
        value: 'Pattern',
        setting: 'default',
        x: 43.8,
        y: 77.2
    }, {
        id: 'patch-g',
        type: 'text',
        color: 'white',
        value: 'G',
        setting: 'default',
        readonly: true,
        x: 40.8,
        y: 80.8
    },
    {
        id: 'patch-r',
        type: 'text',
        color: 'white',
        value: 'R',
        setting: 'default',
        readonly: true,
        x: 43.8,
        y: 80.8
    },
    {
        id: 'patch-c',
        type: 'text',
        color: 'white',
        value: 'C',
        setting: 'default',
        readonly: true,
        x: 46.8,
        y: 80.8
    },
    {
        id: 'patch-gate',
        type: 'text',
        color: 'inverse',
        value: 'GATE',
        setting: 'default',
        x: 43.8,
        y: 94.1
    }, {
        id: 'patch-env',
        type: 'text',
        color: 'inverse',
        value: 'ENV',
        setting: 'default',
        x: 56,
        y: 80.5
    },
    {
        id: 'patch-cv',
        type: 'text',
        color: 'inverse',
        value: 'CV',
        setting: 'default',
        x: 56,
        y: 94.1
    },
    {
        id: 'switch-power',
        type: 'text',
        color: 'white',
        value: 'Power',
        setting: 'default',
        x: 50,
        y: 25.6
    },
    {
        id: 'pot-4-normal',
        type: 'text',
        color: 'white',
        value: 'ENV',
        setting: 'default',
        x: 50,
        y: 49
    },
    {
        id: 'pot-4-shift',
        type: 'text',
        color: 'silver-inverse',
        value: 'MOD',
        setting: 'default',
        x: 50,
        y: 53.3
    },
    {
        id: 'patch-trig',
        type: 'text',
        color: 'white',
        value: 'TRIG',
        setting: 'default',
        x: 50,
        y: 68
    },
    {
        id: 'patch-mode',
        type: 'text',
        color: 'white',
        value: 'MODE',
        setting: 'default',
        x: 67.7,
        y: 46.9
    },
    {
        id: 'patch-reset',
        type: 'text',
        color: 'white',
        value: 'RESET',
        setting: 'default',
        x: 67.7,
        y: 59.3
    },
    {
        id: 'button-mode',
        type: 'text',
        color: 'white',
        value: 'MODE',
        setting: 'default',
        x: 67.7,
        y: 95
    },
    {
        id: 'patch-lfo',
        type: 'text',
        color: 'white-inverse',
        value: 'LFO',
        setting: 'default',
        x: 77.55,
        y: 70.1
    },
    {
        id: 'button-tap',
        type: 'text',
        color: 'silver-inverse',
        value: 'TAP',
        setting: 'default',
        x: 77.55,
        y: 95
    },
    {
        id: 'pot-5-normal',
        type: 'text',
        color: 'white',
        value: 'Pitch',
        setting: 'default',
        x: 89.2,
        y: 22
    },
    {
        id: 'pot-5-shift',
        type: 'text',
        color: 'silver-inverse',
        value: 'Volume',
        setting: 'default',
        x: 89.2,
        y: 26.2
    },
     {
        id: 'pot-5-mode',
        font: 'emoji',
        value: '♫',
        setting: 'default',
        x: 95.7,
        y: 14.5
    },
    
    {
        id: 'pot-6-normal',
        type: 'text',
        color: 'white',
        value: 'Timbre',
        setting: 'default',
        x: 89.2,
        y: 56.4
    },
    {
        id: 'pot-6-shift',
        type: 'text',
        color: 'silver-inverse',
        value: 'Ratio',
        setting: 'default',
        x: 89.2,
        y: 60.6
    },
      {
        id: 'pot-6-mode',
        font: 'emoji',
        value: '♫',
        setting: 'default',
        x: 95.7,
        y: 49
    },
    {
        id: 'pot-7-up-sync',
        type: 'text',
        color: 'white',
        value: 'SYNC',
        setting: 'default',
        readonly: true,
        align: 'right',
        x: 89.2,
        y: 75.4
    },
    {
        id: 'pot-7-up-free',
        type: 'text',
        color: 'white',
        value: 'FREE',
        setting: 'default',
        readonly: true,
        align: 'left',
        x: 89.2,
        y: 75.4
    },
    {
        id: 'pot-7-normal',
        type: 'text',
        color: 'white',
        value: 'LFO',
        setting: 'default',
        x: 89.2,
        y: 90.8
    },
    {
        id: 'pot-7-shift',
        type: 'text',
        color: 'silver-inverse',
        value: 'Tempo',
        setting: 'default',
        x: 89.2,
        y: 95
    },
     {
        id: 'pot-7-mode',
        font: 'emoji',
        value: '♫',
        setting: 'default',
        x: 95.7,
        y: 83.7
    },
];

export default labels;