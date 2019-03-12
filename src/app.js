import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'

Vue.component('gg-button', Button);
Vue.component('gg-icon', Icon);
Vue.component('gg-button-group', ButtonGroup);
Vue.component('gg-input', Input);
Vue.component('gg-row', Row);
Vue.component('gg-col', Col);

new Vue({
    el: "#app",
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: '王五'
    }
});
