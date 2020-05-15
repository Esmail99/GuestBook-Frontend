# Guest book frontend

## Relatives

website URL [HERE](https://esmail99.github.io/GuestBook-Frontend/).

Guestbook API repository [HERE](https://esmail99.github.io/GuestBook-Frontend/).


## Dependencies

This app uses some dependencies:

1. [tachyons](https://tachyons.io/#getting-started) - to add visual designs to the app and helps making css better and easier.

1. [axios](https://www.npmjs.com/package/axios) - to make the API request a little bit easier.

1. [react-popupbox](https://www.npmjs.com/package/react-popupbox) - to add a nice popup messages.


## Code Structure

```
.
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── App.js
│   ├── index.js
|   ├── index.css
│   ├── components
│   │   ├── homeComponents
│   │   │   ├── Comment.js
│   │   │   ├── DeleteMessage.js
│   │   │   ├── EditMessage.js
│   │   │   ├── Home.js
│   │   │   ├── Message.js
│   │   │   ├── WriteComment.js
│   │   │   └── WriteMessage
│   │   ├── Login.js
│   │   ├── NavBar.js
│   │   └── Register.js
│   ├── assets
│   │   └── images
│   │       ├── comment.png
│   │       ├── delete.webp
│   │       └── edit.png
│   ├── services
│   │   ├── localStorageManager.js
│   │   ├── messageServices.js
│   │   └── userServices.js
│   └── serviceWorker.js
└── .gitignore
```
