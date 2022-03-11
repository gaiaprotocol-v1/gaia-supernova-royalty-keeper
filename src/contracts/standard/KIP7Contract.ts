import { BigNumber, ContractInterface } from "ethers";
import Contract from "../Contract";

export default abstract class KIP7Contract extends Contract {

    constructor(address: string, abi: ContractInterface) {
        super(address, abi);
    }

    public async getName(): Promise<string> {
        return await this.contract.methods.name().call();
    }

    public async getTotalSupply(): Promise<BigNumber> {
        return BigNumber.from(await this.contract.methods.totalSupply().call());
    }

    public async balanceOf(owner: string): Promise<BigNumber> {
        return BigNumber.from(await this.contract.methods.balanceOf(owner).call());
    }
}
