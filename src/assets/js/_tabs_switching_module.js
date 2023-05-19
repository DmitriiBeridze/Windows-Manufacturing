const tabs_switching_module = () => {
  const tabsSwitching = (
    targetContainerSelector,
    targetSelector,
    contentSelector,
    activeStyle,
    ...obj
  ) => {
    let targetContainer = document.querySelector(targetContainerSelector),
      targetItem = document.querySelectorAll(targetSelector),
      content = document.querySelectorAll(contentSelector);

    // animation class add
    content.forEach((elem) => {
      elem.classList.add("faded");
    });

    // ---------------Hide
    const hide = () => {
      content.forEach((elem) => {
        elem.style.display = "none";
      });
      targetItem.forEach((card) => {
        card.classList.remove(activeStyle);
      });
    };

    // ---------------Show
    const show = (selector) => {
      let showItem = document.querySelectorAll(`[data-type=${obj[selector]}]`);
      showItem.forEach((elem) => (elem.style.display = "flex"));

      targetItem[selector].classList.add(activeStyle);
    };

    show(0);

    targetContainer.addEventListener("click", (e) => {
      e.preventDefault();

      if (
        e.target.classList.contains(targetSelector.replace(/\./, "")) ||
        e.target.parentNode.classList.contains(targetSelector.replace(/\./, ""))
      ) {
        targetItem.forEach((elem, index) => {
          if (e.target == elem || e.target.parentNode == elem) {
            // console.log(elem);
            hide();
            show(index);
          }
        });
      }
    });
  };
  tabsSwitching(
    ".slider__carousel",
    ".slider__card",
    ".glazingTabs-card",
    "active-border",

    "wood",
    "aluminum",
    "plastic",
    "french",
    "rise"
  );
  tabsSwitching(
    ".decoration__carousel",
    ".decoration__slider_card",
    ".decorationTabs__card",
    "border_top",

    "Interior_decoration",
    "Exterior_decoration",
    "Remote_glazing",
    "Roof_to_balcony"
  );
  // tabsSwitching();
  // console.log(document.querySelectorAll(".slider__card "));
};
export default tabs_switching_module;
