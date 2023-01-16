// js here

import 'bootstrap/dist/css/bootstrap.min.css';

import {getAstronautList} from './api/astronaut';
import {renderAstronautListItem} from './dom/astronaut';

const astroList = document.querySelector('.astronaut-list');

getAstronautList().then((data) => {
  data.results.map((astronaut) => {
    console.log(astronaut);
    console.log('........');
    renderAstronautListItem(astronaut, astroList);
  });
});
