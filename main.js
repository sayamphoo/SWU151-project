function myFunction() {
  var input, filter, ul, li, h4, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    h4 = li[i].getElementsByTagName("h4")[0];
    txtValue = h4.textContent || h4.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


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
        "<a target='_blank' href='https://forms.gle/GWALrgshpds1Asg8A' style='text-decoration: none; color: #fff';padding: 20px;>ตกลง</a>",
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
