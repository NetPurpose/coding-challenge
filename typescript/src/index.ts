export const getResults = (
  division: { name: string; points: number }[],
  n: number
) => {
  division = division.sort((a, b) => b.points - a.points); //Sort from highest to lower points

  const relegatedTeams = division.slice(division.length - n, division.length);
  //Creates the relegated Array with the n Relegated teams sorted from highest to lower points

  let promoteMessage = `Promote:`;
  let relegateMessage = `Relegate:`;

  for (let i = 0; i < n; i++) {
    promoteMessage += "\n" + division[i].name;
    relegateMessage += "\n" + relegatedTeams[i].name;
  }

  division.map((team) => {
    if (
      promoteMessage.includes(team.name) &&
      relegateMessage.includes(team.name)
    ) {
      throw `Team ${team.name} is included in both promoted and relegated`;
    }
  });

  const message = promoteMessage + "\n" + "\n" + relegateMessage;

  return message;
};
