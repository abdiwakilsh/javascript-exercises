async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Error fetching users");
        }

        const users = await response.json();
        console.log(users);
    } catch (error) {
        console.log(error);
    }
}

fetchUsers();