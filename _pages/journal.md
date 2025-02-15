---
layout: archive
title: "Learning Journal"
permalink: /journal/
author_profile: true
redirect_from:
- /journal
---

**# My Learning Journey**
<!-- Timeline Container -->
<div id="timeline" style="width: 100%; height: 500px;"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vis/4.21.0/vis.min.js"></script>
<!-- Include Vis.js Library with Integrity and Crossorigin attributes -->
<script 
    src="https://cdnjs.cloudflare.com/ajax/libs/vis-timeline/7.4.6/vis-timeline-graph2d.min.js" 
    crossorigin="anonymous">
</script>
<link 
    rel="stylesheet" 
    href="https://cdnjs.cloudflare.com/ajax/libs/vis-timeline/7.4.6/vis-timeline-graph2d.min.css" 
    crossorigin="anonymous"
/>

<script>
document.addEventListener('DOMContentLoaded', function() {
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

    // Timeline options with zoom disabled and horizontal scroll enabled
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

    // Create timeline
    var container = document.getElementById("timeline");
    try {
        var timeline = new vis.Timeline(container, items, groups, options);
    } catch (err) {
        console.error("Timeline creation error:", err);
        container.innerHTML = "Error loading timeline. Please check console for details.";
    }
});
</script>