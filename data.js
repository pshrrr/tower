fetch("https://api.spacexdata.com/v3/launches/latest")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    createLaunchDetails(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
function createLaunchDetails(data) {
  const heading = document.querySelector(".missionName");
  heading.innerHTML = data.mission_name;
  const description = document.querySelector(".missionDetails");
  description.innerHTML = data.details;
  const image = document.querySelector(".image");
  image.style.backgroundImage = `url(${data.links.mission_patch_small})`;
  const dato = document.querySelector(".missionDate");
  dato.innerHTML = data.launch_date_local;
  const launchSite = document.querySelector(".site");
  launchSite.innerHTML = data.launch_site.site_name_long;
}
