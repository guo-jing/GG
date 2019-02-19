import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('gg-button', Button);
Vue.component('gg-icon', Icon);

new Vue({
    el: "#app"
});