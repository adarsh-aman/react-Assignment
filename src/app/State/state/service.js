export function getStateLists(){
    return fetch("http://localhost:7070/api/states")
    .then (response => {
        return response.json();
    })
}
