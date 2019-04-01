/*
 * Copyright (c) 2019 ООО «МДТЗК» (ticketland.ru)
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense copies of the Software,  and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { TlandEvents } from "../events/logical/TlandEvents";
import {Observer} from "../events/logical/Observer";

export class LibraryOfElements implements Observer{

    private _activeBorderColor: string = '#0369d9';
    private _inactiveBorderColor: string = '#E2E6EA';
    private readonly _librtaryElements: HTMLCollectionOf<HTMLDivElement>;

    constructor() {

        this._librtaryElements = document.getElementsByClassName('element__cell') as HTMLCollectionOf<HTMLDivElement>;
    }

    private _removeAllHighLightedBorders(elements: HTMLCollectionOf<HTMLDivElement>): void {
        let length = elements.length;
        for (let i = 0; i < length; i++) {
            elements.item(i).style.borderColor = this._inactiveBorderColor;
             // @ts-ignore
            elements.item(i)['isActive'] = false;

        }
    }


    handleEvent(event: TlandEvents, data: string) {

        if (event === TlandEvents.REQUEST_SELECT_MODE) {
            this._removeAllHighLightedBorders(this._librtaryElements);
        }
    }
}
