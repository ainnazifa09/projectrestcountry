// this is an arrow function
const loadCountryAPI = () => {
    // fetch url of rest country from the website
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

// displaying all countries
const displayCountries = countries => {
    const countriesHTML = countries.map(country => getCountry(country));
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');

    // Populate the dropdown with country names
    const dropdown = document.getElementById('nameDropdown');
    countries.forEach(country => {
        const nameOption = document.createElement('a');
        nameOption.textContent = country.name.common;
        nameOption.href = `destination-page.html?country=${encodeURIComponent(country.name.common)}`;
        dropdown.appendChild(nameOption);
    });
}

// get data and set it to html
const getCountry = (country) => {
    console.log(country);
    return `
        <div class="country-div">
            <a href="destination-page.html?country=${encodeURIComponent(country.name.common)}">
                <img src="${country.flags.png}">
            </a>
            <h2>${country.name.common}</h2>
            <hr>
            <h4>Population: ${country.population}</h4>
            <h4>Region: ${country.region}</h4>
            <h4>Capital: ${country.capital}</h4>
        </div>
    `;
    
}

// call the function to get output in console
loadCountryAPI();
