function verifyUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 Completed: User credentials validated.");
            resolve({ id: userId, name: "Mansi Patel" });
        }, 1000);
    });
}

function fetchUserPermissions(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Task 2 Completed: Permissions retrieved for ${user.name}.`);
            resolve({ ...user, role: "Administrator", access: ["Read", "Write", "Execute"] });
        }, 1000);
    });
}

function generateSessionToken(profile) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Task 3 Completed: Session token signed for security level: ${profile.role}.`);
            resolve(`JWT_SESSION_TOKEN_TOKEN_SECURE_AUTH_${profile.id}`);
        }, 2000);
    });
}

// Requirement: Call using chained promises
console.log("Beginning chained sequence runtime execution...");
verifyUser(701)
    .then((userProfile) => {
        return fetchUserPermissions(userProfile);
    })
    .then((authorizedProfile) => {
        return generateSessionToken(authorizedProfile);
    })
    .then((finalToken) => {
        console.log(`Final Response Output -> Active Session Token: ${finalToken}`);
    })
    .catch((error) => {
        console.error("An operational pipeline error occurred:", error);
    });