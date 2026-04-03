tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#333333", // Default from Home Page, overriden in others if needed, but aiming for consistency
                "education-primary": "#1173d4", // From Education page
                "offerings-primary": "#6b7280", // From Offerings page
                "background-light": "#FFFFFF",
                "background-dark": "#121212",
            },
            fontFamily: {
                display: ["Inter", "sans-serif"],
                body: ["Public Sans", "sans-serif"], // Education & Offerings use Public Sans
            },
            borderRadius: {
                DEFAULT: "4px",
                "lg": "0.5rem",
                "xl": "0.75rem",
            },
        },
    },
};
