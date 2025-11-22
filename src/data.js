export const STRATEGY_DATA = {
    ikea: [
        { factor: "Price (High=Cheap)", ikea: 10, industry: 4 }, // Very High affordability
        { factor: "Pack/Transport Ease", ikea: 9, industry: 2 }, // Flat-pack vs Bulky
        { factor: "Design Quality", ikea: 8, industry: 5 }, // Democratic Design
        { factor: "Showroom Exp", ikea: 9, industry: 4 }, // Immersive experience
        { factor: "Product Variety", ikea: 9, industry: 8 }, // Huge range
        { factor: "Availability (Immediate)", ikea: 10, industry: 3 }, // Cash & Carry
        { factor: "Staff Service", ikea: 2, industry: 8 }, // Self-service vs Sales staff
        { factor: "Delivery/Assembly", ikea: 2, industry: 9 }, // DIY vs Full Service
    ],
    netflix: [
        { factor: "Price (High=Cheap)", netflix: 7, blockbuster: 5 }, // Subscription vs Rental fees (Netflix price rising but still good value)
        { factor: "Convenience", netflix: 10, blockbuster: 2 }, // Anytime/Anywhere vs Store hours
        { factor: "Selection", netflix: 8, blockbuster: 5 }, // Vast library
        { factor: "Personalization", netflix: 9, blockbuster: 1 }, // Algorithms vs Staff recs
        { factor: "Original Content", netflix: 9, blockbuster: 0 }, // Stranger Things etc.
        { factor: "New Releases", netflix: 6, blockbuster: 9 }, // Blockbuster had them faster (historically)
        { factor: "Staff Service", netflix: 1, blockbuster: 8 }, // Automated vs In-store staff
        { factor: "Physical Stores", netflix: 0, blockbuster: 10 }, // Eliminated
        { factor: "Late Fees", netflix: 0, blockbuster: 10 }, // Eliminated (High score = High fees)
    ]
};

export const BMC_DATA = {
    ikea: {
        keyPartners: [
            "Global Suppliers (1000+)",
            "Franchise Partners",
            "Logistics Providers",
            "TaskRabbit (Assembly)",
            "WWF/UNICEF (Sustainability)"
        ],
        keyActivities: [
            "Product Design (Democratic)",
            "Global Sourcing",
            "Supply Chain Mgmt",
            "Retail Operations"
        ],
        keyResources: [
            "IKEA Brand",
            "Global Supply Chain",
            "Warehouse Stores",
            "Flat-Pack Tech"
        ],
        valuePropositions: [
            "Low Price",
            "Democratic Design",
            "Instant Availability",
            "Sustainability",
            "DIY Assembly"
        ],
        customerRelationships: [
            "Self-Service",
            "IKEA Family (Loyalty)",
            "Community (Småland)"
        ],
        channels: [
            "Destination Stores",
            "Online/App",
            "Catalog (Digital)"
        ],
        customerSegments: [
            "Mass Market",
            "Young Families",
            "Students",
            "Price Conscious"
        ],
        costStructure: [
            "Logistics & Distribution",
            "Raw Materials",
            "Store Operations",
            "Marketing"
        ],
        revenueStreams: [
            "Furniture Sales",
            "Food (Meatballs!)",
            "Franchise Fees",
            "Service Fees"
        ]
    },
    netflix: {
        keyPartners: [
            "Content Studios (Licensing)",
            "AWS (Cloud Infra)",
            "ISPs (Open Connect)",
            "Device Makers (Smart TVs)"
        ],
        keyActivities: [
            "Content Creation (Originals)",
            "Platform Development",
            "Data Analytics",
            "Marketing"
        ],
        keyResources: [
            "Content Library",
            "Recommendation Algo",
            "Global Brand",
            "Tech Talent"
        ],
        valuePropositions: [
            "Unlimited Streaming",
            "On-Demand / No Ads",
            "Original Content",
            "Personalized Exp",
            "Watch Anywhere"
        ],
        customerRelationships: [
            "Automated Self-Service",
            "Personalized Profiles",
            "24/7 Support"
        ],
        channels: [
            "Mobile App",
            "Website",
            "Smart TV Apps",
            "Game Consoles"
        ],
        customerSegments: [
            "Mass Market",
            "Movie Lovers",
            "Binge Watchers",
            "Families (Kids)"
        ],
        costStructure: [
            "Content Production",
            "Licensing Fees",
            "Tech Infrastructure",
            "Marketing"
        ],
        revenueStreams: [
            "Subscription Fees",
            "Ad-Supported Tier"
        ]
    }
};
