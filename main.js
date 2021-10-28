function myOpen(url) {
  window.open(url, "_self").focus();
}

window.onload = function () {

  if (getCookie("AAA") == "") {
    document.cookie = "AAA='AAA'; expires=Thu, 18 Dec 2022 12:00:00 UTC";
    Swal.fire({
      title: "welcome",
      html: "ก่อนเข้าชมเว็บไซต์รบกวนทำแบบสอบถาม: <b></b>",
      confirmButtonText:
        "<a href='https://forms.gle/GWALrgshpds1Asg8A' style='text-decoration: none; color: #fff';padding: 20px;>ตกลง</a>",
    });
  }

  console.log(document.cookie);
};

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
