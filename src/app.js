import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('gg-button', Button);
Vue.component('gg-icon', Icon);
Vue.component('gg-button-group', ButtonGroup);
Vue.component('gg-input', Input);

new Vue({
    el: "#app",
    data: {
        loading1: false,
        loading2: true,
        loading3: false
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value);
        }
    }
});
