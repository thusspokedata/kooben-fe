# E-Commerce Furniture App for K'óoben (WIP)

This app is a work-in-progress (WIP) for what will become an e-commerce platform for selling furniture for the Argentine store **K'óoben**. It's built with **Next.js** and **TypeScript**, and integrates the following technologies:

- **Clerk** for authentication
- **Mantine** for UI components and styling
- **Axios** for handling HTTP requests
- **TanStack Query** for efficient data fetching and state management
- A custom error handling system for managing API and server errors.

## Screenshots

Here are some preview images from the current development:

### Home Page
![Home1](./public/images/home1.png)
![Home2](./public/images/home2.png)
![Home3](./public/images/home3.png)

### Catalog
![Catalog](./public/images/catalog.png)

## Features

- Built with Mantine for modern UI components and styling
- Authentication via Clerk
- Modern front-end development using Next.js
- Integrated with external APIs using Axios
- State management and data fetching handled by TanStack Query
- A dedicated file for handling errors efficiently throughout the app.

## Development Practices

### Branch Protection

This repository uses GitHub's branch protection rules to safeguard the main branch from accidental deletions and force pushes. The protection is configured using [GitHub Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).

### CI/CD with GitHub Actions

This project implements Continuous Integration and Continuous Deployment using GitHub Actions. 

#### Docker Containerization

The application is automatically containerized using Docker through GitHub Actions:

- **Automated Docker Builds**: Creates and pushes Docker images on every push to main
- **Semantic Versioning**: Uses [Git Semantic Version](https://github.com/marketplace/actions/git-semantic-version?version=v5.4.0) to automatically generate version numbers based on commit messages
  - Major version increments with "major:" prefix in commits
  - Minor version increments with "feat:" prefix in commits
  - Patch version increments with all other commits
- **Multi-tag Strategy**: Pushes both versioned tags and "latest" tag to Docker Hub

## Security

### Code Quality with Amazon CodeGuru

Code quality and security are enhanced with [**Amazon CodeGuru**](https://aws.amazon.com/codeguru/) for automated code reviews and vulnerability detection.

### Secret Scanning with 🐷🔑🐷 TruffleHog

This project uses TruffleHog for detecting and preventing secrets from being committed to the repository. TruffleHog scans the entire git history for secrets and credentials.

You can run TruffleHog locally with these commands:

```bash
# Scan the local repository
trufflehog git file://./kooben-fe

# Scan the remote repository
trufflehog git https://github.com/thusspokedata/kooben-fe
```

### Security Training

The security practices implemented in this project were acquired through knowledge shared by [@gabrielsoltz](https://github.com/gabrielsoltz) during one of the tech meetups organized by [@Pablo-Mdz](https://github.com/Pablo-Mdz).

## Backend

The backend for this application is developed with **NestJS**. You can check out the repository [here](https://github.com/thusspokedata/kooben-be).

## Design Reference

For design details, you can visit the K'óoben design on [Figma](https://www.figma.com/design/5pfsdvCtVxXvwbVdgRdLEB/kooben?node-id=0-1&node-type=canvas&t=KQT7fgUIFiAWpKjl-0).


Stay tuned for further updates!
