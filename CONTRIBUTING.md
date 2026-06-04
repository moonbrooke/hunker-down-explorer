# CONTRIBUTING

If you'd like to contribute, feel free to submit a [pull request](https://github.com/moonbrooke/hunker-down-explorer/pulls) or, if you're unfamiliar with Git/GitHub, simply open a [new issue](https://github.com/moonbrooke/hunker-down-explorer/issues) detailing what you want modified or added.

## Creating a New Issue

Thank you for helping improve the project! Please follow these guidelines before creating a new issue.

### 1. Check for Existing Issues
Before creating a new issue, please **search the existing open and closed issues** to make sure someone else hasn't already reported it or suggested the same change.

### 2. Provide a Clear Description
Clearly explain the details of the problem or suggestion in the description field. The more context you provide, the better.

### 3. Location Submissions (Additions or Modifications)
If your issue involves adding a new location or modifying an existing one, please ensure it includes the following specific details:

* **Issue Title:** Include the **YouTube video title** in the title of your issue.
* **Coordinates:** Provide the latitude and longitude of the location. [How to get the coordinates?](./assets/img/howto_coords.png)
    > *Example:* `54.116700003649996, -115.64754529270392`
* **Supporting Proof:** Include evidence that verifies this is the correct location. This can include:
    * Google Street View links or screenshots.
    * Video timestamps or frames.
    * Any other matching geographical or visual reference data.

> 💡 **Note on Accuracy:** Don't worry if you can't pin down the exact square inch. Some videos simply don't provide enough visual context for perfect precision, **best guesses and close approximations are completely welcome!**

## Pull Request Submissions / How to Add or Modify a Location

To add a new or modify an existing location, edit `data.js` and locate the array or append a new JSON object to the bottom of the array using the following schema specification.

### Data Schema Reference

```js
{
    "title": "Blatant Stealth Camping Under Tree",
    "video_id": "1NGa_Xt77xU",
    "description": "I finally got back out to do a night of stealth...",
    "stealth": true,
    "date": "2024/02/23",
    "location": "54.116700003649996, -115.64754529270392",
    "city": "Whitecourt, AB",
    "note": ""
}
```

### Field Breakdown

| Field | Type   | Description |
| ----- | ------ | ----------- |
| title | String | The title of the YouTube video. |
| video_id   | String | The YouTube video ID only (e.g., if the video URL is `https://www.youtube.com/watch?v=1NGa_Xt77xU`, the ID is `1NGa_Xt77xU`). |
| description | String | The text description from the YouTube video. |
| stealth | Boolean | Set to `true` if it's a stealth camping episode or `false` if it's non-stealth camping episode. |
| date | String | The date when the video is published. Format: `YYYY/MM/DD`. |
| location | String | Latitude and longitude coordinate string comma-separated (e.g., `"54.116700003649996, -115.64754529270392"`). [How to get the coordinates?](./assets/img/howto_coords.png) |
| city | String | The city and state/province code (e.g., `"Whitecourt, AB"` or `"Salmon River, NS"`). |
| note | String | Optional developer/contributor annotations or corrections regarding accuracy or other details. Leave as `""` if not needed. |

### Verify before Submitting the Pull Request

1. **Verify coordinates**: Check your latitude and longitude coordinates on Google Maps before pasting them into location.
2. **Format cleanly**: Keep standard JSON quotes (") around keys and values except for the boolean field stealth.
3. **Test locally**: Open `index.html` in your web browser. Filter, search, and select your added camping location to verify that:
    - The sidebar entry displays nicely.
    - The Google Maps iframe loads the embedded satellite perspective correctly.
    - The square YouTube thumbnail works without errors.
