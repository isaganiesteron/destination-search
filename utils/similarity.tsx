const _editDistance = (string1: string, string2: string) => {
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  let costs = new Array();
  for (let i = 0; i <= string1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= string2.length; j++) {
      if (i == 0) costs[j] = j;
      else {
        if (j > 0) {
          let newValue = costs[j - 1];
          if (string1.charAt(i - 1) != string2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[string2.length] = lastValue;
  }
  return costs[string2.length];
};

export default (string1: string, string2: string) => {
  let longer: string = string1;
  let shorter: string = string2;
  if (string1.length < string2.length) {
    longer = string2;
    shorter = string1;
  }
  let longerLength: number = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return ((longerLength - _editDistance(longer, shorter)) / longerLength) * 100; // will return the similarity rounded to 0 decimal places
};
