# Firebase Setup Guide for MY MOON STORE

This guide will help you connect your website to Firebase Firestore database.

## Step 1: Create a Firebase Project

1. Go to [Firebase Cohttpsnsole](://console.firebase.google.com/)
2. Click **"Add project"** or select an existing project
3. Enter project name: **"MY MOON STORE"** (or your preferred name)
4. Disable Google Analytics (optional) or enable it if you want
5. Click **"Create project"**

## Step 2: Enable Firestore Database

1. In your Firebase project, click **"Firestore Database"** in the left menu
2. Click **"Create database"**
3. Select **"Start in test mode"** (for development)
4. Choose a location (select closest to your users, e.g., `asia-south1` for India)
5. Click **"Enable"**

## Step 3: Get Your Firebase Configuration

1. In Firebase Console, click the **gear icon** ⚙️ next to "Project Overview"
2. Select **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Click the **Web icon** `</>` to add a web app
5. Register your app with nickname: **"MY MOON STORE Web"**
6. Copy the `firebaseConfig` object that appears

## Step 4: Update firebase-config.js

1. Open `firebase-config.js` in your project
2. Replace the placeholder values with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

## Step 5: Set Firestore Security Rules

1. In Firebase Console, go to **Firestore Database** > **Rules**
2. Update the rules to allow read/write (for development):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /products/{document=**} {
      allow read: if true;
      allow write: if true;
    }
  }
}
```

3. Click **"Publish"**

⚠️ **Important**: These rules allow anyone to read/write. For production, implement proper authentication!

## Step 6: Test the Connection

1. Open `admin.html` in your browser
2. Enter admin password
3. Click **"Reset to Defaults"** - this will initialize Firebase with default products
4. Check Firebase Console > Firestore Database - you should see a `products` collection with 38 documents

## Step 7: Verify Real-time Updates

1. Open `admin.html` in one browser tab
2. Open `index.html` in another tab
3. Add/edit a product in admin - it should appear on the main page automatically (no refresh needed!)

## Troubleshooting

### Products not loading?
- Check browser console (F12) for errors
- Verify `firebase-config.js` has correct values
- Check Firestore Rules allow read access

### Can't save products?
- Check Firestore Rules allow write access
- Verify Firebase project has Firestore enabled
- Check browser console for error messages

### Still using localStorage?
- If Firebase config is not set, the app automatically falls back to localStorage
- This is intentional - your site will work even without Firebase

## Production Security Rules

For production, update Firestore rules to require authentication:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /products/{document=**} {
      allow read: if true;  // Anyone can read products
      allow write: if request.auth != null;  // Only authenticated users can write
    }
  }
}
```

## Benefits of Firebase

✅ **Real-time sync** - Changes appear instantly across all devices  
✅ **Cloud storage** - No need for localStorage  
✅ **Multi-device access** - Admin can manage from any device  
✅ **Scalable** - Handles large product catalogs  
✅ **Backup** - Data stored securely in the cloud  

## Need Help?

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Quickstart](https://firebase.google.com/docs/firestore/quickstart)

