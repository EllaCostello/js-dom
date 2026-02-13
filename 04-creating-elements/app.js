"use strict";

window.addEventListener("load", initApp);

// INSTRUCTIONS
//
// Exercise: Create the following DOM structure using only JavaScript (do NOT add any HTML to index.html except the script tag):
//
/* <div id="profile-container">
  <section id="profile-section">
    <h1>Profile</h1>
    <article class="profile-card">
      <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile picture" />
      <h2>John Doe</h2>
      <p>Web developer and coffee enthusiast.</p>
      <ul>
        <li>Location: Copenhagen</li>
        <li>Favorite Language: JavaScript</li>
        <li>Hobby: Cycling</li>
      </ul>
    </article>
  </section>
</div> */
//
// Steps:
// 1. When the page loads, use JavaScript to create the above structure and add it to the <body>.
// 2. Do not add any HTML in index.html.
// 3. Use document.createElement, setAttribute, textContent, appendChild, etc.
// 4. Do NOT add any event listeners or interactivity yet—just build the DOM tree.



function initApp() {
  // Hide instructions when done
  // document.querySelector("#instructions").classList.add("hidden");
  // TODO: Create the above DOM Structure and add it to the <body>
  document.querySelector("#instructions").classList.add("hidden");
  document.querySelector("#toggleBtn").addEventListener('click', createProfileSection, {once: true});
  
}


function createProfileSection() {
  const profileContainer = document.createElement('div');
  profileContainer.id = "profile-container";
  document.body.appendChild(profileContainer);
  
  const profileSection = document.createElement('section');
  profileSection.id = "profile-section";
  profileContainer.appendChild(profileSection);

  const h1 = document.createElement('h1');
  h1.textContent = "Profile";
  profileSection.appendChild(h1);

  const profileCard = document.createElement('article');
  profileCard.className = "profile-card";
  profileSection.appendChild(profileCard);

  const img = document.createElement('img');
  img.src = "https://randomuser.me/api/portraits/men/1.jpg";
  img.alt = "Profile picture";
  profileCard.appendChild(img);

  const h2 = document.createElement('h2');
  h2.textContent = "John Doe";
  profileCard.appendChild(h2);

  const p = document.createElement('p');
  p.textContent = "Web developer and coffee enthusiast.";
  profileCard.appendChild(p);


  const ul = document.createElement('ul');
  profileCard.appendChild(ul);


  const location = document.createElement('li');
  location.textContent = "Location: Copenhagen";
  ul.appendChild(location);

  const language = document.createElement('li');
  language.textContent = "Favorite Language: JavaScript";
  ul.appendChild(language);


  const hobby = document.createElement('li');
  hobby.textContent = "Hobby: Cycling";
  ul.appendChild(hobby);

}