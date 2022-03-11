"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Klaytn_1 = __importDefault(require("./Klaytn"));
const KIP7Contract_1 = __importDefault(require("./standard/KIP7Contract"));
class WKlayContract extends KIP7Contract_1.default {
    constructor() {
        super("0xfd844c2fca5e595004b17615f891620d1cb9bbb2", require("./WKlayContractABI.json"));
    }
    async withdraw(amount) {
        await this.contract.methods.withdraw(amount).send({ from: Klaytn_1.default.walletAddress, gas: 1500000 });
    }
}
exports.default = new WKlayContract();
//# sourceMappingURL=WKlayContract.js.map