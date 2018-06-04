export default class Connect {
  getUsers() {
    return fetch('https://randomuser.me/api/?results=50')
      .then(res => res.text())
      .then(response => {
        let data = JSON.parse(response);
        return data.results;
      })
      .catch(err => console.error('Fetch Error :', err));
  }
}
