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

  const images = "profile_pics/_tejaswini_gowda_official_profile_pic.jpg profile_pics/aditi_budhathoki_profile_pic.jpg profile_pics/ahsaassy__profile_pic.jpg profile_pics/aishu___profile_pic.jpg profile_pics/akshitha_ashok___profile_pic.jpg profile_pics/anahita_bhooshan_profile_pic.jpg profile_pics/angira_profile_pic.jpg profile_pics/anikhasurendran_profile_pic.jpg profile_pics/anuemmanuel_profile_pic.jpg profile_pics/anupamaparameswaran96_profile_pic.jpg profile_pics/aparna.das1_profile_pic.jpg profile_pics/aruljothi_arockiaraj_profile_pic.jpg profile_pics/ashika_rangnath_profile_pic.jpg profile_pics/athulyaofficial_profile_pic.jpg profile_pics/avantikamishra_profile_pic.jpg profile_pics/avneetkaur_13_profile_pic.jpg profile_pics/barkhasingh0308_profile_pic.jpg profile_pics/battatawada_profile_pic.jpg profile_pics/dakshanagarkar_profile_pic.jpg profile_pics/dharshana_ashokan_profile_pic.jpg profile_pics/dibyasha_profile_pic.jpg profile_pics/dishapatani_profile_pic.jpg profile_pics/divya_ganesan_official_profile_pic.jpg profile_pics/divya_uruduga_profile_pic.jpg profile_pics/elliavrram_profile_pic.jpg profile_pics/gayatribhardwaj___profile_pic.jpg profile_pics/gourigkofficial_profile_pic.jpg profile_pics/gulati06_profile_pic.jpg profile_pics/i__ivana__profile_pic.jpg profile_pics/iaditipandit_profile_pic.jpg profile_pics/iamaathmika_profile_pic.jpg profile_pics/iamnehashetty_profile_pic.jpg profile_pics/iamsamyuktha__profile_pic.jpg profile_pics/iamsandeepadhar_profile_pic.jpg profile_pics/iridhidogra_profile_pic.jpg profile_pics/iswarya.menon_profile_pic.jpg profile_pics/it_is_madhuri_profile_pic.jpg profile_pics/itisshobanaa_profile_pic.jpg profile_pics/janhvikapoor_profile_pic.jpg profile_pics/justjanvi_profile_pic.jpg profile_pics/kaaashvi_profile_pic.jpg profile_pics/kalyanipriyadarshan_profile_pic.jpg profile_pics/kanmani_manoharan_profile_pic.jpg profile_pics/kashmiraofficial_profile_pic.jpg profile_pics/krithi.shetty_official_profile_pic.jpg profile_pics/kritisanon_profile_pic.jpg profile_pics/lakshmipriyaoffl_profile_pic.jpg profile_pics/lavanyaa_official_profile_pic.jpg profile_pics/maanasa.choudhary1_profile_pic.jpg profile_pics/madhuri_mj_profile_pic.jpg profile_pics/mahima_nambiar_profile_pic.jpg profile_pics/mahirasharma_profile_pic.jpg profile_pics/malvikasharmaofficial_profile_pic.jpg profile_pics/manushi_chhillar_profile_pic.jpg profile_pics/medhashankr_profile_pic.jpg profile_pics/meenakshichaudhary006_profile_pic.jpg profile_pics/meghashetty_officiall_profile_pic.jpg profile_pics/mirnaaofficial_profile_pic.jpg profile_pics/muthazhagi06_profile_pic.jpg profile_pics/nabhanatesh_profile_pic.jpg profile_pics/nargisfakhri_profile_pic.jpg profile_pics/nehasharmaofficial_profile_pic.jpg profile_pics/nikifying_profile_pic.jpg profile_pics/nishvika__profile_pic.jpg profile_pics/nivisha_official_profile_pic.jpg profile_pics/norafatehi_profile_pic.jpg profile_pics/officialvidhiyadav_profile_pic.jpg profile_pics/pavithraarvind_profile_pic.jpg profile_pics/pavithralakshmioffl_profile_pic.jpg profile_pics/priya.p.varrier_profile_pic.jpg profile_pics/priyankaa_7_profile_pic.jpg profile_pics/priyankaamohanofficial_profile_pic.jpg profile_pics/pyaarinari_profile_pic.jpg profile_pics/radhikamadan_profile_pic.jpg profile_pics/rajputpaayal_profile_pic.jpg profile_pics/ramyanivas_profile_pic.jpg profile_pics/rashmika_mandanna_profile_pic.jpg profile_pics/realyukti_profile_pic.jpg profile_pics/reshmavenkatesh01_profile_pic.jpg profile_pics/riddhikumar_profile_pic.jpg profile_pics/roshniharipriyan_profile_pic.jpg profile_pics/rukshardhillon12_profile_pic.jpg profile_pics/ruma_sharmaa_profile_pic.jpg profile_pics/saipallavi.senthamarai_profile_pic.jpg profile_pics/sanjanasanghi96_profile_pic.jpg profile_pics/sanyamalhotra__profile_pic.jpg profile_pics/saraalikhan95_profile_pic.jpg profile_pics/shanvisri_profile_pic.jpg profile_pics/sharmielamandre_profile_pic.jpg profile_pics/shreyadhan13_profile_pic.jpg profile_pics/shweta.tiwari_profile_pic.jpg profile_pics/siddhi_idnani_profile_pic.jpg profile_pics/smruthivenkatofficial_profile_pic.jpg profile_pics/sobhitad_profile_pic.jpg profile_pics/sonambajwa_profile_pic.jpg profile_pics/sreeleela14_profile_pic.jpg profile_pics/sreethu_krishnan_profile_pic.jpg profile_pics/srishtyrode24_profile_pic.jpg profile_pics/surveenchawla_profile_pic.jpg profile_pics/swathi.konde_official_profile_pic.jpg profile_pics/sweety_mishra_19_24_profile_pic.jpg profile_pics/talwarisha_profile_pic.jpg profile_pics/tanyamaniktala_profile_pic.jpg profile_pics/teesuperfly_profile_pic.jpg profile_pics/teju_ashwini_profile_pic.jpg profile_pics/the_real_sreenithi_profile_pic.jpg profile_pics/tripti_dimri_profile_pic.jpg profile_pics/varshabollamma_profile_pic.jpg profile_pics/yourseesha_profile_pic.jpg profile_pics/yuktiikapoor_profile_pic.jpg"
  .split(" ");
  const availableProfiles = "profile_pages/anupamaparameswaran96.html profile_pages/aruljothi_arockiaraj.html profile_pages/divya_ganesan_official.html profile_pages/gayatribhardwaj__.html profile_pages/itisshobanaa.html profile_pages/janhvikapoor.html profile_pages/kanmani_manoharan.html profile_pages/norafatehi.html profile_pages/pavithraarvind.html profile_pages/ruma_sharmaa.html profile_pages/sanjanasanghi96.html profile_pages/sanyamalhotra_.html profile_pages/saraalikhan95.html profile_pages/shreyadhan13.html profile_pages/smruthivenkatofficial.html profile_pages/sreethu_krishnan.html"
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