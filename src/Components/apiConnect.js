export default class Connect {
    getUsers() {
        return fetch('https://randomuser.me/api/?results=100')
            .then(
                (res) => res.text().then(response => {
                    let data = JSON.parse(response);
                    console.log(data.results)
                    return data.results
                })
            )
            .catch(function (err) {
                console.log('Fetch Error :', err);
            });
    }


}
