const typeWriter = (element: HTMLElement | null) => {
  if (!element) return;
  const lettersArray: string[] = element.innerHTML.split('');
  element.innerHTML = '';
  setTimeout(() => {
    lettersArray.forEach((letter, index) => {
      setTimeout(() => element.innerHTML += letter, 115 * index);
    });
  }, 1000);
};

export { typeWriter };
