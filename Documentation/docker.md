## 🐳 Deploying with Docker

Easily deploy HackMe using a pre-built Docker image available on Docker Hub. The app utilizes PostgreSQL on port 5432 and operates on port 3000 for the frontend and port 3001 for the backend.

### Prerequisites

⚠️ Ensure that Docker and Docker Compose are installed on your machine.

### Steps

1. **Create a Project Folder**
   
    Make a folder named `hackme` and navigate into it:
    ```bash
    mkdir hackme
    cd hackme
    ```

2. **Set Up Docker Compose**

    Create a `docker-compose.yml` file with the following content:
    ```yaml
    version: '3.1'

    services:
      app:
        image: guillaumedorschner/hackme:latest
        ports:
          - "3000:3000"
          - "3001:3001"
        depends_on:
          - db
        environment:
          PASSWORD_DATABASE: "hackmepassword"
          HOST_DATABASE: "db"
          PORT_DATABASE: "5432"
          USER_DATABASE: "hackmeuser"
          BIG_DATABASE: "hackmedb"
          DATABASE: "hackmedb"
      db:
        image: postgres:latest
        environment:
          POSTGRES_DB: "hackmedb"
          POSTGRES_USER: "hackmeuser"
          POSTGRES_PASSWORD: "hackmepassword"
        ports:
          - "5432:5432"
        volumes:
          - ./init.sql:/docker-entrypoint-initdb.d/init.sql
        command: ['bash', '-c', 'curl -o /docker-entrypoint-initdb.d/init.sql https://raw.githubusercontent.com/GuillaumeDorschner/HackMe/main/sql/init.sql && postgres']
    ```

3. **Run Docker Compose**
    ```bash
    docker-compose up
    ```

4. **Stopping and Removing Containers**
  
    To halt and remove all running containers as specified in the `docker-compose.yml` file, execute the following command:
    ```bash
    docker-compose down
    ```

You've successfully deployed HackMe using a Docker image from Docker Hub! Now you can dive into ethical hacking.

Start your journey by hacking the platform [here](Documentation/hack.md).

---

Embrace the thrill of ethical hacking with HackMe, sharpen your skills, and contribute to a safer digital landscape. Your path to mastering ethical hacking begins now! 🌐✨

Created with ❤️ by [ESILV](https://www.esilv.fr/) | [GitHub](https://github.com/GuillaumeDorschner) | [LinkedIn](https://www.linkedin.com/in/guillaume-dorschner/)