import express from 'express';

const app = express();

const port = 3333;

app.get('/.well-know/assetslinks.json', (req, res) => {
  return res.json([{
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.example",
      "sha256_cert_fingerprints":
      ["14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5"]
    }
  }]);
});

app.get('/.well-know/apple-app-site-association', (req, res) => {
  return res.json({
    "applinks": {
      "apps": [],
      "details": [{
        "appID": "D3KQX62K1A.com.example.deeplinkexample",
        "paths": ["/home"]
        },
      ]
    }
  });
});

app.listen(port, () => {
  console.log(`🚀 Server started on port: ${port}`);
});