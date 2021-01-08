"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onTap = void 0;
function onTap(args) {
    var button = args.object;
    button.text = "I was tapped";
    console.log('button was tapped');
}
exports.onTap = onTap;
