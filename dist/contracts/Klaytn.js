"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Caver = require("caver-js");
require("dotenv/config");
const ethers_1 = require("ethers");
class Klaytn {
    constructor() {
        this.caver = new Caver("https://klaytn01.fandom.finance");
        this.walletAddress = process.env.PUBLIC_KEY;
        this.caver.wallet.add(new this.caver.wallet.keyring.singleKeyring(this.walletAddress, new this.caver.wallet.keyring.privateKey(process.env.PRIVATE_KEY)));
        this.caver.klay.accounts.wallet.add(process.env.PRIVATE_KEY, process.env.PUBLIC_KEY);
    }
    createContract(address, abi) {
        return new this.caver.contract.create(abi, address);
    }
    async balanceOf(address) {
        return ethers_1.BigNumber.from(await this.caver.klay.getBalance(address));
    }
    send(to, amount) {
        return this.caver.klay.sendTransaction({
            from: this.walletAddress,
            to,
            value: amount.toString(),
            gas: 1500000,
        });
    }
}
exports.default = new Klaytn();
//# sourceMappingURL=Klaytn.js.map