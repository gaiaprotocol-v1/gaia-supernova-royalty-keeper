import { BigNumber, ContractInterface } from "ethers";
import Contract from "../Contract";
export default abstract class KIP7Contract extends Contract {
    constructor(address: string, abi: ContractInterface);
    getName(): Promise<string>;
    getTotalSupply(): Promise<BigNumber>;
    balanceOf(owner: string): Promise<BigNumber>;
}
//# sourceMappingURL=KIP7Contract.d.ts.map