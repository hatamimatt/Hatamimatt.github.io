// Configuration
const username = "matthewhatami"; // Replace with your GitHub username
const token = "ghp_sZhsosMI3iA3WArEZYCSfYylQqZrix47pnn"; // Your GitHub personal access token

// Fetch contributions data
async function fetchGitHubActivity() {
    const response = await fetch(`https://api.github.com/users/${username}/events`, {
        headers: {
            Authorization: `token ${token}`,
        },
    });

    if (!response.ok) {
        console.error("Failed to fetch GitHub activity:", response.statusText);
        return [];
    }

    const events = await response.json();

    // Process events to get daily contributions
    const contributions = {};
    events.forEach((event) => {
        const date = new Date(event.created_at).toISOString().split("T")[0];
        contributions[date] = (contributions[date] || 0) + 1;
    });

    return contributions;
}

// Render the contributions graph
async function renderGitHubGraph() {
    const contributions = await fetchGitHubActivity();

    const dates = Object.keys(contributions).sort();
    const values = dates.map((date) => contributions[date]);

    const ctx = document.getElementById("githubGraph").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: dates,
            datasets: [
                {
                    label: "Contributions",
                    data: values,
                    backgroundColor: "rgba(75, 192, 192, 0.6)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Date",
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: "Contributions",
                    },
                },
            },
        },
    });
}

// Run the graph rendering
renderGitHubGraph();