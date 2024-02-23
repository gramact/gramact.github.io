function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("imageGallery");
  li = ul.getElementsByClassName('profile-container');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const imageGalleryDiv = document.getElementById("imageGallery");

  const images = "profile_pics/hot/gayatribhardwaj___profile_pic.jpg profile_pics/hot/janhvikapoor_profile_pic.jpg profile_pics/hot/norafatehi_profile_pic.jpg profile_pics/hot/ruma_sharmaa_profile_pic.jpg profile_pics/hot/sanjanasanghi96_profile_pic.jpg profile_pics/hot/sanyamalhotra__profile_pic.jpg profile_pics/hot/saraalikhan95_profile_pic.jpg profile_pics/hot/shreyadhan13_profile_pic.jpg".split(" ");
  const availableProfiles = "profile_pages/anupamaparameswaran96.html profile_pages/aruljothi_arockiaraj.html profile_pages/divya_ganesan_official.html profile_pages/gayatribhardwaj__.html profile_pages/itisshobanaa.html profile_pages/janhvikapoor.html profile_pages/norafatehi.html profile_pages/pavithraarvind.html profile_pages/ruma_sharmaa.html profile_pages/sanjanasanghi96.html profile_pages/sanyamalhotra_.html profile_pages/saraalikhan95.html profile_pages/shreyadhan13.html profile_pages/smruthivenkatofficial.html profile_pages/sreethu_krishnan.html"
  .split(" ");
  images.forEach(image => {
    const profileContainer = document.createElement("div");
    profileContainer.className = "profile-container";
    const imageName = image.split("profile_pics/")[1].split("_profile_pic.jpg")[0];
    const img = document.createElement("img");
    const profileImgLink = document.createElement("a");
    const profileIdLink = document.createElement("a");
    const imgId = imageName.toLowerCase();
    img.id = imgId;
    img.className = "profile-img";
    img.src = `${image}`;
    img.alt = image;
    profileImgLink.href = "profile_pages/" + imgId + ".html";
    profileImgLink.className = "profile-img-link";
    profileImgLink.target = "_blank";
    profileIdLink.href = "profile_pages/" + imgId + ".html";
    profileIdLink.className = "profile-id-link";
    profileIdLink.target = "_blank";
    profileIdLink.textContent = imgId;
    if (availableProfiles.includes("profile_pages/" + imgId + ".html")) {
      profileImgLink.appendChild(img);
      profileContainer.appendChild(profileIdLink);
      profileContainer.appendChild(profileImgLink);
      imageGalleryDiv.appendChild(profileContainer);
    }
  });
});