const gallery = {
  covers: {
    "Asha Banks": ["trebuchet ms", 17, "2025-12-01"],
    "Isabela Merced": ["gil-sans", 17, "2025-09-01"],
    "Aja Naomi King": ["Impact, Chicago", 8, "2025-07-01"],
    "Emma Appleton": ["gil-sans", 14, "2024-12-01"],
    "Lashana Lynch": ["Andale Mono", 6, "2024-10-01"],
    "Demi Singleton": ["gil-sans", 30, "2024-02-01"],
  },
  "CONTENTs man": {
    "Noah Schnapp": ["Helvetica", 9, "2025-12-01"],
    "Corey Mylchreest": ["gil-sans", 8, "2025-08-01"],
    "Jason Isaacs": ["Impact, Chicago", 12, "2025-03-01"],
    "Alessandro Nivola": ["avenir-reg italic", 9, "2024-12-01"],
    "Daniel Zovatto": ["didot", 6, "2024-10-01"],
    "Brandon Sklenar": ["raleway-italic", 6, "2024-08-01"],
    "Justin H. Min": ["gil-sans", 16, "2024-05-01"],
    "Chance Perdomo": ["gil-sans", 14, "2023-12-01"],
    "Phil Dunster": ["gil-sans", 15, "2023-04-01"],
  },
  features: {
    "Zoe Cipres": ["Impact, Chicago", 7, "2025-02-24"],
    "Ayden Mayeri": ["asenine italic", 12, "2024-08-01"],
    "Julian Kostov": ["gil-sans-light italic", 7, "2025-04-01"],
    "Desi Lydic": ["gil-sans", 7, "2023-12-31"],
    "Richa Moorjani": ["gil-sans", 6, "2023-12-01"],
    "Tyler Alvarez": ["genghis-khan", 14, "2022-11-18"],
    "Christine Ko": ["montserrat", 17, "2022-10-01"],
    "Julia Butters": ["Symbol", 17, "2022-08-01"],
    "Camila Perez": ["Belleza", 24, "2021-12-01"],
    "Daniel Henney": ["Impact, Chicago", 10, "2022-03-14"],
    "Jake Lacy": ["EB Garamond", 12, "2021-07-01"],
    "Mason Gooding": ["genghis-khan", 17, "2020-07-01"],
    "May Calamawy": ["Petit Formal Script italic", 8, "2020-06-01"],
    Herizen: ["Abril Fatface", 10, "2020-04-01"],
    "Laysla De Oliveira": ["Abril Fatface", 15, "2018-08-01"],
  },
  beauty: {
    "Grace Van Patten": ["Archivo Black", 15, "2021-10-01"],
    "Hailey Kilgore": ["Arial Black", 14, "2021-09-01"],
    "Madelyn Cline": ["EB Garamond", 18, "2021-08-01"],
  },
};

for (const section in gallery) {
  gallery[section] = Object.fromEntries(
    Object.entries(gallery[section]).sort(([, a], [, b]) =>
      b[2].localeCompare(a[2])
    )
  );
}

const basicLink = "https://shoneal.github.io/contentmode/images/";
const logo = "https://shoneal.github.io/contentmode/images/logo.png";
const specialLogo =
  "https://shoneal.github.io/contentmode/images/special-logo.jpg";

document.addEventListener("DOMContentLoaded", () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }
}); // Смена темы

const navigation = document.querySelector(".navigation");
const navList = navigation.querySelector(".navigation_list");
if (navList) {
  const fragment = document.createDocumentFragment();
  const keys = Object.keys(gallery);

  for (let i = 0; i < keys.length; i++) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "navigation_button";
    button.textContent = keys[i];
    button.dataset.section = keys[i];
    li.appendChild(button);
    fragment.appendChild(li);
  }

  navList.appendChild(fragment);
} // Добавление кнопок в навигацию

const recentBlock = document.querySelector(".recent");
const recentTemplate = document.getElementById("recent-template");
const formatName = (name) =>
  name.replace(/[^a-zA-Z\s]/g, "").replace(/\s+/g, "_");
const isSpecialSection = (section) => section === "CONTENTs man"; // Специальная секция
const buildImageCover = (sectionName, itemName) => {
  const path = isSpecialSection(sectionName)
    ? sectionName.split(" ")[1]
    : sectionName;

  return {
    src: `${basicLink}${path}/covers/768/${formatName(itemName)}.jpg`,
    alt: `${itemName} Cover`,
  };
}; // Формирование изображения Cover/обложки
for (const [sectionName, items] of Object.entries(gallery)) {
  const clone = recentTemplate.content.cloneNode(true);
  const button = clone.querySelector(".section_button");
  const img = button.querySelector("img");
  const list = clone.querySelector(".section_list");

  button.dataset.section = sectionName;
  if (isSpecialSection(sectionName)) {
    img.classList.replace("logo", "special_logo");
    img.src = specialLogo;
    img.alt = "Special Logo";
  } else {
    const text = document.createTextNode(sectionName);
    button.appendChild(text);
  }

  for (const [name] of Object.entries(items).slice(0, 3)) {
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.classList = "cover_link";
    div.dataset.name = name;

    const { src, alt } = buildImageCover(sectionName, name);
    const itemImg = Object.assign(document.createElement("img"), { src, alt });

    div.appendChild(itemImg);
    li.appendChild(div);
    list.appendChild(li);
  }

  recentBlock.appendChild(clone);
} // Вставляем секции в HTML

for (const img of document.querySelectorAll("img.logo")) {
  img.src = logo;
  img.alt = "Logo";
} // Добавление всем одного логотипа

const headerButton = document.querySelector(".header_button");
const sectionFull = document.querySelector(".section_full");
const sectionFullTitle = document.querySelector(".section_full_title");
const sectionFullList = document.querySelector(".section_full_list");
document.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-section]");
  if (!btn || btn === headerButton) return;

  e.preventDefault();

  const sectionName = btn.dataset.section;
  navigation.style.display = recentBlock.style.display = "none";
  sectionFull.style.display = "block";
  headerButton.classList.replace("button-is_active", "button-is_not_active");

  if (sectionName === "covers")
    sectionFullList.classList.add("full_list_covers");

  if (isSpecialSection(sectionName)) {
    sectionFullTitle.appendChild(
      Object.assign(document.createElement("img"), {
        src: specialLogo,
        alt: "Special Logo",
        className: "section_full_logo",
      })
    );
  } else {
    sectionFullTitle.appendChild(
      Object.assign(document.createElement("h2"), {
        textContent: sectionName,
      })
    );
  }

  const items = gallery[sectionName];
  if (items) {
    for (const [name] of Object.entries(items)) {
      const li = document.createElement("li");
      const div = document.createElement("div");
      div.classList = "cover_link";
      div.dataset.name = name;

      const { src, alt } = buildImageCover(sectionName, name);
      const img = Object.assign(document.createElement("img"), { src, alt });

      div.appendChild(img);
      li.appendChild(div);
      sectionFullList.appendChild(li);
    }
  }
}); // Обработка клика по кнопкам навигации
headerButton.addEventListener("click", (e) => {
  if (!headerButton.classList.contains("button-is_not_active")) return;

  e.preventDefault();

  navigation.style.display = recentBlock.style.display = "block";
  sectionFull.style.display = "none";

  headerButton.classList.replace("button-is_not_active", "button-is_active");
  sectionFullTitle.innerHTML = "";
  sectionFullList.innerHTML = "";
  sectionFullList.className = "section_full_list";
}); // Обработка клика по главной кнопке

const setCoverHeights = () => {
  if (window.innerWidth >= 768) {
    document
      .querySelectorAll(".cover_link")
      .forEach((el) => (el.style.height = ""));
    return;
  }

  const minHeight = Math.min(
    ...Array.from(document.querySelectorAll(".cover_link img"))
      .filter((img) => img.complete && img.naturalHeight)
      .map((img) => (img.naturalHeight * img.clientWidth) / img.naturalWidth)
  );

  document
    .querySelectorAll(".cover_link")
    .forEach((el) => (el.style.height = `${minHeight}px`));
}; // Уставнока изображениям одной высоты в вертикальном расположении
document.addEventListener("DOMContentLoaded", setCoverHeights);
window.addEventListener("resize", setCoverHeights);
