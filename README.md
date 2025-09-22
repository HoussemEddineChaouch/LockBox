# Lockbox - Password Generator & Manager

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![HTML5](https://img.shields.io/badge/HTML5-orange)
![CSS3](https://img.shields.io/badge/CSS3-blue)
![LocalStorage](https://img.shields.io/badge/Storage-LocalStorage-green)

A **secure, random password generator and manager** web application built with **JavaScript, HTML, and CSS**. This project allows users to generate strong passwords, save them locally, manage saved passwords, and copy them easily.

---

## Features

- **Random Password Generation**  
  Generates strong passwords using numbers, uppercase and lowercase letters, and special characters.

- **Save Passwords Locally**  
  Save passwords with a label (e.g., Gmail, Phone, Facebook) using browser `localStorage`.

- **Manage Saved Passwords**  
  View saved passwords in a dynamic table with options to delete individual passwords or delete all.

- **Copy to Clipboard**  
  Quickly copy generated or saved passwords with a single click.

- **Print Saved Passwords**  
  Print all saved passwords directly from the application.

- **Responsive and Clean UI**  
  Mobile-friendly and user-friendly interface for easy navigation.

---

## Live

[![Demo Screenshot](link-to-screenshot-or-gif)](https://houssemeddinechaouch.github.io/LockBox/)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/YourUsername/Password-Generator.git
```

2. Open index.html in your browser.
   No backend or server is required – everything runs locally using localStorage.

## Usage

- **Generate a Password**

1. Click the "Generate" button to create a new random password.
2. The generated password appears in the input field.

- **Save a Password**

1. Click "Save".
2. Select the password type (e.g., Gmail, Phone, Facebook).
3. Click "Confirme" to store it in localStorage.

- **Manage Saved Passwords**

1. Click "Manage Passwords" to view all saved passwords.
2. Delete individual passwords using the trash icon.
3. Delete all passwords using the "Delete All" button.

- **Copy Passwords**
  Click the copy icon next to a password to copy it to the clipboard.
- **Print Passwords**
  Click "PrintAll" to print all saved passwords.

## Technologies Used

| Technology   | Purpose                        |
| ------------ | ------------------------------ |
| HTML5        | Structure and layout           |
| CSS3         | Styling and responsive design  |
| JavaScript   | Logic, event handling, storage |
| Font Awesome | Icons for buttons and actions  |
| LocalStorage | Saving passwords locally       |

## File Structure

```bash
/Password-Generator
├── index.html        # Main HTML file
├── style.css         # CSS for styling
├── main.js           # JavaScript logic
└── README.md         # Project documentation
```

## Contributing

Contributions are welcome! You can help by:

- Improving the UI/UX
- Adding encryption for stored passwords
- Implementing a search/filter feature for saved passwords

## Feedback

If you have any feedback, please reach out to me at chaouch.eddinehoussem@gmail.com

## License

MIT License © 2025 — Chaouch Houssem Eddine
