import fetch from 'node-fetch';

const callApi = async () => {
    const response = await fetch('https://api.github.com/users/github');
    const data = await response.json();

    console.log(data);
}

callApi();