# EXPO 52 + REDUX 👋

## Installation

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

## What is Redux?

Redux is a pattern and library for managing and updating global application state, where the UI triggers events called "actions" to describe what happened, and separate update logic called "reducers" updates the state in response. 

## When Should I Use Redux?
Redux helps you deal with shared state management, but like any tool, it has tradeoffs. There are more concepts to learn, and more code to write. It also adds some indirection to your code, and asks you to follow certain restrictions. It's a trade-off between short term and long term productivity.

Redux is more useful when:

You have large amounts of application state that are needed in many places in the app
The app state is updated frequently over time
The logic to update that state may be complex
The app has a medium or large-sized codebase, and might be worked on by many people