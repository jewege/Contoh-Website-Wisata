function myDropDown() {
      document.getElementById("mydropdown").classList.toggle('show');
}

//Menutup dropdown menu ketika user klik di luar list dropdown menu
window.onclick = function (event) {
      if (!event.target.matches('.dropdown-btn')) {

            let dropdowns = document.getElementsByClassName("dropdown-content");
            let i
            for (i = 0; i < dropdowns.length; i++) {
                  let openDropdown = dropdowns[i];
                  if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                  }
            }
      }
}