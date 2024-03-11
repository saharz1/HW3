let visitorsForView = [...visitors];

const renderVisitors = () => {
  const visitorsPlaceholder = document.getElementById("placeholder");
  visitorsPlaceholder.innerHTML = "";

  const visitorCards = visitorsForView.map(getVisitorHTMLCard);
  if (!visitorCards.length) {
    visitorsPlaceholder.appendChild(getEmptyCardsHTMLTemplate());
  } else {
    visitorsPlaceholder.append(...visitorCards);
  }
};

const getVisitorHTMLCard = (visitor) => {
  const template = `
      <div class="card" style="min-height: 360px;" >
        <img class="card-img-top" src="./photos/avatarphoto.jpg" alt="Visitor Photo"/>
        <div class="card-body">
          <p class="card-text">${visitor.name}</p>
          <p class="card-text">${visitor.coins}</p>
        </div>
      </div>`;

  const wrapper = document.createElement("div");
  wrapper.className = "visitor-card";
  wrapper.innerHTML = template;
  wrapper.addEventListener("click", () => handleVisitorClick(visitor));
  return wrapper;
};


const getEmptyCardsHTMLTemplate = () => {
  const templateWrapper = document.createElement("div");
  templateWrapper.className = "empty-result";

  const template = `
    <h2>No Visitor Found</h2>
    <p>We're sorry, but no visitors match your search or filter criteria.</p>
    <button id="clear-filter-btn" class="btn btn-dark">Clear search text</button>
    `;
  templateWrapper.innerHTML = template;
  templateWrapper.querySelector("#clear-filter-btn").addEventListener("click", clearSearchBox);
  return templateWrapper;
};

const clearSearchBox = () => {
  const input = document.getElementById("query-input");
  input.value = "";
  visitorsForView = [...visitors];
  renderVisitors();
};

const getSearchBox = () => {
  const queryInput = document.createElement("input");
  queryInput.id = "query-input";
  queryInput.placeholder = "Search visitor";
  queryInput.className = "form-control";
  queryInput.addEventListener("input", (e) => {
    visitorsForView = visitors.filter((visitor) =>
      visitor.name && visitor.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    renderVisitors();
  });
  return queryInput;
};


document.body.insertAdjacentElement("afterbegin", getSearchBox());
window.addEventListener("load", renderVisitors);
