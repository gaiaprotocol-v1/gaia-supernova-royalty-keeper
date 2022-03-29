import Klaytn from "./contracts/Klaytn";
import WKlayContract from "./contracts/WKlayContract";

setInterval(async () => {
    const now = new Date();

    // 점심에 실행
    if (now.getHours() === 12 && now.getMinutes() === 0) {
        try {
            const balance = await WKlayContract.balanceOf(Klaytn.walletAddress!);
            await WKlayContract.withdraw(balance);
            await Klaytn.send("0xBd297DacCD1E9B6ec33D13a20765B4acF0d77333", balance.mul(9).div(10));
        } catch (e) { console.error(e); }
    }
}, 60000);
