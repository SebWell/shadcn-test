export default {
    editor: {
        label: 'Test Button',
        icon: 'hand-pointer',
    },
    triggerEvents: [
        { name: 'click', label: 'On Click', event: { value: '' }, default: true },
    ],
    properties: {
        text: {
            label: 'Button text',
            type: 'Text',
            section: 'settings',
            defaultValue: 'Test Button',
            bindable: true,
        }
    }
};
