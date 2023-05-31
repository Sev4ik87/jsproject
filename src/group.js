function checkGroupNames(arrGroups) {
  const regex = /^(?:[FD][D]|[FM][M]|[FE][E]|[fd][d]|[fm][m]|[fe][e])(20\d{2})-\d{1,2}(-\d+)?$/;

  for (let groupName of arrGroups) {
    if (regex.test(groupName)) {
      console.log(`${groupName}: Success`);
    } else {
      console.log(`${groupName}: Error`);
    }
  }
}

const arrGroups = [
  'FE2021-5',
  'Fe2020-2',
  'FD2021',
  'fD2022-1',
  'FE2020-3',
  'FD2020/2',
  'FU2022-333',
  'fe2021-3',
  'FD2020$5',
  'FE2008-52',
  'Fm2008-23',
  'FM2022-1',
];

checkGroupNames(arrGroups);
