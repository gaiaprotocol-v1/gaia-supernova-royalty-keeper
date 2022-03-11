"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Contract_1 = __importDefault(require("../Contract"));
class KIP7Contract extends Contract_1.default {
    constructor(address, abi) {
        super(address, abi);
    }
    async getName() {
        return await this.contract.methods.name().call();
    }
    async getTotalSupply() {
        return ethers_1.BigNumber.from(await this.contract.methods.totalSupply().call());
    }
    async balanceOf(owner) {
        return ethers_1.BigNumber.from(await this.contract.methods.balanceOf(owner).call());
    }
}
exports.default = KIP7Contract;
//# sourceMappingURL=KIP7Contract.js.map