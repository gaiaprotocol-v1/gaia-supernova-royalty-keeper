import Klaytn from "./contracts/Klaytn";
import WKlayContract from "./contracts/WKlayContract";

setInterval(async () => {
    const now = new Date();

    // 자정에 실행
    if (now.getHours() === 0 && now.getMinutes() === 0) {
        try {
            const balance = await WKlayContract.balanceOf(Klaytn.walletAddress!);
            await WKlayContract.withdraw(balance);
            await Klaytn.send("0xEfaA075D8478c81Bde39795dF7588b7BEbA7e192", balance.mul(9).div(10));
        } catch (e) { console.error(e); }
    }
}, 60000);
