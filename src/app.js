/* global Modernizr */

import * as modctrl from 'modctrl';
import gfx from 'gfx';
import 'modernizr';
import { every, map, pick, reduce } from 'lodash';

const browser_reqs = [
    'typedarrays',
    'queryselector',
    'websockets',
    'webgl',
    'xhrresponsetypearraybuffer',
    'requestanimationframe',
    'raf',
    // 'FAKE_BROWSER_FEATURE', // this can be used for testing the bad-browser message
];

function create() {
    let modname = location.hash.replace(/^#/, '');

    let good_browser = every(map(browser_reqs, n => Modernizr[n]), n => !!n);

    if (good_browser) {
        modctrl.create(gfx, modname);
        update();
    }
    else {
        document.body.classList.add('bad-browser');
    }
}

function update() {
    requestAnimationFrame(update);
    modctrl.update(gfx);
    gfx.update();
}

create();
