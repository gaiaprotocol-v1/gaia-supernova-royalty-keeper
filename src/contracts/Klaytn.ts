const Caver = require("caver-js");
import "dotenv/config";
import { BigNumber } from "ethers";

class Klaytn {

    public caver = new Caver("http://klaytn-node.klu.bs:9092");
    public walletAddress = process.env.PUBLIC_KEY;

    constructor() {
        this.caver.wallet.add(
            new this.caver.wallet.keyring.singleKeyring(
                this.walletAddress,
                new this.caver.wallet.keyring.privateKey(process.env.PRIVATE_KEY),
            ),
        );
        this.caver.klay.accounts.wallet.add(process.env.PRIVATE_KEY, process.env.PUBLIC_KEY);
    }

    public createContract(address: string, abi: any) {
        return new this.caver.contract.create(abi, address);
    }

    public async balanceOf(address: string) {
        return BigNumber.from(await this.caver.klay.getBalance(address));
    }

    public send(to: string, amount: BigNumber) {
        return this.caver.klay.sendTransaction({
            from: this.walletAddress,
            to,
            value: amount.toString(),
            gas: 1500000,
        });
    }
}

export default new Klaytn();
