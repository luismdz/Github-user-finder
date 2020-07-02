class UI {
    constructor() {
        this.profile = document.getElementById('profile');
        this.currentYear = document.querySelector('.copyright-year').innerHTML = ` ${new Date().getFullYear()}`;
    }

    // Show profile in UI
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <h3 class="mb-4">${user.name}</h3>
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" alt="user avatar" class="img-fluid mb-2">
                    <a href="${user.html_url}" target="_blank" class="btn btn-dark btn-block mb-4 mt-2">View Profile</a>
                </div>
                
                <div class="col-md-9">
                    <span class="badge badge-primary mb-2">
                        Public Repos: ${user.public_repos}
                    </span>
                    <span class="badge badge-secondary mb-2">
                        Public Gists: ${user.public_gists}
                    </span>
                    <span class="badge badge-success mb-2">
                        Followers: ${user.followers}
                    </span>
                    <span class="badge badge-info mb-2">
                        Following: ${user.following}
                    </span>

                    <ul class="list-group mt-4">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: 
                            <a href="${user.blog}" target="_blank">${user.blog}</a>
                        </li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>

                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `
    }

    // Show user repos
    showRepos(repos) {
        let output = '';

        repos.forEach(repo => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row d-flex justify-content-between px-2">
                        <div>
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>

                        <div>
                            <span class="badge badge-primary">
                                <i class="fas fa-star"></i> Stars: ${repo.stargazers_count}
                            </span>
                            <span class="badge badge-secondary">
                                <i class="far fa-eye"></i> Watchers: ${repo.watchers_count}
                            </span>
                            <span class="badge badge-success">
                                <i class="fas fa-code-branch"></i> Forks: ${repo.forks_count}
                            </span>
                        </div>

                    </div>
                </div>
            `
        });

        document.getElementById('repos').innerHTML = output;
    }

    // Show alert message
    showAlert(msg, className) {
        // Clear any remanaing alerts
        this.clearAlert();
        // alert div
        const alertDiv = document.createElement('div');
        // Add classes
        alertDiv.className = className;
        // Add message
        alertDiv.appendChild(document.createTextNode(msg));

        // Get parent element
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search');

        container.insertBefore(alertDiv, search);

        setTimeout(() => {
            this.clearAlert()
        }, 3000);
    }

    // clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.searchContainer .alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    // Clear profile 
    clearProfile() {
        this.profile.innerHTML = '';
    }
}