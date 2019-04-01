/*
 * Copyright (c) 2019 ООО «МДТЗК» (ticketland.ru)
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense copies of the Software,  and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import {TlandEvents} from "../../src/ts/events/logical/TlandEvents";
import {EventBus} from "../../src/ts/events/logical/EventBus";
import {Clipboard} from "../../src/ts/components/helpers/Clipboard";

const assert = require('chai').assert;

describe('Clipboard',()=>{
    let clipboard;

    beforeEach(()=>{
        clipboard = new Clipboard();
        EventBus.clearState();
    });

    it('При получении сообщения PASTE возникает ошибка, если ранее ничего не записывалось',()=>{
        try {
            clipboard.handleEvent(TlandEvents.PASTE);
        } catch(e){}

        assert.equal(EventBus.lastState, TlandEvents.ERROR);
        assert.equal(EventBus.lastData, 'Clipboard is empty.');
    });

    it('При получении сообщения PASTE в EventBus отправляется сообщение ADD_FROM_CLIPBOARD',()=>{
        clipboard.handleEvent(TlandEvents.REQUEST_WRITE_CLIPBOARD, 'test');
        clipboard.handleEvent(TlandEvents.PASTE);

        assert.equal(EventBus.lastState, TlandEvents.ADD_FROM_CLIPBOARD);
        assert.equal(EventBus.lastData, 'test');
    })

});
