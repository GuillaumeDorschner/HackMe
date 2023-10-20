# HackMe 🛡️
HackME is an interactive web platform designed to offer a safe and legal environment for aspiring ethical hackers to hone their skills.

## 🚀 Getting Started

Begin your journey into ethical hacking by deploying HackMe. You have two easy options:

### Using Docker Composer (Recommended)
Using Docker Compose is the **easiest** way to deploy HackMe. For detailed instructions, see our [Docker Guide](Documentation/docker.md).

### Manual Installation
Alternatively, you can manually set up HackMe by following these steps:

1. Clone the repository
```bash
git clone https://github.com/GuillaumeDorschner/HackMe.git
cd HackMe
```
2. Run `npm install && npm run client-install` to install dependencies
```bash
npm install && npm run client-install
```
3. Run `npm run database:init` to setup the database
```bash
npm run database:init
```
4. Run `npm run dev` to start the development server
```bash
npm run dev
```
4. Navigate to `localhost` in your browser to view the platform
5. Look at the documentation for hacking the platform [here](Documentation/hack.md)

## Developer's Corner 🛠️

- Install [Node.js](https://nodejs.org/en/)
- install [postgres](https://www.postgresql.org/download/)

Feel the rush of ethical hacking with HackMe, while sharpening your skills and contributing to a safer digital world. Your journey towards mastering the art of ethical hacking begins now! 🌐✨

Created with ❤️ by [ESILV](https://www.esilv.fr/) | [GitHub](https://github.com/GuillaumeDorschner) | [LinkedIn](https://www.linkedin.com/in/guillaume-dorschner/)
