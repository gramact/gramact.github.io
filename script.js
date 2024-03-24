function myFunction() {
  // Declare variables
  var input, filter, mainElement, container, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  mainElement = document.getElementById("imageGallery");
  container = mainElement.getElementsByClassName('profile-container');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < container.length; i++) {
    a = container[i].getElementsByTagName("p")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      container[i].style.display = "";
    } else {
      container[i].style.display = "none";
    }
  }
}

function goToTopOfPage() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener("DOMContentLoaded", function () {
  const imageGalleryDiv = document.getElementById("imageGallery");

  const images = "profile_pics/actress_ramyapandian_profile_pic.jpg profile_pics/alayaf_profile_pic.jpg profile_pics/anikhasurendran_profile_pic.jpg profile_pics/anupamaparameswaran96_profile_pic.jpg profile_pics/aruljothi_arockiaraj_profile_pic.jpg profile_pics/divya_ganesan_official_profile_pic.jpg profile_pics/gayatribhardwaj___profile_pic.jpg profile_pics/itisshobanaa_profile_pic.jpg profile_pics/janhvikapoor_profile_pic.jpg profile_pics/kaavyaarivumanioffl_profile_pic.jpg profile_pics/kanmani_manoharan_profile_pic.jpg profile_pics/maanasi.k_profile_pic.jpg profile_pics/mili_kya_mili_profile_pic.jpg profile_pics/mizoislive_profile_pic.jpg profile_pics/norafatehi_profile_pic.jpg profile_pics/pavithraarvind_profile_pic.jpg profile_pics/ruma_sharmaa_profile_pic.jpg profile_pics/sanjanasanghi96_profile_pic.jpg profile_pics/sanyamalhotra__profile_pic.jpg profile_pics/saraalikhan95_profile_pic.jpg profile_pics/shreyadhan13_profile_pic.jpg profile_pics/smruthivenkatofficial_profile_pic.jpg profile_pics/sreethu_krishnan_profile_pic.jpg"
  .split(" ");
  images.forEach(image => {
    const profileContainer = document.createElement("a");
    profileContainer.className = "profile-container";
    const imageName = image.split("profile_pics/")[1].split("_profile_pic.jpg")[0];
    const img = document.createElement("img");
    const profileName = document.createElement("p");
    const profileId = imageName.toLowerCase();
    img.id = profileId;
    img.className = "profile-img";
    img.src = `${image}`;
    img.alt = profileId+" "+"profile pic";
    profileContainer.href = "profile_pages/" + profileId + ".html";
    profileContainer.target = "_blank";
    profileName.className = "profile-name";
    profileName.textContent = profileId;
      profileContainer.appendChild(img);
      profileContainer.appendChild(profileName);
      imageGalleryDiv.appendChild(profileContainer);
  });
});

