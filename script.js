let n = 40;
for (let i = 2; i <= n; i++) {
  for (let j = 2; j <= i; j++) {
    if ((i % j == 0) && (j != i)) {
      break;
    } else {
        var string = `Число ${i} є простим числом`;
      console.log(string);
      break;
    }
  }
}
for (let i = 4; i <= n; i++) {
    for(let j = 2; j <= i; j++)
      if (i % 2 != 0) {
        break;
      } else {
          var string = `Число ${i} не є простим числом`;
        console.log(string);
        break;
      }
    }