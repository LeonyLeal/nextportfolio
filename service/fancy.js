export function getYearsExperience(since) {
  const initialDate = new Date(since);
  const today = new Date();

  let years = today.getFullYear() - initialDate.getFullYear();

  const isAniversary =
    today.getMonth() > initialDate.getMonth() ||
    (today.getMonth() === initialDate.getMonth() &&
      today.getDate() >= initialDate.getDate());

  if (!isAniversary) {
    years--;
  }
  return years;
}

export function getRandomCommand(commandList) {
  const index = Math.floor(Math.random() * commandList.length);
  return commandList[index];
}