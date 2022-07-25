// $(".header__toggler").click(()=>{
//     $(".menu").slideToggle("slow");
// });
// $(".menu-close").click(()=>{
//     $(".menu").slideToggle("slow");
// });

$(".header__toggler").click(toggleMenu);
$(".menu-close").click(toggleMenu);
toggleMenu();

function toggleMenu() {
  if (parseInt($(".menu").css("width")) == 0) {
    $(".menu").removeAttr("style");
    $(".menu *").removeAttr("style");
  } else {
    $(".menu").css({ width: 0, opacity:0 });
    $(".menu *").css({ opacity:0 });
    setTimeout(()=>{
        $(".menu").css({ display: "none" });
        $(".menu *").css({ display: "none" });
    }, 500)
  }
}
