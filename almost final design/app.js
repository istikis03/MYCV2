if (window.innerWidth > 768) {
    
console.log("rulam", window.innerWidth);

  new fullpage("#fullpage", {
    autoScrolling: true,
    navigation: true,
    navigationTooltips: ["Home", "About", "Projects", "Contact"],
    anchors: ["section1", "section2", "section3", "section4"],
    navigationPosition: "left",
    showActiveTooltip: true
  });
} else {
    console.log("NU rulam", window.innerWidth)
}

