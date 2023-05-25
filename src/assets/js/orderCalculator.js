const orderCalculator = (modalState) => {
  const windowForm = document.querySelectorAll(".calculation__preview_icon"),
    width = document.querySelectorAll("#width"),
    height = document.querySelectorAll("#height"),
    glazingType = document.querySelectorAll("#glazing-type"),
    temperatureType = document.querySelectorAll(".glazingtype__checkbox");

  const calculator = (node, event, prop) => {
    node.forEach((elem, index) => {
      elem.addEventListener(event, (e) => {
        // console.log(e.target);
        switch (elem.tagName) {
          case "LI":
            modalState[prop] = index;
            break;
          case "INPUT":
            if (elem.getAttribute("type") == "checkbox") {
              index == 0
                ? (modalState[prop] = "cold")
                : (modalState[prop] = "warm");

              node.forEach((el, i) => {
                el.checked = false;
                if (index == i) {
                  el.checked = true;
                }
              });
            } else modalState[prop] = elem.value;

            break;
          case "SELECT":
            modalState[prop] = elem.value;
        }
        console.log(modalState);
      });
    });
  };
  calculator(windowForm, "click", "form");
  calculator(width, "input", "width");
  calculator(height, "input", "height");
  calculator(temperatureType, "change", "temperature");
  calculator(glazingType, "change", "type");
};
export default orderCalculator;