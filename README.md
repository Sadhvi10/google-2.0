# Google 2.0

This application is a replica of [Google](https://www.google.com/) which is owned by [Alphabet Inc](https://en.wikipedia.org/wiki/Alphabet_Inc.). This clone is built using Javascript frameworks like React, and Next and a CSS utility framework called TailwindCSS. The [Google Custom Search JSON API](https://developers.google.com/custom-search/v1/introduction) allows users to create a search engine tailored to their needs, therefore mimicking Google's search engine. The API is offered by Google for free, and one can obtain an API key by signing into their Google account. A feature called Pagination refers to the process of dividing digital content into separate, discrete pages and often represented with "Next" and "Previous" links in a numbered format. This feature renders two pages in a clone based on a user's request.

🔍 Frameworks & Tools:

- **React**: [https://react.dev/](https://react.dev/)
- **Next.js**: [https://nextjs.org/](https://nextjs.org/)
- **TailwindCSS**: [https://tailwindcss.com/](https://tailwindcss.com/)

## 🌐 Live Demo

Experience the live version of the application [here](https://google-clone-version2.vercel.app/).

## 🌟 Key Features

- **Responsive Web**: Responsive Web Design using React, Next & TailwindCSS.
- **Search Results Display**: Displays relevant results based on the user's search query.
- **Pagination**: It is employed to prevent the loading of an overwhelming amount of data all at once. Instead of displaying potentially thousands of results on a single page, results are broken down into manageable page-sized chunks.

## 🖼️ Preview

![Google Thumbnail](google_thumbnail.png)

## 📚 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  
## 🛠️ Installation

Follow these steps to install and run the project on your local machine:

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: [Install Node.js](https://nodejs.org/)
- **npm (Node Package Manager)**: Included with Node.js

### Clone the Repository

1. Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/Sadhvi10/google-2.0.git

### Start the development server

2. Install npm and start the development server (localhost:3000) using the following command:

   ```bash
   npm i && npm run start

## 🚀 Usage

The usage for creating a Google clone using Google API with pagination is listed below but not limited to:

- **Learning Experience**: A hands-on project to understand search engines, API integrations, and pagination mechanics.
- **Efficient Data Handling**: Pagination allows for loading data in manageable chunks, optimizing speed and user experience.
- **Integration Possibilities**: Incorporate the search functionality into other platforms or services to provide embedded search capabilities.
- **Resource Management**: By loading results in paginated segments, it reduces the strain on both server and client resources.
- **User Engagement**: Keep users on the platform longer by offering multiple pages of results to explore.

### Next.js Authentication

[Next.js](https://nextjs.org/) offers an integrated approach to user authentication in React applications, and it has been leveraged in this Facebook clone for several reasons:

Session Management:
- With Next.js, sessions are managed efficiently. Once a user logs in, their session details are retained securely, ensuring they remain authenticated until they opt to log out or their session naturally expires.
Extensibility with Third-party Providers:
- This clone is structured in a way that it can potentially allow users to sign in using third-party providers such as Google, Facebook, or Twitter, all thanks to the flexibility of Next.js authentication.
Enhanced Security:
- Security is paramount, especially for platforms like Facebook. Therefore, all passwords are hashed and salted; plain text storage is avoided at all costs.

