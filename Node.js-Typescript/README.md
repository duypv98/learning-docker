# Learning Docker: Node.js with Typescript project

## Using volume

If using `docker run` command (CLI), current directory is different between terminals:

- **Command prompt (cmd.exe):** `%cd%`
- **Git Bash (MinGW):** $(pwd)

If using `docker compose`, see `docker-compose.yml` file for more details.

## Using volume on Windows

With Hyper-V, `/var/lib/docker` usally mounted in `C:\\Users\<user>\Documents\Hyper-V\Virtual hasd disks`.

With WSL2, `/var/lib/docker` mounted in `\\wsl$\docker-desktop-data\data\docker\`
