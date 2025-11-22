# Strategic Vision: Strategy & Business Model Canvas

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![CI](https://github.com/yourusername/blue-ocean-visualizer/actions/workflows/ci.yml/badge.svg)

This project is a dynamic visualization tool for **Blue Ocean Strategy** and **Business Model Canvas** concepts, featuring interactive examples for **IKEA** and **Netflix**.


## Features

- **Strategy Canvas**: Interactive line chart visualizing value curves (Value Innovation).
- **Business Model Canvas**: Dynamic grid layout showing the 9 building blocks.
- **Interactive Dashboard**: Toggle between companies (IKEA vs Netflix) and views (Strategy vs BMC).
- **Premium Design**: Dark mode, glassmorphism, and smooth animations using `framer-motion`.

## Tech Stack

- **React** (Vite)
- **Recharts** (Data Visualization)
- **Framer Motion** (Animations)
- **Lucide React** (Icons)
- **CSS Modules / Grid** (Styling)

## Getting Started

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Run the development server:
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:5173](http://localhost:5173) in your browser.

## Concepts Covered

- **Strategy Canvas**: Visualizes how a company differentiates itself from competitors (e.g., IKEA's low price & high design vs. traditional furniture stores).
- **Business Model Canvas**: detailed view of how the company creates, delivers, and captures value (e.g., Netflix's subscription model & content library).

## Docker Support

You can containerize and run this application using Docker.

1.  **Build the Docker Image**:
    ```bash
    docker build -t smp-app .
    ```

2.  **Run the Container**:
    ```bash
    docker run -d -p 8080:80 smp-app
    ```

3.  Open [http://localhost:8080](http://localhost:8080) in your browser.

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
