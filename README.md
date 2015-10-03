# bubu-twitchalerts

This is a meta-bundle for [NodeCG](http://github.com/nodecg/nodecg). It doesn't provide any display functionality on its own, it simply
provides a handle to an authenticated TwitchAlerts API context for other bundles to use.

## Installation

1. Install to `nodecg/bundles/bubu-twitchalerts`. Either clone this repository, or extract the zip archive from the GitHub project page.
2. Create a config file in `nodecg/cfg/bubu-twitchalerts.json`. See the Configuration section for more details.

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

## Known Issues

* Currently supports only a single logged in user per NodeCG instance.
* Error handling is brittle.

Please file all bug reports as GitHub issues.

## License
This project is licensed under the [MIT License](LICENSE)
