## 🐳 Deploying with Docker

Easily deploy HackMe with a pre-built Docker image available on Docker Hub. The app relies on PostgreSQL running on port 5432, while the frontend and backend operate on ports 3000 and 3001, respectively.

### Prerequisites

⚠️ Make sure Docker and Docker Compose are installed on your machine.

### Steps

1. **Download and Extract ZIP**
  
    Download the ZIP with docker-compose and init.sql is [here](https://github.com/GuillaumeDorschner/HackMe/releases/download/docker-compose/hackme.zip). After extracting it, navigate to the `hackme` folder and execute the following commands:
    ```bash
    cd hackme
    docker-compose up
    ```

    PS: Sometimes the command may be `docker compose up`without the dash.

2. **Run Docker Compose**
    ```bash
    docker-compose up
    ```

3. **Stopping and Removing Containers**

    To stop and remove all running containers as defined in the `docker-compose.yml` file, execute:
    ```bash
    docker-compose down
    ```

Congratulations, you've successfully deployed HackMe using a Docker image from Docker Hub! Dive into the world of ethical hacking by starting [here](Documentation/hack.md).

---

Embrace the excitement of ethical hacking with HackMe. Sharpen your skills and contribute to a safer digital landscape. Your journey to becoming a master ethical hacker starts now! 🌐✨

Created with ❤️ by [ESILV](https://www.esilv.fr/) | [GitHub](https://github.com/GuillaumeDorschner) | [LinkedIn](https://www.linkedin.com/in/guillaume-dorschner/)
