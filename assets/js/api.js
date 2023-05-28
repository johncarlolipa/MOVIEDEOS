'use strict';

const api_key = '2ba399504ff6a4c8c86c6f15d819e46d';
const imageBaseURL = "https://image.tmdb.org/t/p/";


const fetchDataFromServer = function (url, callback, optionalParam) {
    fetch(url).then(response => response.json()).then(data => callback(data, optionalParam));
}

export { imageBaseURL, api_key, fetchDataFromServer};