import React, { useEffect } from "react";

function Script() {
  useEffect(() => {
    let respostas = document.querySelectorAll(".accordion");
    respostas.forEach((event) => {
      event.addEventListener("click", () => {
        if (event.classList.contains("active")) {
          event.classList.remove("active");
        } else {
          event.classList.add("active");
        }
      });
    });
  }, []);

  return <div></div>;
}


export default Script;
