---
layout: archive
title: "Learning Journal"
permalink: /journal/
author_profile: true
redirect_from:
- /journal
---
<script>
window.addEventListener("load", function() {
    console.log("✅ Page fully loaded, initializing timeline...");

    // Check if the container exists
    var container = document.getElementById("timeline");
    if (!container) {
        console.error("❌ Error: Timeline container not found!");
        return;
    }

    console.log("✅ Timeline container found:", container);

    // Define groups (categories of learning)
    var groups = new vis.DataSet([
        { id: 1, content: "Courses", value: 1 },
        { id: 2, content: "Research", value: 2 },
        { id: 3, content: "Achievements", value: 3 }
    ]);

    // Define timeline events
    var items = new vis.DataSet([
        { id: 1, group: 1, content: "Bayesian Networks Course", start: "2024-01" },
        { id: 2, group: 1, content: "ML & GIS Course", start: "2024-07" },
        { id: 3, group: 2, content: "Started Flood Research", start: "2024-06" },
        { id: 4, group: 2, content: "Reservoir Optimization Study", start: "2025-03" },
        { id: 5, group: 3, content: "Won Data Challenge", start: "2025-01" },
        { id: 6, group: 3, content: "Presented at GIS Day", start: "2024-11-20" }
    ]);

    // Timeline options
    var options = {
        groupOrder: function (a, b) {
            return a.value - b.value;
        },
        stack: false,
        showCurrentTime: true,
        zoomable: false,
        horizontalScroll: true,
        moveable: true,
        wheel: {
            zoomSpeed: 0,
            deltaSpeed: 1
        },
        height: "500px",
        margin: { item: 10 },
        start: "2023-01-01",
        end: "2026-12-31"
    };

    try {
        var timeline = new vis.Timeline(container, items, options);
        timeline.setGroups(groups);
        console.log("✅ Timeline initialized successfully!");
    } catch (error) {
        console.error("❌ Timeline creation error:", error);
        container.innerHTML = "Error loading timeline.";
    }
});
</script>