import React from 'react';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
      <WebView
        source={{ uri: 'name_url' }}
      />
  );
}

export default App;