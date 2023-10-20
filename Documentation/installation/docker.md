# 🐳 Deploying with Docker (recommended)

Deploy HackMe effortlessly with a pre-built Docker image from Docker Hub. The app relies on a PostgreSQL database running on port 5432, with the frontend and backend operating on ports 3000 and 3001, respectively.

## Prerequisites

⚠️ Ensure that Docker and Docker Compose are installed on your machine.

## Steps

1. **Download and Extract the ZIP File**
    [Download ZIP](https://github.com/GuillaumeDorschner/HackMe/releases/download/docker-compose/hackme.zip)

1. **Run Docker Compose**  
    Navigate to the extracted `hackme` folder and run:
    ```bash
    cd hackme
    docker-compose up
    ```
    **Note:** The command may also be `docker compose up` without the dash.

2. Navigate to `localhost:3000` in your browser to view the platform

3. Congratulations 🎉, you've successfully deployed HackMe using a Docker image from Docker Hub! Dive into the world of ethical hacking by starting --> [here](/Documentation/hack.md).
    
    </br>

4. Stopping the Docker Containers

    To stop and remove all running containers as defined in the `docker-compose.yml` file, execute:
    ```bash
    docker-compose down
    ```

---

Embrace the excitement of ethical hacking with HackMe. Sharpen your skills and contribute to a safer digital landscape. Your journey to becoming a master ethical hacker starts now! 🌐✨

Created with ❤️ by [ESILV](https://www.esilv.fr/) | [GitHub](https://github.com/GuillaumeDorschner) | [LinkedIn](https://www.linkedin.com/in/guillaume-dorschner/)
