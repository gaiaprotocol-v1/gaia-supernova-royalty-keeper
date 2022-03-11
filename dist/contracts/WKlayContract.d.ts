import { BigNumber } from "ethers";
import KIP7Contract from "./standard/KIP7Contract";
declare class WKlayContract extends KIP7Contract {
    constructor();
    withdraw(amount: BigNumber): Promise<void>;
}
declare const _default: WKlayContract;
export default _default;
//# sourceMappingURL=WKlayContract.d.ts.map