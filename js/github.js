class GitHub {
    constructor() {
        this.client_id = '7ed595dc11046bbeae9c';
        this.client_secret = 'b6367823483b2fdc480bf2eaa1e277de53608c10';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUsers(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile: profile,
            repos: repos
        }
    }

}