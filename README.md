# GALAGRID - Event Rental and Management App

A React Native application with a Django backend for managing event rentals. Users can browse, book, and manage event venues, equipment, and services, with all rentals offered for free.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Research Document](#research-document)
- [Contributing](#contributing)
- [License](#license)

## Overview

This event rental and management app simplifies the process of organizing events by offering users a streamlined platform to rent venues, equipment, and other resources. Built with a React Native frontend and Django backend, it provides both mobile and web functionalities, allowing easy access from any device. The app supports free rentals for users.

## Features

- **User Authentication**: Sign up, login, and manage user sessions.
- **Free Rentals**: Users can browse and rent venues and equipment for free.
- **Event Management**: Organize and manage event schedules and resources.
- **Admin Dashboard**: Admins can manage users, bookings, and rentals.
- **Responsive Design**: Optimized for mobile use with React Native.

## Technologies Used

- **Frontend**: React Native
- **Backend**: Django (Python)
- **Database**: MySQL
- **Styling**: CSS, Bootstrap (for web admin)
- **Version Control**: Git, GitHub

## Installation

To set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/event-rental-management-app.git
   cd event-rental-management-app
   ```

2. **Backend Setup (Django)**:

   - Set up a virtual environment and install dependencies:
     ```bash
     python -m venv env
     source env/bin/activate
     pip install -r requirements.txt
     ```
   - Set up your MySQL database in the `settings.py` file.
   - Run migrations:
     ```bash
     python manage.py migrate
     ```

3. **Frontend Setup (React Native)**:

   - Navigate to the React Native project folder and install dependencies:
     ```bash
     cd frontend
     npm install
     ```

4. **Running the App**:

   - Start the Django server:
     ```bash
     python manage.py runserver
     ```
   - Run the React Native app using the appropriate emulator or device:
     ```bash
     npx react-native run-android  # For Android
     npx react-native run-ios      # For iOS
     ```

5. Open the app on your device/emulator or access the admin panel at `http://localhost:8000/admin`.

## Usage

- **User Access**: Users can sign up, browse available resources, and book event venues and equipment for free.
- **Admin Access**: Admins have full control over the management of resources, bookings, and user accounts.

## Research Document

For detailed information about the project, including research, methodology, and technical design, refer to the research document [here](#). _(Insert link to your research doc)_.

## Contributing

Feel free to open issues or submit pull requests for improvements. Contributions are welcome!

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Let me know if you'd like any further customizations!
