(function() {
    'use strict';

    function initProjectDetails() {
        // 1. Get Project ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('id');
        const container = document.getElementById('project-content-container');

        if (!container) return;

        // 2. Validate ID and Data
        if (!projectId || !projectsData || !projectsData[projectId]) {
            container.innerHTML = `
                <div class="alert alert-danger text-center" role="alert">
                    <h4 class="alert-heading">Project Not Found</h4>
                    <p>The requested project could not be found or the URL is invalid.</p>
                </div>
            `;
            return;
        }

        const project = projectsData[projectId];

        // 3. Generate Media HTML
        let mediaHtml = '';
        if (project.mediaType === 'video') {
            mediaHtml = `
                <video class="pd-video" controls autoplay loop muted playsinline>
                    <source src="${project.mediaSrc}">
                </video>
            `;
        } else if (project.mediaType === 'youtube') {
            mediaHtml = `
                <iframe class="pd-video" src="${project.mediaSrc}" title="${project.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            `;
        }

        // 4. Generate Content HTML
        const html = `
            <div class="row gy-4">
                <!-- Media Column -->
                <div class="col-lg-8" data-aos="fade-right">
                    <div class="pd-media-wrapper">
                        ${mediaHtml}
                    </div>
                </div>

                <!-- Details Column -->
                <div class="col-lg-4 pd-info" data-aos="fade-left">
                    <div class="pd-badge" style="background-color: ${project.badgeColor};">${project.badge}</div>
                    <h2 class="pd-title">
                        <a href="${project.link}" target="_blank" title="Visit Project">${project.title} <i class="bi bi-box-arrow-up-right"></i></a>
                    </h2>
                    <h6 class="pd-subtitle">${project.subtitle}</h6>
                    <p class="pd-date"><i class="bi bi-calendar3"></i> ${project.date}</p>
                    
                    <div class="pd-description">
                        ${project.description}
                    </div>
                </div>
            </div>
        `;

        // 5. Inject into DOM
        container.innerHTML = html;
        
        // 6. Init AOS if loaded dynamically
        if(typeof AOS !== 'undefined') {
            AOS.init();
        }

        // 7. Update Session Storage to ensure back button goes to Projects tab
        try { sessionStorage.setItem('portfolio-active-tab', 'projects'); } catch(e) {}
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initProjectDetails);
    } else {
        initProjectDetails();
    }
})();
