class Connect {
    getUsers() {
        return fetch('https://randomuser.me/api/?results=100')
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' + response.status);
                        return response;
                    }
                    response.json().then(function (data) {
                        console.log(data);
                        return data;
                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :', err);
            });

    }
}
export default Connect