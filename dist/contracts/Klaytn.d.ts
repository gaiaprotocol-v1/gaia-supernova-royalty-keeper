import "dotenv/config";
import { BigNumber } from "ethers";
declare class Klaytn {
    caver: any;
    walletAddress: string | undefined;
    constructor();
    createContract(address: string, abi: any): any;
    balanceOf(address: string): Promise<BigNumber>;
    send(to: string, amount: BigNumber): any;
}
declare const _default: Klaytn;
export default _default;
//# sourceMappingURL=Klaytn.d.ts.map