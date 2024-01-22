# Voice Nest

Voice Nest is a social media platform that allows users to connect, share media, and engage with each other through various forms of content such as songs, posts, and blogs.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Models](#models)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure user authentication with unique usernames and emails.
- **User Network**: Track the number of followers and following relationships between users.
- **User Media**: Share and engage with different types of media including songs, posts, and blogs.
- **Likes and Comments**: Users can express appreciation by liking and commenting on songs, posts, and blogs.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/voice-nest.git
   ```

2. Install dependencies:

   ```bash
   cd voice-nest
   npm install
   ```

3. Set up your MongoDB database and update the configuration in `config.js`.

4. Start the application:

   ```bash
   npm start
   ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to access Voice Nest.

## Usage

- Register an account and log in to start using Voice Nest.
- Explore and connect with other users.
- Share songs, posts, and blogs.
- Like and comment on content from other users.

## Models

### User Credentials

- `username`: Unique username for the user.
- `email`: Unique email address for the user.
- `password`: Securely hashed password for the user.

### User Network

- `numberOfFollowers`: Count of followers for a user.
- `numberOfFollowing`: Count of users being followed by a user.
- `following`: Array of users being followed by the user.
- `followers`: Array of users who are followers of the user.

### User Media

#### Songs

- `title`: Title of the song.
- `artist`: Artist of the song.
- `likes`: Users who liked the song.
- `comments`: Users who commented on the song.

#### Posts

- `url`: URL of the post.
- `description`: Description of the post.
- `likes`: Users who liked the post.
- `comments`: Users who commented on the post.

#### Blogs

- `title`: Title of the blog.
- `content`: Content of the blog.
- `likes`: Users who liked the blog.
- `comments`: Users who commented on the blog.

## Contributing

Contributions are welcome! Please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
