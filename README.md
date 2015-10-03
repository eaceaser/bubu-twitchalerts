# bubu-twitchalerts

This is a meta-bundle for [NodeCG](Ihttp://github.com/nodecg/nodecg). It doesn't provide any display functionality on its own, it simply
provides a handle to the TwitchAlerts API for other bundles.

## Installation

- Install to `nodecg/bundles/bubu-twitchalerts` - either clone this repository, or extract the zip archive.
- Create a config file in `nodecg/cfg/bubu-twitchalerts.json`.

### Configuration

* `clientID`: The Client ID for an application registered with the TwitchAlerts API.
* `clientSecret`: The client secret for an application registered with the TwitchAlerts API.

#### Example

```json
{
  "clientID": "abcdefg",
  "clientSecret": "123456"
}
```

### License
This project is licensed under the [MIT License](LICENSE)
