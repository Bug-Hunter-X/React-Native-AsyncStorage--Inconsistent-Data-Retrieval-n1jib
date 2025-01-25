# React Native AsyncStorage: Inconsistent Data Retrieval

This repository demonstrates an uncommon bug in React Native's AsyncStorage, where data retrieval is inconsistent. The problem lies in the asynchronous nature of AsyncStorage and potential race conditions.  Sometimes data is successfully retrieved, while at other times `null` is returned despite the data being present.

## Bug Description

The core issue is the unpredictability of retrieving data from AsyncStorage.  The bug doesn't always manifest, leading to difficult debugging. The code includes examples of seemingly correct usage where the retrieved data is intermittently `null`.

## Solution

The solution involves using the `await` keyword to ensure that the `getItem` promise fully resolves before attempting to use the retrieved data. Proper error handling also prevents crashes and provides better debugging.

## Usage

1. Clone the repository.
2. Run `npm install`.
3. Run the app using your preferred React Native method.
4. Observe the inconsistent behavior in `AsyncStorageBug.js` and the consistent retrieval in `AsyncStorageBugSolution.js`.