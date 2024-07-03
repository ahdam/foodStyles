## Step 1: Setup app

First, you will need to install the dependencies required for the project.

```bash
yarn setup
```
Or do it manually.

```bash
yarn
cd ios
pod install
cd ..
```

## Step 2: Test the app

Run linter and tests to make sure everything is working as expected.

```bash
yarn lint
yarn test
```

## Step 3: Start the app

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
yarn android
```

### For iOS

```bash
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
