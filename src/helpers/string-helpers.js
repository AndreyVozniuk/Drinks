export const sliceString = (string, stringLength) => {
  if(string.length > stringLength) {
    return `${string.slice(0, stringLength)}...`
  }

  return string
}

export const joinStringWithUnderline = (string) => {
  return string
    .split(' ')
    .map(string => string.slice(0, 1).toUpperCase() + string.slice(1)).join('_')
}

