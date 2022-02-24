export const buyBall = (qty) => {
    // preprocessing advantage, extra space, better 
    return{
        type: "BUY_BALL",
        payload: qty       
    }
}