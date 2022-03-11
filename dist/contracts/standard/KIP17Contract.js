"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const KIP17Full_json_1 = __importDefault(require("../abi/klubs/artifacts/contracts/klaytn-contracts/token/KIP17/KIP17Full.sol/KIP17Full.json"));
const Contract_1 = __importDefault(require("../Contract"));
class KIP17Contract extends Contract_1.default {
    constructor(address, abi) {
        super(address, abi === undefined ? KIP17Full_json_1.default.abi : abi);
    }
    async ownerOf(id) {
        return await this.contract.methods.ownerOf(id).call();
    }
    async tokenURI(id) {
        return await this.contract.methods.tokenURI(id).call();
    }
}
exports.default = KIP17Contract;
//# sourceMappingURL=KIP17Contract.js.map