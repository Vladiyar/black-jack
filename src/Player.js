export class Player {
    isCanDraw = true;
    isPlayerDraw = false;
    handValue = 0;
    cardsArray = [];


    drawCard(cardDescription) {
        if (this.isCanDraw) {
            this.cardsArray.push(cardDescription);
            let tmpValue = 0;
            cardDescription[1] === 11 ? (this.handValue + 11 > 21 ? tmpValue = 1 : tmpValue + 11) : tmpValue = cardDescription[1];

            return this.handValue += tmpValue;
        }
    }

}
