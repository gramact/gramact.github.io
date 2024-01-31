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

  const images = "profile_pics/_tejaswini_gowda_official_profile_pic.jpg profile_pics/ahsaassy__profile_pic.jpg profile_pics/aishu___profile_pic.jpg profile_pics/akshitha_ashok___profile_pic.jpg profile_pics/anikhasurendran_profile_pic.jpg profile_pics/anupamaparameswaran96_profile_pic.jpg profile_pics/aparna.das1_profile_pic.jpg profile_pics/aruljothi_arockiaraj_profile_pic.jpg profile_pics/barkhasingh0308_profile_pic.jpg profile_pics/dharshana_ashokan_profile_pic.jpg profile_pics/dishapatani_profile_pic.jpg profile_pics/divya_ganesan_official_profile_pic.jpg profile_pics/divya_uruduga_profile_pic.jpg profile_pics/i__ivana__profile_pic.jpg profile_pics/iamaathmika_profile_pic.jpg profile_pics/iamsamyuktha__profile_pic.jpg profile_pics/iswarya.menon_profile_pic.jpg profile_pics/itisshobanaa_profile_pic.jpg profile_pics/janhvikapoor_profile_pic.jpg profile_pics/kanmani_manoharan_profile_pic.jpg profile_pics/krithi.shetty_official_profile_pic.jpg profile_pics/lakshmipriyaoffl_profile_pic.jpg profile_pics/lavanyaa_official_profile_pic.jpg profile_pics/maanasa.choudhary1_profile_pic.jpg profile_pics/madhuri_mj_profile_pic.jpg profile_pics/mahima_nambiar_profile_pic.jpg profile_pics/meghashetty_officiall_profile_pic.jpg profile_pics/mirnaaofficial_profile_pic.jpg profile_pics/muthazhagi06_profile_pic.jpg profile_pics/nishvika__profile_pic.jpg profile_pics/nivisha_official_profile_pic.jpg profile_pics/norafatehi_profile_pic.jpg profile_pics/pavithraarvind_profile_pic.jpg profile_pics/priya.p.varrier_profile_pic.jpg profile_pics/priyankaa_7_profile_pic.jpg profile_pics/priyankaamohanofficial_profile_pic.jpg profile_pics/radhikamadan_profile_pic.jpg profile_pics/rajputpaayal_profile_pic.jpg profile_pics/ramyanivas_profile_pic.jpg profile_pics/reshmavenkatesh01_profile_pic.jpg profile_pics/roshniharipriyan_profile_pic.jpg profile_pics/sanyamalhotra__profile_pic.jpg profile_pics/shanvisri_profile_pic.jpg profile_pics/sharmielamandre_profile_pic.jpg profile_pics/shreyadhan13_profile_pic.jpg profile_pics/shweta.tiwari_profile_pic.jpg profile_pics/smruthivenkatofficial_profile_pic.jpg profile_pics/sreeleela14_profile_pic.jpg profile_pics/swathi.konde_official_profile_pic.jpg profile_pics/teju_ashwini_profile_pic.jpg profile_pics/the_real_sreenithi_profile_pic.jpg profile_pics/yourseesha_profile_pic.jpg"
  .split(" ");

  images.forEach(image => {
      const profileContainer = document.createElement("div");
      profileContainer.className = "profile-container";
      const imageName = image.split("profile_pics/")[1].split("_profile_pic.jpg")[0];
      const img = document.createElement("img");
      const profileImgLink = document.createElement("a");
      const imgId = imageName.toLowerCase();
      img.id = imgId;
      img.className = "profile-img";
      img.src = `${image}`;
      img.alt = image;
      profileImgLink.href = "profile_pages/" + imgId + ".html";
      profileImgLink.className = "profile-img-link";
      profileImgLink.target = "_blank";
      profileImgLink.textContent = imgId;
      profileImgLink.appendChild(img);
      profileContainer.appendChild(profileImgLink);
      imageGalleryDiv.appendChild(profileContainer);
  });
});