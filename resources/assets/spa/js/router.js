import AppComponent from './components/app.vue';
import RouterMap from './router.map';
import VueRouter from 'vue-router';

const router = new VueRouter();

router.map(RouterMap);

router.start({
    components: {
        'app': AppComponent
    },
},'body');