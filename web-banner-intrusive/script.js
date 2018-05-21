var close = function() {
  // console.log("test")
  document.querySelector(".gic2018-banner").remove();
  localStorage.setItem("gic2018-banner", false);
};

if (localStorage.getItem("gic2018-banner") === null) {
  document.addEventListener("DOMContentLoaded", function(event) {
    var elem = document.createElement("div");
    elem.innerHTML =
      '\
      <div role="dialog" class="gic2018-banner"> \
        <span class="gic2018-message-wrapper">Wir sind im Finale der Google.org Impact Challenge! 🚀 Es winken bis zu 500.000 € für unser Projekt und jede Stimme \
          zählt. Die Unterstützung ist nur einen Klick entfernt! 🎉🍻💥🎈🤸</span> \
        <div class="gic2018-btn-wrapper"> \
          <span tabindex="1" class="gic2018-close gic2018-btn">Nein Danke</span> \
          <a role="button" tabindex="0" class="gic2018-open gic2018-btn gic2018-btn-border" href="https://impactchallenge.withgoogle.com/deutschland2018/charities/digital-factory?v=NS0wLTItMTUyNjU3MTExNjY5NS40MDk3ODU4MjIwNjUyMzY4NjEtdm90aW5n" \
            target="_blank">Jetzt Abstimmen!</a> \
        </div> \
      </div> \
      ';
    document.body.appendChild(elem);
    document.querySelector(".gic2018-close").onclick = close;
    document.querySelector(".gic2018-open").onclick = close;
  });
}
