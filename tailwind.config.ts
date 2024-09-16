import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem", // Padding default untuk layar kecil
        sm: "2rem", // Padding untuk layar kecil (mobile)
        lg: "4rem", // Padding untuk layar besar (desktop)
        xl: "5rem", // Padding untuk layar sangat besar (monitor)
        "2xl": "6rem", // Padding untuk layar 2XL
      },
      screens: {
        sm: "100%", // Full width untuk layar kecil
        md: "728px", // Width yang pas untuk medium screen
        lg: "1024px", // Width standar untuk layar besar
        xl: "1280px", // Lebih besar lagi
        "2xl": "1400px", // Sama seperti yang kamu sebutkan untuk 2XL
        "3xl": "1600px", // Tambahkan satu ukuran layar ekstra besar
      },
    },
    extend: {
      fontFamily: {
        ptsans: ["PT Sans", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        saikindo: {
          primary: {
            50: "#EBF5FF", // Biru sangat terang
            100: "#D1E9FF", // Biru terang
            200: "#A6CFFF", // Biru yang lebih terang
            300: "#75B3FF", // Biru sedang
            400: "#3995FF", // Biru yang lebih hidup
            500: "#007BFF", // Biru utama
            600: "#006AE6", // Biru sedikit lebih gelap
            700: "#0056B3", // Biru lebih gelap
            800: "#00408A", // Biru sangat gelap
            900: "#002D66", // Biru paling gelap
          },
          secondary: {
            50: "#FFEAE9", // Merah sangat terang
            100: "#FFD1D1", // Merah terang
            200: "#FFA3A3", // Merah yang lebih terang
            300: "#FF7373", // Merah sedang
            400: "#FF4D4D", // Merah lebih mencolok
            500: "#FF4136", // Merah utama
            600: "#E6392F", // Merah sedikit lebih gelap
            700: "#B22C24", // Merah lebih gelap
            800: "#8A211B", // Merah sangat gelap
            900: "#661715", // Merah paling gelap
          },
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
