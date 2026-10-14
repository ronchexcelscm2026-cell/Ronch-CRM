// ===== Ronch Production Floor · settings =====
// Firebase project: ronch-crm (connected 14/10/2026)
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyBK8qoz7QZlG7kSnjYiZxBGFFlW9B6Nj0M",
  authDomain: "ronch-crm.firebaseapp.com",
  projectId: "ronch-crm",
  storageBucket: "ronch-crm.firebasestorage.app",
  messagingSenderId: "253604041643",
  appId: "1:253604041643:web:56d234059c22eb5f5978ee"
};

// Department logins are Firebase users named <department>@<loginDomain>:
//   admin@  sales@ (Client Order)  scm@  store@  production@  quality@  dispatch@  rnd@ (R&D)
// The domain does not need to be a real mailbox. If you change it here, create the users with the new domain.
window.APP_SETTINGS = {
  loginDomain: "ronch-floor.app"
};
