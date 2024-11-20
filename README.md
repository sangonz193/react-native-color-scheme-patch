## Test patch

1. Install dependencies

   ```bash
   yarn
   ```

2. Start the app

   ```bash
    yarn ios
   ```

3. Tap the buttons on the screen. Notice how "light" and "dark" work as expected, but "null" and "undefined" make the current theme "null" and "undefined" respectively, instead of showing what the OS theme is.

4. Apply the patch

   ```bash
   npx patch-package
   ```

5. Close the app and stop metro.

6. Start the app again

   ```bash
    yarn ios
   ```

7. Tap the buttons on the screen. Notice how "light" and "dark" work as expected, and "null" and "undefined" now show the OS theme.
