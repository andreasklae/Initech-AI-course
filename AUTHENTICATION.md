# 🔒 Authentication System

The website is now password-protected with a simple authentication system.

## 🔑 Login Credentials

The credentials are configured in the source code. Contact the administrator for access.

## 🛡️ Security Features

### Password Hashing
The password is **not hardcoded** in plain text. Instead:
- The password is hashed using **SHA-256** algorithm
- Only the hash is stored in the code
- When a user logs in, their entered password is hashed and compared to the stored hash
- This prevents the actual password from being visible in the source code

### Session Management
- Authentication state is stored in `sessionStorage`
- Users remain logged in during their browser session
- Closing the browser tab/window logs them out automatically
- No cookies or localStorage used

## 🎨 User Experience

### Login Screen
When users visit the website, they see:
- A modern login form with glassmorphism design
- Logo and branding
- Username and password fields with icons
- Loading state during authentication
- Error messages for incorrect credentials
- "Logg inn" (Login) button

### Logged In State
Once authenticated:
- Users can access the full landing page
- A "Logg ut" (Logout) button appears in the top-right corner
- Clicking logout shows a confirmation dialog
- After logout, users return to the login screen

## 🔧 How It Works

### Component Structure
```
App.jsx
├── Checks sessionStorage for auth state
├── Shows Login component if not authenticated
└── Shows LandingPage component if authenticated

Login.jsx
├── Username & password input fields
├── SHA-256 password hashing
├── Validates credentials
└── Sets sessionStorage on success

LandingPage.jsx
├── Receives onLogout callback
├── Shows logout button
└── Clears sessionStorage on logout
```

### Authentication Flow
1. User visits website → App checks `sessionStorage.getItem('auth')`
2. If not authenticated → Show `Login` component
3. User enters username and password
4. Password is hashed with SHA-256
5. Hash is compared with stored hash
6. If match → `sessionStorage.setItem('auth', 'true')`
7. App re-renders and shows `LandingPage`
8. User can logout → clears sessionStorage

## 🔄 Changing Credentials

### Change Username
Edit `src/components/Login.jsx`:
```javascript
// Line ~42
if (username.toLowerCase() !== 'YOUR_USERNAME') {  // Change 'YOUR_USERNAME' here
```

### Change Password
1. Generate new hash:
```bash
node -e "const crypto = require('crypto'); const hash = crypto.createHash('sha256').update('YOUR_NEW_PASSWORD').digest('hex'); console.log(hash);"
```

2. Update hash in `src/components/Login.jsx`:
```javascript
// Line ~55
const correctHash = 'YOUR_NEW_HASH_HERE';
```

### Add Multiple Users
Currently supports one user. To add multiple users:
1. Create an object with username-hash pairs
2. Look up the hash based on the entered username
3. Compare hashed entered password with stored hash

## ⚠️ Security Considerations

### What This Protects Against
✅ Casual visitors viewing the site  
✅ Password not visible in source code  
✅ Simple access control  

### What This DOES NOT Protect Against
❌ **Not production-grade security** - This is a simple client-side solution  
❌ **Hash visible in source code** - Anyone can view the hash in the JavaScript  
❌ **No rate limiting** - Unlimited login attempts possible  
❌ **No backend validation** - Everything happens in the browser  
❌ **No user management** - Single hardcoded user  

### When to Use
This authentication system is suitable for:
- Internal demos or previews
- Beta testing with trusted users
- Simple access control for non-sensitive content
- Keeping the site private during development

### For Production Use
If you need real security, consider:
- Backend authentication with JWT tokens
- Database for user management
- Rate limiting and brute-force protection
- HTTPS encryption
- OAuth providers (Google, Microsoft, etc.)
- Multi-factor authentication

## 🧪 Testing

### Test Login
```bash
npm start
```

1. Visit `http://localhost:5173`
2. You should see the login screen
3. Enter your configured credentials
4. Click "Logg inn"
5. You should be redirected to the landing page

### Test Logout
1. Click the "Logg ut" button in top-right corner
2. Confirm the logout dialog
3. You should return to the login screen

### Test Session Persistence
1. Log in successfully
2. Refresh the page
3. You should still be logged in (no login screen)
4. Close the tab and open a new one
5. Visit the site → you should see the login screen again

## 📝 Notes

- The authentication is **client-side only**
- It's suitable for simple access control, not sensitive data
- The hash can be seen in the browser's DevTools
- Consider this a "security through obscurity" approach
- Perfect for internal use, demos, or beta testing

## 🔄 Removing Authentication

To remove the authentication system:

1. Edit `src/App.jsx`:
```javascript
import LandingPage from './components/LandingPage'

function App() {
  return <LandingPage onLogout={() => {}} />
}

export default App
```

2. Delete these files:
   - `src/components/Login.jsx`
   - `AUTHENTICATION.md`

3. Remove the logout button from `LandingPage.jsx` (lines ~156-164)

