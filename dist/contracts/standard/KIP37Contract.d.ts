import { BigNumberish, ContractInterface } from "ethers";
import Contract from "../Contract";
export default class KIP37Contract extends Contract {
    constructor(address: string, abi?: ContractInterface);
    uri(id: BigNumberish): Promise<string>;
}
//# sourceMappingURL=KIP37Contract.d.ts.map