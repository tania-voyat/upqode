import './style.scss';
import initMap from './js/mapsLoader';
import toggleMenu from './js/menuToggler';
import onYouTubeIframeAPIReady from './js/videoLoader';
import Splide from '@splidejs/splide';

new Splide('.splide').mount();

toggleMenu();
initMap();
onYouTubeIframeAPIReady();
