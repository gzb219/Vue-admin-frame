import Vue from 'vue';
import VaIcon from '@/components/VaIcons.vue';

// Register as a global component
Vue.component('VaIcon', VaIcon);

const icons = require.context('./svgs', false, /\.svg$/);
const req = (context: any) => context.keys().map(context);
req(icons);
