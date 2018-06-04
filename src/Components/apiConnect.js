export default class Connect {
    getUsers() {
        return fetch('https://randomuser.me/api/?results=50')
            .then(
                (res) => res.text().then(response => {
                    let data = JSON.parse(response);
                    return data.results
                })
            )
            .catch(function (err) {
                console.log('Fetch Error :', err);
            });
    }


}
