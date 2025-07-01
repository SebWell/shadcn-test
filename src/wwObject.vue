<template>
    <button 
        :class="buttonClass" 
        @click="handleClick"
        v-bind="$attrs"
    >
        {{ content?.text || 'Test Button' }}
    </button>
</template>

<script>
export default {
    name: 'ShadcnTest',
    props: {
        content: {
            type: Object,
            default: () => ({})
        }
    },
    emits: ['click'],
    computed: {
        buttonClass() {
            return [
                'px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600',
                this.content?.customClass || ''
            ].join(' ')
        }
    },
    methods: {
        handleClick(event) {
            this.$emit('click', event)
        }
    }
};
</script>

<style scoped>
/* Styles de base Tailwind intégrés */
button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.375rem;
    background-color: #3b82f6;
    color: white;
    cursor: pointer;
    transition: background-color 0.2s;
}

button:hover {
    background-color: #2563eb;
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
</style>
