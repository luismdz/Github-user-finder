const github = new GitHub();
const ui = new UI();

// Search Input
const searchUser = document.getElementById('searchUser');

// search input event
searchUser.addEventListener('keyup', e => {
    // Get input text
    const userText = e.target.value;

    if (userText !== '') {
        // http get
        github.getUsers(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // Show alert
                    ui.clearProfile();
                    ui.showAlert('User not found', 'alert alert-danger');

                } else {
                    // Show profile
                    ui.showProfile(transformData(data.profile));
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // Clear profile
        ui.clearProfile();
    }
});


// Transform properties of user object to display them on UI
function transformData(user) {
    const transformedProps = {
        name: user.name == null ? user.login : user.name,
        created_at: new Date(user.created_at).toLocaleDateString(),
        company: user.company == null ? 'none' : user.company,
        blog: user.blog == null ? '' : user.blog,
        location: user.location == null ? 'none' : user.location
    }

    return {
        ...user,
        ...transformedProps
    }
}