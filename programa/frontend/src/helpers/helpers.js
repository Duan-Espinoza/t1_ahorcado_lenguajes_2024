export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(correct, wrong, word) {
  let status = 'win';

  // Se revisa si ganó
  word.split('').forEach(letter => {
    if(!correct.includes(letter)){
      status = '';
    }
  });
  
  // Se revisa si perdió
  if(wrong.length === 6) status = 'lose';

  return status
}