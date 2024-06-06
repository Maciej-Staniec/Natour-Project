# Natour

Natour is a single home page website developed to learn advanced SCSS and floats. It includes sophisticated animations and responsive design, making it a great example of modern web design techniques. This project was created by following the Udemy course "Advanced CSS and Sass: Flexbox, Grid, Animations and More!" by Jonas Schmedtmann.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Description

Natour is a learning project that covers:

- Semantic HTML and its structure
- Inheritance, cascading, and value processing in CSS
- The visual formatting model (box model and its types, positioning schemes)
- Stacking contexts
- Component-driven design using the BEM technique and the 7-1 pattern
- Responsive design principles
- Creating a simple build process to optimize source files

The project includes graphics provided by Jonas Schmedtmann for portfolio purposes.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/Maciej-Staniec/Natour-Project.git

   ```

2. Navigate into the project directory:
   cd Natour-Project

3. Install dependencies:
   npm install

## Usage

To build the project, use the following commands:

1. To start the development server:

- Install the following VS Code extensions: "Live Sass Compiler," "Live Server," and "Prettier - Code formatter."
- Modify the Live Sass Compiler settings in its JSON configuration file (.json) as shown below:

  ```json
  liveSassCompile.settings.formats": [
   {
     "format": "expanded",
     "extensionName": ".css",
     "savePath": "/src/styles",
     "savePathReplacementPairs": null
   }
  ],
  ```

2. To build the project for production:

- Execute the command in your VS code terminal:
  npm build:all

## Contributing

Contributions are welcome! To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-foo).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature-foo).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Contact

- [Maciej Staniec](https://github.com/Maciej-Staniec/) - GitHub Profile
- [Project Link](https://github.com/Maciej-Staniec/Natour-Project)

## Acknowledgments

- [Jonas Schmedtmann](https://x.com/jonasschmedtman) for the excellent course on [Udemy: Advanced CSS and Sass: Flexbox, Grid, Animations and More!](https://www.udemy.com/course/advanced-css-and-sass)
- The course provided graphics that are used for portfolio purposes.
- Inspiration and code snippets from various open-source projects and articles.
