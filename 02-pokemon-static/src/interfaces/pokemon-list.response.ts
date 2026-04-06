/**
 * This is a Interface definition in Typescript. Basically, it is a "contract"
 * that defines the structure of an object in code. Interfaces are design to
 * defina shape of an HTTP Response; allowing to editor and compiler to know
 * what properties and types to expect when working with the data.
 */


// Main structure of respone from API.
export interface PokemonListResponse {
    count:    number;   // Total number of pokemons available in the API.
    next:     string;   // URL to the next page of results, if there are more pokemons to fetch.
    previous: null;     // URL for previos page. NULL if there is no previous page (e.g., when fetching the first page).
    results:  Result[]; // The array with data, it follows the structure of Result interface.
}

// Structure of each pokemon in the results array.
export interface Result {
    name: string; // The name of the pokemon. We've used in index.astro to display name.
    url:  string; // The URL to fetch more details about the pokemon. We haven't used it yet, but it can be useful for future features (e.g., showing more info about each pokemon).
}
