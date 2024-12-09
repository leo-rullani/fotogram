document.addEventListener("DOMContentLoaded", () => {
  // Wählt alle Bilder aus den angegebenen CSS-Klassen aus
  const images = document.querySelectorAll(
    ".row1_pic, .row2_pic, .row3_pic, .row4_pic"
  );

  // Holt die Überlagerung des Dialogs (schwarzer Hintergrund)
  const dialogOverlay = document.querySelector(".dialog-overlay");

  // Holt das Bild im Dialog
  const dialogImage = document.querySelector(".dialog-image");

  // Holt den Titel im Dialog
  const dialogTitle = document.querySelector(".dialog-title");

  // Holt das Datum im Dialog
  const dialogDate = document.querySelector(".dialog-date");

  // Holt die Rolle (Jobbeschreibung) im Dialog
  const dialogRole = document.querySelector(".dialog-role");

  // Holt den Schließen-Button im Dialog
  const closeButton = document.querySelector(".close-button");

  // Holt den Button für das vorherige Bild
  const prevButton = document.querySelector(".prev-button");

  // Holt den Button für das nächste Bild
  const nextButton = document.querySelector(".next-button");

  // Holt den Zähler, der die aktuelle Bildposition anzeigt (z. B. 1/20)
  const imageCounter = document.querySelector(".image-counter");

  // Speichert den Index des aktuell angezeigten Bildes
  let currentIndex = 0;

  // Array mit Bilddaten, einschließlich Titel, Datum und Rolle für jedes Bild
  const imageData = [
    {
      title: "Challenge League",
      date: "2021-03 - current",
      role: "TV Graphics Coordinator",
    },
    {
      title: "Bachelor Thesis",
      date: "2023-02 - 2023-08",
      role: "Student Business Economics Major Sportmanagement",
    },
    {
      title: "Super League",
      date: "2021-03 current",
      role: "TV Graphics Coordinator",
    },
    {
      title: "FIFA Youth League",
      date: "2023-05",
      role: "TV Graphics Coordinator",
    },
    {
      title: "Arosa Snow Football",
      date: "2024-01",
      role: "TV Graphics Coordinator",
    },
    {
      title: "UEFA Youth League",
      date: "2024-04",
      role: "TV Graphics Coordinator",
    },
    {
      title: "UBS Kids Festival",
      date: "2022",
      role: "Event Manager Sportsmarketing",
    },
    {
      title: "International Event",
      date: "2024-03 - current",
      role: "TV Graphics Coordinator",
    },
    {
      title: "Radsporttage Gippingen",
      date: "2024-06",
      role: "TV Graphics Coordinator",
    },
    {
      title: "CCB Europe Top 16 Cup Montreux",
      date: "2022-02",
      role: "TV Graphics Coordinator",
    },
    {
      title: "Champions Hockey League",
      date: "2024-09",
      role: "TV Graphics Coordinator",
    },
    {
      title: "Season Opening CHL",
      date: "2024-09",
      role: "TV Graphics Coordinator",
    },
    {
      title: "Fritschi Umzug",
      date: "2024-02",
      role: "TV Graphics Coordinator",
    },
    { title: "Monstercorso", date: "2024-02", role: "TV Graphics Coordinator" },
    {
      title: "Goldentracks Awards",
      date: "2021-10",
      role: "TV Graphics Coordinator",
    },
    { title: "LVW", date: "2024-06", role: "Graphic Operator" },
    {
      title: "UBS Kids Cup",
      date: "2022",
      role: "Event Manager Sportsmarketing",
    },
    {
      title: "Weltklasse Zürich",
      date: "2022",
      role: "Event Manager Sportsmarketing",
    },
    {
      title: "NEP Workstation",
      date: "2021-03 current",
      role: "TV Graphics Coordinator",
    },
    {
      title: "SFL Workstation",
      date: "2019-09 - 2023-01",
      role: "Speaker Supervisor",
    },
  ];

  // Funktion zum Aktualisieren des Dialoginhalts basierend auf dem aktuellen Bildindex
  function updateDialog(index) {
    const data = imageData[index];
    dialogImage.src = images[index].src;
    dialogImage.style.width = "auto"; // Passt die Breite automatisch an
    dialogImage.style.height = "auto"; // Passt die Höhe automatisch an
    dialogTitle.textContent = data.title;
    dialogDate.textContent = data.date;
    dialogRole.textContent = data.role;
    imageCounter.textContent = `${index + 1}/${images.length}`;
  }

  // Öffnet den Dialog und zeigt das ausgewählte Bild
  function openDialog(index) {
    currentIndex = index; // Speichert den aktuellen Index
    updateDialog(currentIndex); // Aktualisiert den Dialoginhalt
    dialogOverlay.classList.add("active"); // Zeigt die Dialogüberlagerung an
  }

  // Schließt den Dialog
  function closeDialog() {
    dialogOverlay.classList.remove("active"); // Versteckt die Dialogüberlagerung
  }

  // Zeigt das nächste Bild im Dialog
  function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Erhöht den Index und geht bei Ende zurück zu 0
    updateDialog(currentIndex); // Aktualisiert den Dialoginhalt
  }

  // Zeigt das vorherige Bild im Dialog
  function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Reduziert den Index und springt bei 0 zurück ans Ende
    updateDialog(currentIndex); // Aktualisiert den Dialoginhalt
  }

  // Fügt Klick-Event-Listener zu jedem Bild hinzu, um den Dialog zu öffnen
  images.forEach((image, index) => {
    image.addEventListener("click", () => openDialog(index)); // Öffnet den Dialog für das angeklickte Bild
  });

  // Fügt ein Klick-Event zum Schließen-Button hinzu
  closeButton.addEventListener("click", closeDialog);

  // Schließt den Dialog, wenn außerhalb des Dialogs geklickt wird
  dialogOverlay.addEventListener("click", (e) => {
    if (e.target === dialogOverlay) closeDialog(); // Schließt nur, wenn auf die Überlagerung geklickt wird
  });

  // Fügt ein Klick-Event zum vorherigen Button hinzu
  prevButton.addEventListener("click", showPrevImage);

  // Fügt ein Klick-Event zum nächsten Button hinzu
  nextButton.addEventListener("click", showNextImage);
});
