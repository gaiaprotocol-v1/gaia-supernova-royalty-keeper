"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Klaytn_1 = __importDefault(require("./contracts/Klaytn"));
const WKlayContract_1 = __importDefault(require("./contracts/WKlayContract"));
setInterval(async () => {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
        try {
            const balance = await WKlayContract_1.default.balanceOf(Klaytn_1.default.walletAddress);
            await WKlayContract_1.default.withdraw(balance);
            await Klaytn_1.default.send("0xEfaA075D8478c81Bde39795dF7588b7BEbA7e192", balance.mul(9).div(10));
        }
        catch (e) {
            console.error(e);
        }
    }
}, 60000);
//# sourceMappingURL=main.js.map