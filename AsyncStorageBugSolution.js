The solution addresses the race condition by ensuring the `getItem` promise from AsyncStorage resolves before accessing the data.  Using `await` within an `async` function guarantees this.  Error handling is also implemented to gracefully handle cases where data is not found.

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

async function getData() {
  try {
    const value = await AsyncStorage.getItem('@my_key');
    if (value !== null) {
      // We have data!!
      console.log('Retrieved data:', value);
      return JSON.parse(value);
    } else {
      console.log('No data found');
      return null;
    }
  } catch (e) {
    console.error('Error retrieving data:', e);
    return null;
  }
}
```