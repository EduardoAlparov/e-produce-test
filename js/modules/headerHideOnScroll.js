export default () => {
  ScrollTrigger.create({
    trigger: "#trigger",
    start: 0,
    end: "bottom",
    onToggle: (self) => {
      document.querySelector('.header').classList.toggle('header--hidden');
    }
  });
}