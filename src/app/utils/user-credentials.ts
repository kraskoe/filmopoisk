export function getUserCredAbbreviation(username: string) {
  switch (true) {
    case username.split(' ').length > 1: {
      return username.split(' ')[0][0] + username.split(' ')[1][0];
    }
    case username.split('-').length > 1: {
      return username.split(' ')[0][0] + username.split(' ')[1][0];
    }
    case username.split('_').length > 1: {
      return username.split(' ')[0][0] + username.split(' ')[1][0];
    }
    default: return username[0];
  }
}
