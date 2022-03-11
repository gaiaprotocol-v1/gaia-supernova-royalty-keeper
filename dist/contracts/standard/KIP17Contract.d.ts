import { BigNumberish, ContractInterface } from "ethers";
import Contract from "../Contract";
export default class KIP17Contract extends Contract {
    constructor(address: string, abi?: ContractInterface);
    ownerOf(id: BigNumberish): Promise<string>;
    tokenURI(id: BigNumberish): Promise<string>;
}
//# sourceMappingURL=KIP17Contract.d.ts.map