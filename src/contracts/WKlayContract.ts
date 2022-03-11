import { BigNumber } from "ethers";
import Klaytn from "./Klaytn";
import KIP7Contract from "./standard/KIP7Contract";

class WKlayContract extends KIP7Contract {

    constructor() {
        super("0xfd844c2fca5e595004b17615f891620d1cb9bbb2", require("./WKlayContractABI.json"));
    }

    public async withdraw(amount: BigNumber): Promise<void> {
        await this.contract.methods.withdraw(amount).send({ from: Klaytn.walletAddress, gas: 1500000 });
    }
}

export default new WKlayContract();
