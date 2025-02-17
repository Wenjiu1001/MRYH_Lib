
let radiation = 0
NetworkEvents.dataReceived('mryh:radiation', event => {
    const data = event.data;
    radiation = data.getInt('radiation');
    if (radiation == 1) {
        event.player.tell(`你受到了1.5点辐射伤害！`);
    }
    if (radiation == 2) {
        event.player.tell(`你的防护装备成功防护了辐射，但耐久度减少了。`);
    }
    if (radiation == 3) {
        event.player.tell(`你受到抗辐射药水的保护，没有受到伤害。`);
    }
});