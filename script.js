const searchInput = document.querySelector('.search-input input');
const autocompleteList = document.querySelector('.autocomplete-list');
const repositoryList = document.querySelector('.repository-list');
let searchTimeout;
let autocompleteListener;

async function searchRepositories(query) {
  if (query.trim() === '') return [];

  const apiUrl = `https://api.github.com/search/repositories?q=${query}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

function updateAutocompleteList(repositories) {
  autocompleteList.innerHTML = '';
  repositories.slice(0, 5).forEach((repo) => {
    const listItem = document.createElement('li');
    listItem.textContent = repo.name;
    listItem.addEventListener('click', () => addRepositoryToList(repo));
    autocompleteList.appendChild(listItem);
  });
}

function addRepositoryToList(repo) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <p>Name: ${repo.name}<br/> Owner: ${repo.owner.login}<br/> Stars: ${repo.stargazers_count}</p>
    <button class="remove-btn"></button>
  `;
  repositoryList.appendChild(listItem);
  searchInput.value = '';

  const removeButton = listItem.querySelector('.remove-btn');
  removeButton.addEventListener('click', () => removeRepository(listItem));
}

function removeRepository(listItem) {
  listItem.remove();
}

searchInput.addEventListener('input', () => {
  clearTimeout(searchTimeout);
  const query = searchInput.value.trim();
  if (query.length > 0) {
    searchTimeout = setTimeout(async () => {
      const repositories = await searchRepositories(query);
      updateAutocompleteList(repositories);
    }, 400);
  } else {
    autocompleteList.innerHTML = '';
  }
});

document.addEventListener('click', (event) => {
  if (!autocompleteList.contains(event.target)) {
    autocompleteList.innerHTML = '';
  }
});