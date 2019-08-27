const calculatePrecent = (data) => {
  const playerOneHasWon = data.filter(item => item.winner === 'player_one');
  const playerTwoHasWon = data.filter(item => item.winner === 'player_two');
  const percentOne = playerOneHasWon.length > 0 ? Math.round(100 * playerOneHasWon.length / data.length) : 0;
  const percentTwo = playerTwoHasWon.length > 0 ? Math.round(100 * playerTwoHasWon.length / data.length) : 0;
  return { percentOne, percentTwo };
};

export default calculatePrecent;
