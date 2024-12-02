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
The app has a medium or large-sized codebase, and might be worked on by many people.

## Redux Libraries and Tools

**Redux Toolkit**  - It contains packages and functions that we think are essential for building a Redux app. 

**React-Redux** - official package that lets your React components interact with a Redux store by reading pieces of state and dispatching actions to update the store.

**Redux DevTools Extension** - It is a browser extension that lets you inspect every action and state change in your app, along with a history of actions.

##### ⚠️ IMPORTANT - Redux DevTolls in Expo

[Redux DevTools for Expo (or React Native)](https://github.com/matt-oakes/redux-devtools-expo-dev-plugin)

## Redux Terms and Concepts

💡 _This is the basic idea behind Redux: a single centralized place to contain the global state in your application, and specific patterns to follow when updating that state to make the code predictable._

### Actions

An action is a plain JavaScript object that has a type field. 

**Action is an event that describes something that happened in the application.**

The `type` field should be a string that gives this action a descriptive name, like "todos/todoAdded" - "domain/eventName"

An action object can have payload field that contains additional information about what happened.

`const addTodoAction = {
   type: 'todos/todoAdded',
   payload: 'Buy milk'
}`

### Action Creators

An action creator is a function that creates and returns an action object

`const addTodo = text => {
   return {
      type: 'todos/todoAdded',
      payload: text
   }
}`