// SERVICES
function loadServices() {
  const services = [
    { name: "Mariage", price: "100$" },
    { name: "Clip vidéo", price: "200$" },
    { name: "Publicité", price: "150$" }
  ];

  const container = document.getElementById("servicesList");
  container.innerHTML = "";

  services.forEach(s => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${s.name}</h3><p>${s.price}</p>`;
    container.appendChild(div);
  });
}

// PORTFOLIO
const videos = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ"
];

const videoContainer = document.getElementById("videos");

videos.forEach(v => {
  const iframe = document.createElement("iframe");
  iframe.src = v;
  iframe.width = "300";
  iframe.height = "200";
  videoContainer.appendChild(iframe);
});

// FORMATIONS
const courses = [
  { title: "Montage CapCut", price: "Gratuit" },
  { title: "Premiere Pro", price: "20$" }
];

const courseContainer = document.getElementById("courses");

courses.forEach(c => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<h3>${c.title}</h3><p>${c.price}</p>`;
  courseContainer.appendChild(div);
});
