const correctPassword = "YORI2026";

if (sessionStorage.getItem("siteUnlocked") !== "true") {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="password-screen">
        <form id="passwordForm">
          <h1 class:"passwordOver">Adgangskode</h1>
          <p class:"passwordbrød">Dette er et uddannelses projekt, og kan derfor ikke direkte forbindes med virksomheden "Yori Jomo"</p>
          <input
            type="password"
            id="passwordInput"
            placeholder="Indtast adgangskode"
            required
          >
          <button type="submit">Gå ind</button>
          <p id="passwordError"></p>
        </form>
      </div>
    `,
  );

  document.getElementById("passwordForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const input = document.getElementById("passwordInput").value;

    if (input === correctPassword) {
      sessionStorage.setItem("siteUnlocked", "true");
      document.querySelector(".password-screen").remove();
    } else {
      document.getElementById("passwordError").textContent = "Forkert adgangskode. Prøv igen.";
    }
  });
}
