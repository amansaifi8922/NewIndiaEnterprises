// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNavMenu = document.querySelector('.mobile-nav-menu');

    if (mobileMenuBtn && mobileNavMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNavMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileNavMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu on link click
        const mobileLinks = mobileNavMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNavMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Modal Logic for Services ---
    const serviceData = {
        pharma: {
            title: "Pharma & Process-Industry Solutions",
            description: "Our pharmaceutical and process-industry solutions are manufactured under stringent quality controls. We provide specialized mixing tanks, sterile storage vessels, custom piping, and high-precision components that meet ISO 9001 and industry-specific purity standards. Our state-of-the-art clean manufacturing ensures every component is built for safety and longevity.",
            images: [
                { heading: "Lockers & Cupboards" },
                { src: "images/multi_utility_cupboard.jpg", title: "Multi Utility Cupboard" },
                { src: "images/ms_powder_coated.jpg", title: "Ms Powder coated Cupboard and Lockers" },
                { src: "images/ss_apron_lockers.jpg", title: "SS Apron Lockers" },
                { src: "images/ss_lockers.jpg", title: "SS Lockers" },
                { heading: "SS Clean room Furniture" },
                { src: "images/cross_over_benches.jpg", title: "Cross Over Benches" },
                { src: "images/ladder.jpg", title: "Ladder" },
                { src: "images/ss_rack.jpg", title: "SS Rack" },
                { src: "images/computer_table.jpg", title: "Computer Table" },
                { src: "images/fix_chair.jpg", title: "Fix Chair" },
                { src: "images/revolving_chair.jpg", title: "Revolving Chair" },
                { src: "images/fix_tool.jpg", title: "Fix Tool" },
                { src: "images/revolving_stool.jpg", title: "Revolving Stool" },
                { src: "images/sink_table.jpg", title: "Sink Table" },
                { src: "images/canteen_table.jpg", title: "Canteen Table" },
                { src: "images/bain_marie.jpg", title: "Bain Marie (Food Serving Counter)" },
                { src: "images/foot_operated_dustbin.jpg", title: "Foot Operated Dustbin" },
                { src: "images/tilting_dustbin.jpg", title: "Tilting Dustbin" },
                { src: "images/pallet.jpg", title: "Pallet" },
                { src: "images/writing_table.jpg", title: "Writing Table" },
                { heading: "Trolley" },
                { src: "images/cylinder_trolley.jpg", title: "Cylinder Trolley" },
                { src: "images/utility_trolley.jpg", title: "Utility Trolley" },
                { src: "images/drum_trolley.jpg", title: "Drum Trolley" },
                { src: "images/platform_trolley.jpg", title: "Platform Trolley" },
                { src: "images/cage_trolley.jpg", title: "Cage Trolley" },
                { src: "images/calf_feeding_trolley.jpg", title: "Calf Feeding Trolley" },
                { src: "images/multi_utility_trolley.jpg", title: "Multi Utility Trolley" },
                { src: "images/dustbin_trolley.jpg", title: "Dustbin Trolley" },
                { heading: "Containers & Storage Tanks" },
                { src: "images/storage_tank.jpg", title: "Storage Tank" },
                { src: "images/chemical_storage_tank.jpg", title: "Chemical Storage Tank" },
                { src: "images/filter_housing.jpg", title: "Filter Housing" },
                { src: "images/ss_container.jpg", title: "SS Container" },
                { heading: "Accessories" },
                { src: "images/ss_mug.jpg", title: "SS Mug" },
                { src: "images/floor_trap.jpg", title: "Floor Trap" },
                { src: "images/square_floor_trap.jpg", title: "Square Floor Trap" },
                { src: "images/ss_scoop.jpg", title: "SS Scoop" },
                { src: "images/weighing_scoop.jpg", title: "Weighing Scoop" },
                { src: "images/ss_dipper.jpg", title: "SS Dipper" },
                { src: "images/spatula.jpg", title: "Spatula" },
                { src: "images/ss_bucket.jpg", title: "SS Bucket" },
                { src: "images/ss_sampler.jpg", title: "SS Sampler" },
                { src: "images/shoe_rack.jpg", title: "Shoe Rack" },
                { src: "images/first_aid_box.jpg", title: "First Aid Box" },
                { src: "images/funnels.jpg", title: "Funnels" },
                { src: "images/oil_can.jpg", title: "Oil Can" },
                { src: "images/key_cabinet.jpg", title: "Key Cabinet" },
                { src: "images/tool_box.jpg", title: "Tool Box" },
                { heading: "Die Punch Cabinet" },
                { src: "images/die_punch_cabinet.jpg", title: "Die Punch Cabinet" },
                { heading: "Equipments" },
                { src: "images/stirrer.jpg", title: "Stirrer" },
                { src: "images/hand_pallet_truck.jpg", title: "Hand Pallet Truck" },
                { src: "images/scissor_lift.jpg", title: "Scissor Lift Table" },
                { src: "images/homogenizer.jpg", title: "Homogenizer" },
                { src: "images/pass_box.jpg", title: "Pass Box" },
                { src: "images/dynamic_pass_box.jpg", title: "Dynamic Pass Box" },
                { src: "images/tablet_deduster.jpg", title: "Tablet Deduster" }
            ]
        },
        rubber: {
            title: "Industrial Rubber Components",
            description: "We manufacture high-quality, customized industrial rubber parts designed for durability in the harshest environments. From heavy-duty o-rings and silicone gaskets to extruded rubber seals, our products ensure leak-proof precision and vibration dampening for heavy machinery across multiple sectors.",
            images: ["images/rubber_detail_1.jpg", "images/rubber_detail_2.jpg"]
        },
        machinery: {
            title: "Machinery, Accessories & Plastic Parts",
            description: "Leveraging advanced CNC machining and injection molding technology, we engineer precision machinery parts, complex accessories, and durable industrial plastic components. Our engineering team ensures exact tolerances, making our parts suitable for modern heavy engineering and automated systems.",
            images: ["images/machinery_detail_1.jpg", "images/machinery_detail_2.jpg"]
        },
        fabrication: {
            title: "Industrial Fabrication",
            description: "Our core strength lies in heavy industrial steel fabrication. We deliver robust, custom metalworks, structural framework, and large-scale assemblies. Equipped with advanced welding, cutting, and bending machinery, our fabrication unit can handle complex architectural and industrial projects to your exact specifications.",
            images: ["images/fabrication_detail_1.jpg", "images/fabrication_detail_2.jpg"]
        },
        hvac: {
            title: "HVAC & Clean Room Systems",
            description: "We design, manufacture, and install state-of-the-art HVAC and clean room systems tailored for pharmaceutical, healthcare, and sensitive manufacturing environments. Our solutions ensure strict compliance with air quality and temperature regulation standards, providing optimal environments for your critical operations.",
            images: []
        }
    };

    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalGallery = document.getElementById('modalGallery');
    const closeBtn = document.querySelector('.close-modal');

    // Open Modal
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function() {
            const serviceId = this.getAttribute('data-service');
            if (serviceData[serviceId] && modal) {
                const data = serviceData[serviceId];
                modalTitle.textContent = data.title;
                modalDesc.textContent = data.description;
                
                // Populate Gallery
                modalGallery.innerHTML = '';
                data.images.forEach(item => {
                    if (item.heading) {
                        const heading = document.createElement('h3');
                        heading.textContent = item.heading;
                        heading.className = 'gallery-category-heading';
                        modalGallery.appendChild(heading);
                        return;
                    }

                    const figure = document.createElement('figure');
                    figure.className = 'gallery-item';
                    
                    const img = document.createElement('img');
                    img.src = typeof item === 'string' ? item : item.src;
                    img.alt = typeof item === 'string' ? data.title : item.title;
                    img.className = 'modal-gallery-img';
                    figure.appendChild(img);
                    
                    if (typeof item === 'object' && item.title) {
                        const figcaption = document.createElement('figcaption');
                        figcaption.textContent = item.title;
                        figcaption.className = 'gallery-caption';
                        figure.appendChild(figcaption);
                    }
                    
                    modalGallery.appendChild(figure);
                });

                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close Modal
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // --- Contact Form Logic (WhatsApp Integration) ---
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('quoteName').value.trim();
            const email = document.getElementById('quoteEmail').value.trim();
            const phone = document.getElementById('quotePhone').value.trim();
            const service = document.getElementById('quoteService').value;
            const details = document.getElementById('quoteDetails').value.trim();
            
            const whatsappNumber = '918512800455';
            
            const message = `*New Quote Request - New India Enterprises*\n\n` +
                            `*Name:* ${name}\n` +
                            `*Email:* ${email}\n` +
                            `*Phone:* ${phone}\n` +
                            `*Service Interest:* ${service}\n\n` +
                            `*Requirements:*\n${details}`;
            
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            window.open(whatsappUrl, '_blank');
        });
    }
});
