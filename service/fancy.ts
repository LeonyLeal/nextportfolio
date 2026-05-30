export function getYearsExperience(since: string) {
  const initialDate = new Date(since);
  const today = new Date();

  let years = today.getFullYear() - initialDate.getFullYear();

  const isAnniversary =
    today.getMonth() > initialDate.getMonth() ||
    (today.getMonth() === initialDate.getMonth() &&
      today.getDate() >= initialDate.getDate());

  if (!isAnniversary) {
    years--;
  }

  return years;
}

export function getRandomCommand(commandList: string[]) {
  const index = Math.floor(Math.random() * commandList.length);
  return commandList[index];
}
